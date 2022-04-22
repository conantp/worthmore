// const path = require('path');
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'src/components/index.js'),
//       name: 'WorthmoreLib',
//       fileName: (format) => `worthmore-lib.${format}.js`,
//     },
//     rollupOptions: {
//       external: ['vue'],
//       output: {
//         // Provide global variables to use in the UMD build
//         // Add external deps here
//         globals: {
//           vue: 'Vue',
//         },
//       },
//     },
//   },
//   plugins: [vue()]
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
