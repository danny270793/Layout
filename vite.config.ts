import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite'
import { peerDependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    dts({ tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json') }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
      cssFileName: 'index',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
