import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/Images/Logo/NAW-head-Basic.png'
import MenuIcon from '@rsuite/icons/Menu';

import { Sidenav, Nav } from 'rsuite';

import '../Styles.css'

const ScreenTitle = ({ navigation, Title }) => {
    const Navigate = useNavigate()
    //State------------------------------------------------------
    const [MenuOpen, setMenuOpen] = useState(false)

    //Context----------------------------------------------------


    //Functions--------------------------------------------------


    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <div style={{ position: 'fixed', width: '100vw', top: 10, fontSize: '2em', zIndex:1000}} onClick={() => setMenuOpen(!MenuOpen)} >
                <div onClick={() => Navigate('/Home')} className='MenuTextStyle'>
                    {Title.toUpperCase()}
                </div>
            </div>
        </>
    )
}


export default ScreenTitle;