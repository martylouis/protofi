import docs from "./docs/index.html";

const server = Bun.serve({
  routes: {
    // Docs use pathname routing client-side; serve the app for every path.
    "/*": docs,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Protofi docs running at ${server.url}`);
