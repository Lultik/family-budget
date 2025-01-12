import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { type ProxyOptions, defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const PROXY_OPTIONS: ProxyOptions = {
  target: "http://localhost:5000/",
  changeOrigin: true,
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: "build",
    sourcemap: false,
    target: browserslistToEsbuild(),
    rollupOptions: {
      output: {
        compact: true,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 2022,
    proxy: {
      "/api": PROXY_OPTIONS,
      "/auth": PROXY_OPTIONS,
    },
  },
  define: {
    "process.env": `${JSON.stringify(loadEnv(mode, process.cwd(), "REACT_APP"))}`,
  },
}));
