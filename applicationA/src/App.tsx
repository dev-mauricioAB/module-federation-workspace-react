import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HomeView } from "./views/HomeView";

import "./index.scss";

const container = document.getElementById("app");
const root = createRoot(container!);

const AppA = () => <HomeView />;
root.render(
  <BrowserRouter basename="/">
    <AppA />
  </BrowserRouter>
);
