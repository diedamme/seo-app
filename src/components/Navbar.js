import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg p-3 mb-2 bg-dark text-white">
    <div className="navbar-brand">
      <NavLink to="/">
        <img className="w-100" src={logo} />
      </NavLink>
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Удаление фраз
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/uniqueize-phrases">
          Уникализировать фразы
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add-phrase">
          Добавление фразы
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/leave-or-remove">
          Оставить/очистить
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/phrase-conversion">
          Преобразование фраз
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          Справка
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
