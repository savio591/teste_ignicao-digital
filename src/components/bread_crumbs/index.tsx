import React, { useEffect, useState } from "react";

import "./index.css";

import home_icon from "../../assets/home.svg";

const Bread_crumbs: React.FC = () => {
  const [nav_data, setNav_data] = useState({
    name: "",
    breadcrumbs: [],
  });

  useEffect(() => {
    fetch("/data/nav.json")
      .then((response) => response.json())
      .then((data) => {
        setNav_data(data);
      });
  }, []);

  return (
    <>
      <nav className="nav_breadcrumb">
        <div className="breadcrumb">
          <h2 className="breadcrumb_state">{nav_data.name}</h2>
          <ul className="breadcrumb_list">
            <li>
              <a href="#">
                <img
                  src={home_icon}
                  alt="Pagina Inicial"
                  title="Página Inicial"
                />
              </a>
            </li>
            {nav_data.breadcrumbs.map((breadcrumb) => (
              <li>
                <a href="#">
                  <h4>{breadcrumb}</h4>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="settings" title="configurações">
          <a href="#">
            <img src="../../assets/settings.svg" alt="configurações" />
          </a>
        </div>
      </nav>
    </>
  );
};
export default Bread_crumbs;
