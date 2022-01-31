import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/Logo/Whale_NAWDEV_Right.png'
import '../Styles.css';


const Header = () => {
    return (
        <div className='Header Nav'>
            <img
                src={logo}
                alt='logo'
                className='HeaderLogoImage'
            />

            
                <NavLink to="/whatwedo" className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}>
                    WHAT WE DO
                </NavLink>

                <NavLink href='/about' className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}>
                    ABOUT
                </NavLink>

                <NavLink href='portfolio' className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}>
                    PORTFOLIO
                </NavLink>

                <NavLink href='/Contact' className={({ isActive }) => isActive ? "HeaderLinkActive" : "HeaderLink"}>
                    CONTACT
                </NavLink>

        </div>
    )
}

export default Header;