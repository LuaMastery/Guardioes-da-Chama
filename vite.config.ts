import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './', // Configuração essencial para o GitHub Pages (caminhos relativos)
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), viteSingleFile()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

