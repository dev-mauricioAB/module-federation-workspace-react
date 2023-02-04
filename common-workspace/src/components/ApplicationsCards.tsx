import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "componentsLibrary/Header";
import { Footer } from "componentsLibrary/Footer";

interface ApplicationProps {
  name: string;
  path: string;
  description: string;
}

export const ApplicationsCards: React.FC = () => {
  const navigate = useNavigate();
  const applications: ApplicationProps[] = [
    {
      name: "Application A",
      path: "/appA",
      description: "Application A loren i",
    },
    {
      name: "Application B",
      path: "/appB",
      description: "Application B loren i",
    },
  ];

  const handleHomeAction = () => {
    navigate("/");
  };

  return (
    <>
      <Header title="Header in common-workspace" clickLogo={handleHomeAction} />
      <div className="py-6 flex w-full justify-center items-center">
        {applications.map(({ description, name, path }, index) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-1"
            key={index}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Caraca</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
              <Link to={path}>
                <button className="px-6 py-2 text-sm rounded shadow text-black-500 transition bg-blue-100">
                  {name}
                </button>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span
                className="
                  inline-block 
                  bg-gray-200 
                  rounded-full
                  px-3 py-1
                  text-sm 
                  font-semibold 
                  text-gray-700 
                  mr-2 mb-2"
              >
                #laia
              </span>
            </div>
          </div>
        ))}

        <Footer title="Footer in common-workspace" />
      </div>
    </>
  );
};
