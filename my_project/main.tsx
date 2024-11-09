import React from "https://esm.sh/react";
import { renderToString } from "https://esm.sh/react-dom/server";

const App = () => <h1>Hello from React</h1>;

Deno.serve((_req) => {
  const html = renderToString(<App />);
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
});
