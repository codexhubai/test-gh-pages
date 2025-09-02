# CodexHub Website Builder

A comprehensive website builder platform that enables users to create and deploy multiple web projects from a single repository. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🏗️ Architecture Overview

This repository follows a **template-based architecture** where:

- **`template/`** - Contains the base project template with all necessary dependencies and configurations
- **`projects/`** - Contains individual user projects, each copied from the template
- **GitHub Actions Workflow** - Automatically builds and deploys projects to GitHub Pages

### Directory Structure

```
website-builder-agent-example/
├── .github/workflows/static.yml    # GitHub Actions deployment workflow
├── template/                       # Base project template
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                 # Page components
│   │   ├── App.tsx               # Main app component
│   │   └── main.tsx              # Entry point
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.ts            # Vite configuration
│   └── tailwind.config.js        # Tailwind CSS configuration
├── projects/                      # User projects
│   ├── myproject/                # Example project
│   ├── project-1/                # Another project
│   ├── project-2/                # Another project
│   └── project-3/                # Another project
└── README.md                      # This documentation
```

## 🚀 Technology Stack

### Core Technologies
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Bun** - Package manager and runtime

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Pre-built component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Recharts** - Chart components

## 📋 Project Creation Workflow

### 1. Creating a New Project

To create a new project, copy the `template/` folder into a new directory under `projects/`:

```bash
# From the repository root
cp -r template/ projects/your-project-name/
```

### 2. Project Structure

Each project inherits the complete template structure:

```
your-project-name/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── dashboard/            # Dashboard-specific components
│   │   ├── home/                 # Home page components
│   │   └── layout/               # Layout components
│   ├── pages/                    # Page components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions
│   ├── App.tsx                   # Main app component
│   └── main.tsx                  # Entry point
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

### 3. Customizing Your Project

After copying the template, you can:

1. **Modify `package.json`** - Update project name, version, or add dependencies
2. **Edit `src/App.tsx`** - Add/remove routes and pages
3. **Create new pages** in `src/pages/`
4. **Add custom components** in `src/components/`
5. **Update styling** in `src/index.css` or `tailwind.config.js`

### 4. Development

```bash
cd projects/your-project-name/
bun install
bun run dev
```

### 5. Building

```bash
bun run build
```

## 🔄 GitHub Actions Workflow

The `.github/workflows/static.yml` file contains the automated deployment pipeline:

### Trigger Conditions
- **Push to main branch** with changes in `projects/**`
- **Manual trigger** via GitHub Actions tab

### Workflow Steps

1. **Checkout** - Clone the repository
2. **Setup Bun** - Install Bun package manager
3. **Determine Changed Projects** - Identify which projects were modified
4. **Build Projects** - Build only the changed projects
5. **Deploy to GitHub Pages** - Upload built artifacts

### Key Features

- **Incremental Builds** - Only builds projects that have changed
- **Concurrent Deployment** - Prevents multiple deployments from running simultaneously
- **GitHub Pages Integration** - Automatically deploys to `https://username.github.io/repository-name/project-name/`

### Build Process

```bash
# For each changed project:
cd projects/project-name/
bun install --silent
bun run build
# Copy dist/ contents to main dist/project-name/
```

## 🎨 Component System

### shadcn/ui Integration

The template uses shadcn/ui for consistent, accessible components:

- **47 pre-built components** in `src/components/ui/`
- **Customizable styling** via Tailwind CSS
- **TypeScript support** with proper type definitions
- **Accessibility features** built-in

### Component Categories

1. **UI Components** (`src/components/ui/`)
   - Buttons, inputs, modals, dropdowns
   - Data display components (tables, cards)
   - Navigation components

2. **Layout Components** (`src/components/layout/`)
   - Header, footer, sidebar
   - Page layouts and containers

3. **Feature Components** (`src/components/dashboard/`, `src/components/home/`)
   - Domain-specific components
   - Business logic components

## 🛠️ Configuration Files

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig({
  plugins: [react()],
  base: './',                    // Relative paths for subfolder deployment
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),  // Path aliases
    },
  },
  build: {
    sourcemap: true,             // Generate source maps
  },
  preview: {
    port: 5173,
    host: true,
    strictPort: true
  }
})
```

### Tailwind Configuration (`tailwind.config.js`)

- **Base color**: Zinc
- **CSS variables**: Enabled
- **Animations**: Included via `tailwindcss-animate`
- **Custom utilities**: Available

### TypeScript Configuration (`tsconfig.json`)

- **Strict mode**: Enabled
- **Path mapping**: Configured for `@/` alias
- **React JSX**: Configured for React 18

## 📱 Routing System

### Dynamic Router Basename

The `App.tsx` includes intelligent router basename detection:

```typescript
function getRouterBasename(): string {
  // Detects if the app is running in a subfolder
  // Handles GitHub Pages deployment scenarios
  // Supports dynamic route matching
}
```

### Route Structure

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/client-dashboard" element={<ClientDashboard />} />
  <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/upload-data" element={<UploadData />} />
  <Route path="/analytics" element={<Analytics />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/components" element={<ComponentDemo />} />
  <Route path="*" element={<ErrorPage />} />
</Routes>
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Automatic**: Triggered by pushes to main branch
2. **URL Format**: `https://username.github.io/repository-name/project-name/`
3. **Build Output**: Static files in `dist/project-name/`

### Manual Deployment

```bash
# Build the project
cd projects/your-project-name/
bun run build

# The dist/ folder contains deployable static files
```

## 🔧 Development Commands

### Available Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "tsc -b && vite build", // Build for production
  "build:dev": "vite build --mode development", // Build for development
  "lint": "eslint .",              // Run ESLint
  "preview": "vite preview"        // Preview production build
}
```

### Development Server

```bash
bun run dev
# Server runs on http://localhost:5173
```

## 📦 Dependencies

### Core Dependencies
- **React 18** - UI framework
- **React Router DOM 7** - Routing
- **React Query** - Data management
- **Framer Motion** - Animations

### UI Dependencies
- **Radix UI** - Component primitives
- **Lucide React** - Icons
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library

### Development Dependencies
- **TypeScript** - Type checking
- **ESLint** - Code linting
- **Vite** - Build tool
- **Bun** - Package manager

## 🎯 Best Practices

### Project Organization
1. **Keep projects isolated** - Each project should be self-contained
2. **Use consistent naming** - Follow kebab-case for project names
3. **Document customizations** - Add README files for project-specific features

### Development Workflow
1. **Test locally** - Always test before pushing
2. **Incremental changes** - Make small, focused changes
3. **Version control** - Commit changes with descriptive messages

### Performance
1. **Code splitting** - Use React.lazy() for route-based splitting
2. **Bundle optimization** - Vite handles most optimizations automatically
3. **Asset optimization** - Use appropriate image formats and sizes

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## 📄 License

This project is licensed under the MIT License.

---

**Built with CodexHub.ai website's builder** 🚀
