import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/nike-landing/', // Ensure the trailing slash is included
  plugins: [react()],
});
