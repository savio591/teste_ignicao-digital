import React from "react";
import VerticalMenu from "./style";

export default function Vertical_menu() {
  return (
    <VerticalMenu>
      <header className="v_menu_header">
        <img className="brand" src="../../assets/brand.svg" alt="logo" />
        <button className="menu_box" type="submit">
          <p>Área do Cliente</p>
        </button>
        <nav className="menu_apps">
          <h3>APPS</h3>
          <ul>
            <li><i className="email"/>Email</li>
            <li><i className="message"/>Conversar</li>
            <li><i className="todo"/>Todo</li>
            <li><i className="calendar"/>Calendário</li>
          </ul>
        </nav>
      </header>
    </VerticalMenu>
  );
}
