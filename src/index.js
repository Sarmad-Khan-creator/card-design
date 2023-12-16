import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import InputContextProvider from "./context/input-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputContextProvider>
      <App />
    </InputContextProvider>
  </React.StrictMode>
);
