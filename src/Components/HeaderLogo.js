import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/Images/Logo/NAW-head-Basic.png'
import MenuIcon from '@rsuite/icons/Menu';

import { Sidenav, Nav } from 'rsuite';

import '../Styles.css'

const HeaderLogo = ({ navigation }) => {
    const Navigate = useNavigate()
    //State------------------------------------------------------
    const [MenuOpen, setMenuOpen] = useState(false)

    //Context----------------------------------------------------


    //Functions--------------------------------------------------


    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <img
                src={logo}
                alt='NAW Development logo'
                className='HeaderLogoImage'
                style={{ position: 'fixed', top: 10, left: 10 }}
            />
        </>
    )
}


export default HeaderLogo;