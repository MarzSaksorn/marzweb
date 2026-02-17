import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))

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
        Gamehub: resolve(__dirname, '/Gamehub/index.html'),
        Minesweeper: resolve(__dirname, '/Gamehub/Minesweeper/src/index.html'),
        Wordle: resolve(__dirname, '/Gamehub/tobiasmue91.github.io/games/wordle.html'),
        2048: resolve(__dirname, '/Gamehub/2048/index.html'),
        Sudoku: resolve(__dirname, '/Gamehub/Sudoku/index.html'),
        RPS: resolve(__dirname, '/Gamehub/Rock-paper-scissors_frontend_project/index.html'),
        TTT: resolve(__dirname, '/Gamehub/TTT MP/index.html'),
        Flappybird: resolve(__dirname, '/Gamehub/JS-Flappy-Bird/index.html'),
        whac: resolve(__dirname, '/Gamehub/tobiasmue91.github.io/games/whac.html'),
        taptaptap: resolve(__dirname, '/Gamehub/taptaptap/index.html'),
        Tetris: resolve(__dirname, '/Gamehub/tetris.bleach.dev/index.html'),
        Stack: resolve(__dirname, '/Gamehub/Stack-Game-JavaScript/index.html'),
      },
    },
  },
});