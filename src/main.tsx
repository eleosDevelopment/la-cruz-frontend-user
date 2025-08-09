import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
