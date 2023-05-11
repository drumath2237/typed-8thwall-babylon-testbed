import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      server: {
        https: true,
        port: 3000,
      },
      plugins: [mkcert()],
    };
  }
  return {};
});
