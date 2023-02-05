import { jsx, render, view } from "@xania/view";

export function App() {
  // poor man's routing
  if (location.pathname === "/state" || location.pathname === "/packages/state")
    return import("./state/App").then((e) => view(<e.App />));
  else if (location.pathname === "/view")
    return import("./view/App").then((e) => view(<e.App />));
  return (
    <div>
      <a href="/view">View</a>
      <a href="/state">State</a>
    </div>
  );
}

render(<App />, document.getElementById("app"));

// Support Test
const supportsContainerQueries = "container" in document.documentElement.style;

// Conditional Import
if (!supportsContainerQueries) {
  import("https://cdn.skypack.dev/container-query-polyfill");
}
