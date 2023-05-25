import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
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
