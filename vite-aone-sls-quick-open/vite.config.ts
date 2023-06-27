import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import { resolve } from 'path';
import unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    origin: 'http://127.0.0.1:5173',
  },
  build: {
    minify: true,
  },
  plugins: [
    preact(),
    unocss(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        name: 'Aone SLS Quick Open',
        author: '风水',
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'lazada',
        match: [
          'https://cd.aone.alibaba-inc.com/unite/appcenter/app/*/basic',
          'https://cc.alibaba-inc.com/*',
        ],
        updateURL:
          'https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/vite-aone-sls-quick-open/dist/aone-sls-quick-open.user.js',
        downloadURL:
          'https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/vite-aone-sls-quick-open/dist/aone-sls-quick-open.user.js',
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
        },
      },
    }),
  ],
});
