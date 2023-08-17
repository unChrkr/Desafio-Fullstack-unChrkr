import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import inject from "@rollup/plugin-inject";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
  };
});
