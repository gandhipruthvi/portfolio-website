// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { DarkModeProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
