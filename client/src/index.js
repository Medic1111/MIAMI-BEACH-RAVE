import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UiProvider from "./features/ui-ctx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UiProvider>
        <App />
      </UiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
