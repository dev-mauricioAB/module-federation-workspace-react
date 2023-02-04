import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { Header } from "componentsLibrary/Header";
import { Footer } from "componentsLibrary/Footer";

interface AppBProps {
  clickLogo?: () => void;
}

export const AppB: React.FC<AppBProps> = ({ clickLogo }) => {
  return (
    <>
      <Header title="Header in Application B" clickLogo={clickLogo} />
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: applicationB =)</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
      </div>
      <Footer title="Footer in AppB" />
    </>
  );
};

ReactDOM.render(<AppB />, document.getElementById("app"));
