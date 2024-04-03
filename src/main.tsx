import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("drop-app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
