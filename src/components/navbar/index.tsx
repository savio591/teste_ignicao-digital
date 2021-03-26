import React from "react";
import { useState, useEffect } from "react";

import "./index.css";
import Nav from "./style";

function Navbar() {
  const [profile, setProfile] = useState({
    name: "",
    client_type: "",
    profile_icon_url: "",
  });

  useEffect(() => {
    fetch("/data/profile.json")
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, []);

  return (
    <>
      <Nav className="navbar">
        <ul>
          <li>
            <img
              src="../../assets/check-square.svg"
              alt="checar"
              title="checar"
            />
          </li>
          <li>
            <img
              src="../../assets/message-square.svg"
              alt="mensagem"
              title="mensagem"
            />
          </li>
          <li>
            <img src="../../assets/mail.svg" alt="email" title="email" />
          </li>
          <li>
            <img
              src="../../assets/calendar.svg"
              alt="Calendario"
              title="Calendário"
            />
          </li>
          <li>
            <img
              src="../../assets/star.svg"
              alt="favoritar"
              title="favoritar"
            />
          </li>
        </ul>
        <div className="user_nav">
          <ul>
            <li>
              <img
                src="../../assets/bell.svg"
                alt="Notificações"
                title="Notificações"
              />
            </li>
            <li>
              <img
                src="../../assets/search.svg"
                alt="Pesquisar"
                title="Pesquisar"
              />
            </li>
          </ul>
          <div className="profile_bar">
            <ul>
              <li className="text_normal">{profile.name}</li>
              <li className="text_light">{profile.client_type}</li>
            </ul>
            <a href="#">
              <img srcSet={profile.profile_icon_url} />
            </a>
          </div>
        </div>
      </Nav>
    </>
  );
}
export default Navbar;
