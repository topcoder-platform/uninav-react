import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
        insertTypesEntry: true,
    }),
  ],
  build: {
    target: 'es2015',
    minify: false,
    lib: {
      entry: path.resolve(__dirname, './lib/index.ts'),
      name: 'uninav',
      formats: ['es', 'umd'],
      fileName: (format) => `uninav-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        generatedCode: {
          preset: 'es5',
          arrowFunctions: false,
          constBindings: true,
          objectShorthand: false,
          reservedNamesAsProps: false,
          symbols: false,
        },
        globals: {
          react: 'React',
        },
      },
    },
  }
})
