import { Outlet, NavLink } from "react-router-dom";

import Home from "./Screens/Home";

import logo from './Assets/Images/Logo/Whale_NAWDEV_Right.png'

import './Styles.css';

export default function App() {
  return (
    <div className="Wrapper">
      <div className="Header">
        <nav
          className="Nav"
        >
          <NavLink
            className={("HeaderLink")}
            to="/NAWNAW"
          >

            <img
              src={logo}
              alt='logo'
              className='HeaderLogoImage'
            />
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}
            to="/WhatWeDo"
          >
            <div className="Linked">
              WhatWeDo
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
            to="/Portfolio"
          >
            <div className="Linked">
              Portfolio
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