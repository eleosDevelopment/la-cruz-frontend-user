import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.ts";
import AuthProvider from "./data/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <GlobalStyles />
      <App />
    </AuthProvider>
  </StrictMode>
);
