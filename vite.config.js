import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';

const __dirname = dirname(fileURLToPath(import.meta.url))

const pcWikiInputs = globSync('PC-wiki/**/*.html', { cwd: __dirname })
  .filter(f => !f.includes('article-template'))
  .reduce((acc, file) => {
    const name = file.replace('PC-wiki/', '').replace('.html', '');
    acc[name || 'index'] = resolve(__dirname, file);
    return acc;
  }, {});

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  server: {
    host:'0.0.0.0',
    port: 5173,
  },
  preview: {
    allowedHosts:['www.marzweb.win'],
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Projects: resolve(__dirname, '/Projects/index.html'),
        Contact: resolve(__dirname, '/Contact/index.html'),
        checker: resolve(__dirname, '/checkers_multiplayer/index.html'),
        valentine: resolve(__dirname, '/Valentine/index.html'),
        valentineyespage: resolve(__dirname, '/Valentine/yes_page.html'),
        ...pcWikiInputs,
      },
    },
  },
});
