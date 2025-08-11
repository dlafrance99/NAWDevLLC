import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/Images/Logo/NAW-head-Basic.png'
import MenuIcon from '@rsuite/icons/Menu';

import { Sidenav, Nav } from 'rsuite';

import '../Styles.css'

const Header = ({ navigation }) => {
    const Navigate = useNavigate()
    //State------------------------------------------------------
    const [MenuOpen, setMenuOpen] = useState(false)

    //Context----------------------------------------------------


    //Functions--------------------------------------------------


    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <div style={{ position: 'fixed', top: 30, right: 30, cursor: 'pointer', zIndex: 1000 }} onClick={() => setMenuOpen(!MenuOpen)} >
                <MenuIcon
                    fontSize={40}
                    color='white'
                />
                {
                    MenuOpen && (
                        <div style={{ position: 'absolute', top: 50, right: 10, cursor: 'pointer', backgroundColor: '#0000004D', borderRadius: 15, padding: 10 }}>
                            <div onClick={() => Navigate('/Home')} className='MenuTextStyle'>
                                {`Home`.toUpperCase()}
                            </div>
                            <div onClick={() => Navigate('/Portfolio')} className='MenuTextStyle'>
                                {`Portfolio`.toUpperCase()}
                            </div>
                            <div onClick={() => Navigate('/About')} className='MenuTextStyle'>
                                {`About`.toUpperCase()}
                            </div>
                            <div onClick={() => Navigate('/Contact')} className='MenuTextStyle'>
                                {`Contact`.toUpperCase()}
                            </div>

                        </div>
                    )
                }
            </div >
        </>
    )
}


export default Header;