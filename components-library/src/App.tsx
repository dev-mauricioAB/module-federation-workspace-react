import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { HomeView } from "./views/HomeView";

import "./index.scss";

const App = () => <HomeView />;

ReactDOM.render(<App />, document.getElementById("app"));
