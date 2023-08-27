import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { HomeView } from "./views/HomeView";

import "./index.scss";

export const AppA: React.FC = () => <HomeView />;

const isEmbedded = window.location.pathname.startsWith("/appA");

ReactDOM.render(
  <BrowserRouter basename={isEmbedded ? "/appA" : ""}>
    <AppA />
  </BrowserRouter>,
  document.getElementById("app")
);
