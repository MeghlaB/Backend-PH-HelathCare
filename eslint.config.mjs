// @ts-check

// @ts-ignore
import eslint from '@eslint/js';
// @ts-ignore
import { defineConfig } from 'eslint/config';
// @ts-ignore
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
);