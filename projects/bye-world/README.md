# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

### Deploying under a subfolder (base path)

This app is configured to work when hosted in a sub-path, e.g. `https://xyz.com/mysite/:path` or `https://xyz.com/mysite/mysubsite/:path`.

1) Vite base

- For flexible deployments (unknown nesting), keep `base: './'` in `vite.config.ts`.
- For a fixed subfolder (e.g. `/mysite/`), set `base: '/mysite/'` instead and rebuild.

2) Router basename

- `BrowserRouter` is wired to detect and use the base path automatically at runtime.
- If you prefer an explicit setting, you can pass `basename={import.meta.env.BASE_URL}` to `BrowserRouter`.

3) Asset paths in `index.html`

- Use relative paths (e.g. `./logo.png`, `./src/main.tsx`) instead of root-absolute (`/...`).

4) Build, preview, run (Bun)

```bash
# dev
bun run dev

# production build
bun run build

# preview the built app (respects Vite base)
bun run preview
```

5) Server rewrites (SPA)

- Ensure your server rewrites unknown routes under the subfolder to that subfolder's `index.html`.
- Example (Nginx, subfolder `/mysite/`):

```nginx
location ^~ /mysite/ {
  try_files $uri $uri/ /mysite/index.html;
}
```

Troubleshooting:

- Routes 404 only in production: verify `base` in `vite.config.ts` and your server rewrites.
- Assets 404 under subfolders: verify `index.html` uses relative `./...` paths.
