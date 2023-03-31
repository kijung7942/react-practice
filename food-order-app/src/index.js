import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DummyMealProvider } from "./store/dummy-meals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DummyMealProvider>
      <App />
    </DummyMealProvider>
);
