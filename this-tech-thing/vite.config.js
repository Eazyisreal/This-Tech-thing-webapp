import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pugPlugin from 'vite-plugin-pug';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [
    react(),
    pugPlugin(), // Register the pug plugin
  ],

  resolve: {
    alias: {
      // Add any necessary aliases
    },
  },

  rules: [
    {
      test: /\.pug$/,
      use: 'pug-plain-loader',
    },
  ],
});
