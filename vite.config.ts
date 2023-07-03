import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  base: '/static/',
  build: {
    manifest: true,
    outDir: 'static/frontend/dist/',
    rollupOptions: {
      input: {
        main: 'static/frontend/src/main.tsx',
        todo: 'static/frontend/src/components/todo/main.tsx'
      }
    },
  }
})
