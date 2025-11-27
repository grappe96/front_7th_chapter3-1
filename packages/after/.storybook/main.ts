import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    // Storybook의 @storybook/react-vite가 이미 React 플러그인을 포함하므로
    // React 플러그인을 추가하지 않고 Tailwind CSS만 추가
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': path.resolve(dirname, '../src'),
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
      },
      server: {
        fs: {
          allow: ['..'],
        },
      },
    });
  },
};
export default config;
