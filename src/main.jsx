import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShortlistProvider } from "./context/ShortlistedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShortlistProvider>
      <App />
    </ShortlistProvider>
  </React.StrictMode>
);
