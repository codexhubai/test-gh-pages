# GitHub Actions Workflow Documentation

## Overview

The `.github/workflows/static.yml` file contains the automated deployment pipeline for the CodexHub Website Builder. This workflow intelligently detects changes in project folders and builds only the modified projects, then deploys them to GitHub Pages.

## Workflow Trigger

### Automatic Triggers
```yaml
on:
  push:
    branches: ["main"]
    paths:
      - 'projects/**'  # Only trigger when projects folder changes
```

### Manual Triggers
```yaml
workflow_dispatch:  # Allows manual execution from GitHub Actions tab
```

## Workflow Architecture

### Permissions
```yaml
permissions:
  contents: read      # Read repository content
  pages: write        # Deploy to GitHub Pages
  id-token: write     # Authentication for deployment
```

### Concurrency Control
```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false  # Allow production deployments to complete
```

## Detailed Step-by-Step Process

### 1. Checkout Repository
```yaml
- name: Checkout
  uses: actions/checkout@v4
  with:
    fetch-depth: 0  # Full history for change detection
```

**Purpose**: Clone the repository with full git history to enable change detection.

### 2. Setup Bun Package Manager
```yaml
- name: Setup Bun
  uses: oven-sh/setup-bun@v2
  with:
    bun-version: latest
```

**Purpose**: Install Bun for faster package management and builds.

### 3. Determine Changed Projects
```yaml
- name: Determine changed projects
  id: changed
  run: |
    set -euo pipefail
    # Determine a base commit for the diff
    if [ -n "${{ github.event.before }}" ] && [ "${{ github.event.before }}" != "0000000000000000000000000000000000000000" ]; then
      BASE="${{ github.event.before }}"
    else
      BASE=$(git rev-parse HEAD^ 2>/dev/null || git rev-list --max-parents=0 HEAD)
    fi
    # Ensure BASE exists in the local clone (handle shallow clones / rebases)
    if ! git cat-file -e "$BASE^{commit}" 2>/dev/null; then
      BASE=$(git rev-parse HEAD^ 2>/dev/null || git rev-list --max-parents=0 HEAD)
    fi
    CHANGED=$(git diff --name-only "$BASE" HEAD | awk -F/ '/^projects\/[A-Za-z0-9_.-]+\// {print $2}' | sort -u | tr '\n' ' ')
    echo "projects=$CHANGED" >> "$GITHUB_OUTPUT"
    echo "Changed projects: $CHANGED"
```

**Purpose**: 
- Compare current commit with previous commit
- Extract project names from changed files
- Handle edge cases (first commit, rebases, etc.)
- Output list of changed projects for subsequent steps

**Logic**:
1. Determine base commit for comparison
2. Handle shallow clones and rebases
3. Extract project names using regex pattern
4. Sort and deduplicate project names
5. Store result in GitHub Actions output

### 4. Build Changed Projects
```yaml
- name: Build changed projects and stage into dist/
  if: steps.changed.outputs.projects != ''
  run: |
    set -euo pipefail
    mkdir -p dist
    for proj in ${{ steps.changed.outputs.projects }}; do
      dir="projects/$proj"
      if [ -f "$dir/package.json" ]; then
        echo "Building $dir"
        (cd "$dir" && bun install --silent && bun run build)
        mkdir -p "dist/$proj"
        cp -R "$dir/dist/." "dist/$proj/"
      else
        echo "Skipping $dir (no package.json)"
      fi
    done
    echo "Staged projects:"
    ls -la dist
```

**Purpose**: Build only the projects that have changed.

**Process**:
1. Create main `dist/` directory
2. Iterate through changed projects
3. Verify project has `package.json` (valid project)
4. Install dependencies with `bun install --silent`
5. Build project with `bun run build`
6. Copy built files to `dist/project-name/`
7. Display staged projects

### 5. Skip Step (No Changes)
```yaml
- name: Skip (no project changes)
  if: steps.changed.outputs.projects == ''
  run: echo "No changes under projects/*; skipping build and deploy."
```

**Purpose**: Provide clear feedback when no projects have changed.

### 6. Setup GitHub Pages
```yaml
- name: Setup Pages
  if: steps.changed.outputs.projects != ''
  uses: actions/configure-pages@v5
```

**Purpose**: Configure GitHub Pages deployment settings.

### 7. Upload Artifact
```yaml
- name: Upload artifact
  if: steps.changed.outputs.projects != ''
  uses: actions/upload-pages-artifact@v3
  with:
    path: './dist'  # Upload the entire dist folder
```

**Purpose**: Upload built files as GitHub Pages artifact.

