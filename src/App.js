import { Outlet, NavLink } from "react-router-dom";

import HeaderLogo from "./Components/Header";

import './Styles.css';

export default function App() {

  return (
    <div className="Wrapper">
      <div className="Header">
        <HeaderLogo />
        <nav
          className="HeaderNav"
        >
          <NavLink
            className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}
            to="/"
          >
            <div className="Linked">
              WhatWeDo
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}
            to="/Portfolio"
          >
            <div className="Linked">
              Portfolio
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}
            to="/About"
          >
            <div className="Linked">
              About
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}
            to="/Contact"
          >
            <div className="Linked">
              Contact
            </div>
          </NavLink>


        </nav>
        <Outlet />
      </div>
    </div>
  );
}