import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-base-path',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/claude-code-web-demo') {
            res.writeHead(301, { Location: '/claude-code-web-demo/' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  base: '/claude-code-web-demo/',
  server: {
    open: '/claude-code-web-demo/'
  }
})
