import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno basadas en el modo (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: parseInt(env.VITE_PORT || '3001'),
      host: true, // Permite acceso desde la red
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:8000',
          changeOrigin: true,
          secure: false,
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              // Asegurarse de que la IP real se pase al backend
              const realIP = req.socket.remoteAddress
              proxyReq.setHeader('X-Real-IP', realIP)
              proxyReq.setHeader('X-Forwarded-For', realIP)
            })
          }
        }
      }
    },
    define: {
      // Asegurarse de que import.meta.env está disponible en el código
      // Este paso hace que TypeScript no se queje de import.meta.env
      '__APP_ENV__': JSON.stringify(env)
    },
    // Resolver alias para importaciones @ que apuntan a src/
    resolve: {
      alias: {
        '@': '/src',
        '@images': '/public/images'
      }
    }
  }
})