import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import tsAlias from 'vite-plugin-ts-alias';

const packageJson = require('./package.json');

// 当前目录名
const dirName = resolve(__dirname).split('/').pop();
const updateURL = `https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/${encodeURIComponent(
  dirName,
)}/dist/${encodeURIComponent(packageJson.name)}.user.js`;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: 'http://127.0.0.1:5173',
  },
  build: {
    minify: true,
  },
  plugins: [
    tsAlias(),
    preact(),
    monkey({
      entry: 'src/main.tsx',

      userscript: {
        name: packageJson.name,
        author: packageJson.author?.name,
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01UvYSTJ1Y7XjzREWkC_!!6000000003012-55-tps-30-30.svg',
        namespace: 'miravia',
        match: [
          '*://*.miravia.es/shop/*',
          '*://*.miravia.es/cl/store-test/*',
          '*://*.miravia.es/cl/store/*',
          '*://astore.alibaba-inc.com/*',
        ],
        updateURL,
        downloadURL: updateURL,
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
        },
      },
    }),
  ],
});
