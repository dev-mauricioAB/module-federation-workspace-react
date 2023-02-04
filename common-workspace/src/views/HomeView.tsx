import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { ApplicationsCards } from "../components/ApplicationsCards";
import { AppA } from "ApplicationA/AppA";
import { AppB } from "ApplicationB/AppB";

export const HomeView: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/home");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<ApplicationsCards />} />
        <Route path="/appA/*" element={<AppA clickLogo={goToHome} />} />
        <Route path="/appB" element={<AppB clickLogo={goToHome} />} />
      </Routes>
    </div>
  );
};
