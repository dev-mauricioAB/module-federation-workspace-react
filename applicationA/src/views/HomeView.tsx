import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { Header } from "componentsLibrary/Header";
import { Footer } from "componentsLibrary/Footer";

import { ScreenA } from "./ScreenA";
import { ScreenB } from "./ScreenB";
import { ScreensCards } from "../components/ScreensCards";

export const HomeView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Header in Application A" clickLogo={() => navigate("/")} />

      <Routes>
        <Route path="/" element={<Navigate to="/appA" />} />
        <Route path="/appA" element={<ScreensCards />} />
        <Route path="/appA/screenA" element={<ScreenA />} />
        <Route path="/appA/screenB" element={<ScreenB />} />
      </Routes>
      <Footer title="Footer in Application A" />
    </div>
  );
};
