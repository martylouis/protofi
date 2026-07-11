import demo from "./demo/index.html";

const server = Bun.serve({
  routes: {
    "/": demo,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Protofi demo running at ${server.url}`);
