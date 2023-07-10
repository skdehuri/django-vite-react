import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: '/static/',
    server: {
      origin: 'http://127.0.0.1:3000',
      host: 'localhost',
      port: 3000,
      open: false,
      watch: {
        usePolling: true,
        disableGlobbing: false,
      },
    },
    build: {
      manifest: true,
      sourcemap: true,
      outDir: 'static/dist/',
      rollupOptions: {
        input: {
          main: 'frontend/src/main.tsx',
          todo: 'frontend/src/components/todo/main.tsx',
        }
      },
    }
  }
})
