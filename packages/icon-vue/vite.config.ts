import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins:[
    vue(),
    createSvgIconsPlugin({
      iconDirs:[resolve(process.cwd(),'src/icon/svg')],
      symbolId:'icon-[dir]-[name]'
    })
  ]
})