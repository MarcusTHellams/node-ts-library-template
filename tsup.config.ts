import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm', 'iife'],
  globalName: 'nodeTsLibraryTemplate',
  minify: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
