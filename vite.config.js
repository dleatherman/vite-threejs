// vite.config.js
export default {
  root: "./src",
  server: {
    host: "localhost",
    port: 3000,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
};
