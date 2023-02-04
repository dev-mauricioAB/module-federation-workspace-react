import React from "react";
import { Link } from "react-router-dom";

import { HeaderProps } from "../models/header-model";

export const Header: React.FC<HeaderProps> = ({
  title,
  clickLogo,
  actionLinks,
}) => {
  return (
    <div>
      <header className="px-4 py-2 bg-blue-100 flex justify-between items-center">
        <button onClick={clickLogo}>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
            width="50"
            alt="Daily Dev Tips Logo"
          />
        </button>

        <section>
          <div className="text-xl">{title} :)</div>
        </section>

        {actionLinks?.length && actionLinks?.length > 0 && (
          <section v-if="navItems">
            <nav className="flex justify-end">
              {actionLinks.map(({ label, onClick, enabled }, index) => (
                <ul className="flex" key={index}>
                  <li className="mr-6">
                    <a
                      className={`
                        ${
                          enabled
                            ? "text-black cursor-pointer hover:text-gray-700 trasition"
                            : "text-gray-400 cursor-not-allowed"
                        }
                        
                      `}
                      onClick={enabled ? onClick : () => {}}
                    >
                      {label}
                    </a>
                  </li>
                </ul>
              ))}
            </nav>
          </section>
        )}
      </header>
    </div>
  );
};
