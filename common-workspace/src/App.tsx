import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import { HomeView } from "./views/HomeView";

const App = () => <HomeView />;

import "./index.scss";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
