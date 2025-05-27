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
            <div style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} onClick={() => setMenuOpen(!MenuOpen)} >
                <MenuIcon
                    fontSize={40}
                    color='white'
                />
                {
                    MenuOpen && (
                        <div style={{ position: 'absolute', top: 50, right: 10, cursor: 'pointer', borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
                            <div className='MenuTextStyle'>
                                {`About`.toUpperCase()}
                            </div>
                            <div className='MenuTextStyle'>
                                {`Portfolio`.toUpperCase()}
                            </div>
                            <div className='MenuTextStyle'>
                                {`Contact`.toUpperCase()}
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    )
}


export default Header;