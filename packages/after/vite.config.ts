/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import type { UserConfig } from 'vite';
import type { UserConfig as VitestConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/front_7th_chapter3-1/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false, // CSS 파싱 비활성화 (jsdom이 Tailwind CSS v4 구문을 파싱하지 못함)
  },
} as UserConfig & VitestConfig);
