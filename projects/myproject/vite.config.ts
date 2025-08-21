import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';
  
  return {
    plugins: [
      react()
    ],
    // Ensure assets and router work from any subfolder during build/preview
    base: './',
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    define: {
      '__IS_SANDBOX__': JSON.stringify(isDevelopment),
    },
    server: {
      allowedHosts: [
        '.sandbox.golex.ai',
        'sandbox.golex.ai',
        '.prvw.live'
      ],
      host: true,
      cors: true
    },
    build: {
      sourcemap: true,
    },
    preview: {
      port: 5173,
      host: true,
      strictPort: true
    }
  }
})