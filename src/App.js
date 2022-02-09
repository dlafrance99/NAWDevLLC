import { Outlet, NavLink } from "react-router-dom";

import logo from './Assets/Images/Logo/Whale_NAWDEV_Right.png'
import Whale from './Assets/Images/Logo/NAW_Productions_10PercentOpacity.png'

import './Styles.css';

export default function App() {
  const RandomShift = () => {
    let number = Math.floor(Math.random() * 1000)

    return (number)
  }

  const WrapperStyle = {
    backgroundImage: `url(${Whale})`,
    backgroundSize: '400vw',
    backgroundPosition: `${RandomShift()}px`,
  
  }

  return (
    <div className="Wrapper" style={WrapperStyle}>

      <div className="Header">
        <nav
          className="Nav"
        >
          <NavLink
            className={("HeaderLink")}
            to="/"
          >

            <img
              src={logo}
              alt='logo'
              className='HeaderLogoImage'
            />
          </NavLink>

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