import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shadcn': resolve(__dirname, './src/shared/Components/Shadcn'),
      '@shadcn/*': resolve(__dirname, './src/shared/Components/Shadcn/*'),
      '@tools': resolve(__dirname, './src/shared/Tools'),
      '@tools/*': resolve(__dirname, './src/shared/Tools/*'),
    },
  },
})
