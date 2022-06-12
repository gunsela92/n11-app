import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainThemeProvider from "./ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainThemeProvider>
      <App />
    </MainThemeProvider>
  </React.StrictMode>
);
