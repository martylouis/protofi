import docs from "./docs/index.html";
import test from "./test/test.html";

const server = Bun.serve({
  routes: {
    // Block sources served raw so docs pages can show the exact file.
    "/source/blocks/:name": (req) =>
      new Response(Bun.file(`./docs/blocks/${req.params.name}.tsx`), {
        headers: { "Content-Type": "text/plain" },
      }),
    // Standalone page rendering the Dashboard Shell block outside the docs.
    "/test": test,
    // Docs use pathname routing client-side; serve the app for every path.
    "/*": docs,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Protofi docs running at ${server.url}`);
