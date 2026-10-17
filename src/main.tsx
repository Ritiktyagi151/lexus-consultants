import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Preserve old shared hash URLs while moving new navigation to clean paths.
if (window.location.hash.startsWith("#/")) {
  const legacyRoute = new URL(window.location.hash.slice(1), window.location.origin);
  window.history.replaceState(null, "", `${legacyRoute.pathname}${legacyRoute.search}${legacyRoute.hash}`);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
