import React from "react";
import { createRoot } from "react-dom/client";

import { HomeView } from "./views/HomeView";

import "./index.scss";

const container = document.getElementById("app");
const root = createRoot(container!);

const App = () => <HomeView />;
root.render(<App />);
