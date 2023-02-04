import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HomeView: React.FC = () => {
  const actionLinks = [
    {
      label: "Home",
      enabled: true,
      onClick: () => {
        console.log("click home");
      },
    },
    {
      label: "Events",
      enabled: false,
      onClick: () => {
        console.log("click events");
      },
    },
  ];

  return (
    <main>
      <Header title="Header in components library" actionLinks={actionLinks} />

      <section className="m-10">
        <h1>Home View in Components Library</h1>
      </section>

      <Footer title="Footer in components-library" />
    </main>
  );
};
