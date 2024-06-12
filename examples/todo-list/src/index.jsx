import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("todo-list-app"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
