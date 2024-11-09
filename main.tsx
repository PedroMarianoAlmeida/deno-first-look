import React from "https://esm.sh/react";
import { renderToString } from "https://esm.sh/react-dom/server";

const AppRoot = () => (
  <h1 style={{ backgroundColor: "red" }}>Hello from React</h1>
);
const About = () => <h1>About</h1>;

Deno.serve((_req) => {
  const url = new URL(_req.url);

  const routesToComponents: Record<string, JSX.Element> = {
    "/": <AppRoot />,
    "/about": <About />,
    "not-found": <h1>Not Found</h1>,
  };

  const component =
    routesToComponents[url.pathname] || routesToComponents["not-found"];

  const html = renderToString(component);
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
});
