import { resolve } from 'node:path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        why: resolve(import.meta.dirname, 'why.html'),
      },
    },
  },
}
