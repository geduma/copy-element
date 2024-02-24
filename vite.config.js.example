import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'copy-element',
      fileName: 'copy-element',
      formats: ['es', 'cjs']
    }
  }
})
