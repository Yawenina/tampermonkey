import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import tsAlias from 'vite-plugin-ts-alias';

const packageJson = require('./package.json');

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
        namespace: 'lazada',
        name: packageJson.name,
        author: packageJson.author?.name,
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN01vGw86X1LoyCBQ9hk2_!!6000000001347-55-tps-501-407.svg',
        include: ['*://*.lazada.*', '*://*.lazada-seller.cn/*', '*://*.miravia.es/*'],
        updateURL,
        downloadURL: updateURL,
      },
      build: {
        externalGlobals: {
          // preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
        },
      },
    }),
  ],
});