### 8. Deploy to GitHub Pages
```yaml
- name: Deploy to GitHub Pages
  id: deployment
  if: steps.changed.outputs.projects != ''
  uses: actions/deploy-pages@v4
```

**Purpose**: Deploy the uploaded artifacts to GitHub Pages.

## URL Structure

### Deployment URLs
Projects are deployed to GitHub Pages with the following URL structure:

```
https://{username}.github.io/{repository-name}/{project-name}/
```

**Examples**:
- `https://username.github.io/website-builder-agent-example/myproject/`
- `https://username.github.io/website-builder-agent-example/project-1/`
- `https://username.github.io/website-builder-agent-example/project-2/`

### Router Basename Detection

The `App.tsx` includes intelligent basename detection:

```typescript
function getRouterBasename(): string {
  // Prefer Vite base if it's a non-root absolute path
  const viteBase = (import.meta as any)?.env?.BASE_URL as string | undefined;
  if (viteBase && viteBase !== "/" && viteBase !== "./") {
    return viteBase;
  }

  const pathname = window.location.pathname;

  // Known route patterns from this app
  const routePaths = [
    "/login",
    "/client-dashboard",
    "/admin-dashboard",
    "/admin",
    "/upload-data",
    "/analytics",
    "/admin-settings",
    "/dataset/:id",
    "/about",
    "/contact",
    "/components",
    "/", // keep last for lowest priority
  ];

  // Try to find the longest matching route suffix
  const sorted = [...routePaths].sort((a, b) => b.length - a.length);
  for (const route of sorted) {
    const routePattern = route
      .replace(/^\//, "")
      .replace(/:[^/]+/g, "[^/]+")
      .replace(/\//g, "\\/");
    const regex = new RegExp(`(?:^|\\/)${routePattern}\\/?$`);
    const match = pathname.match(regex);
    if (match) {
      const index = pathname.search(regex);
      const base = pathname.slice(0, index);
      return base || "/";
    }
  }

  // Fallback: if path ends with a slash
  if (pathname !== "/" && pathname.endsWith("/")) {
    const trimmed = pathname.replace(/\/+$/, "");
    return trimmed || "/";
  }

  return "/";
}
```

## Performance Optimizations

### Incremental Builds
- Only builds projects that have changed
- Saves build time and resources
- Reduces deployment time

### Silent Installation
- Uses `bun install --silent` to reduce log noise
- Faster installation process

### Concurrent Deployment Control
- Prevents multiple deployments from running simultaneously
- Ensures stable deployment process

## Error Handling

### Project Validation
```bash
if [ -f "$dir/package.json" ]; then
  # Build project
else
  echo "Skipping $dir (no package.json)"
fi
```

### Git History Handling
```bash
# Handle edge cases for git history
if ! git cat-file -e "$BASE^{commit}" 2>/dev/null; then
  BASE=$(git rev-parse HEAD^ 2>/dev/null || git rev-list --max-parents=0 HEAD)
fi
```

### Conditional Execution
- Steps only execute when there are actual changes
- Clear feedback when no changes are detected

## Monitoring and Debugging

### Build Logs
- Each project build is logged separately
- Clear indication of which projects are being built
- Error messages for failed builds

### Deployment Status
- GitHub Actions provides detailed status
- Deployment URL is available in the workflow output
- Failed deployments are clearly marked

## Customization Options

### Adding New Build Steps
You can extend the workflow by adding additional steps:

```yaml
- name: Custom Build Step
  if: steps.changed.outputs.projects != ''
  run: |
    for proj in ${{ steps.changed.outputs.projects }}; do
      echo "Running custom step for $proj"
      # Your custom build logic here
    done
```

### Environment Variables
```yaml
env:
  NODE_ENV: production
  CUSTOM_VAR: value
```

### Conditional Builds
```yaml
- name: Build with conditions
  if: contains(steps.changed.outputs.projects, 'specific-project')
  run: |
    # Build only specific projects
```

## Troubleshooting

### Common Issues

1. **No projects detected**: Check if changes are in `projects/**` path
2. **Build failures**: Verify `package.json` exists and is valid
3. **Deployment issues**: Check GitHub Pages settings and permissions
4. **Router issues**: Verify basename detection logic

### Debug Commands
```bash
# Check changed files
git diff --name-only HEAD~1 HEAD

# Verify project structure
ls -la projects/

# Test build locally
cd projects/project-name && bun run build
```

## Security Considerations

### Permissions
- Minimal required permissions for deployment
- Read-only access to repository content
- Write access only to GitHub Pages

### Authentication
- Uses GitHub's built-in authentication
- No external API keys required
- Secure token handling

---

This workflow provides a robust, efficient deployment system that scales with the number of projects while maintaining fast build times through incremental processing.
