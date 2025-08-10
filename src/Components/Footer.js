import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/Images/Logo/NAW_Dev_Logo_Normal.png'
import { FaGithub, FaInstagram, FaPatreon } from 'react-icons/fa'

const Footer = () => {
    const Navigate = useNavigate()

    return (
        <>
            <div className='Header Nav'>
                <div className='CopyRight' style={{ flex: 1 }}>
                    &copy; 2020-2022 NAW Development LLC
                </div>


                <div className='SocialContainer Nav' style={{ flex: 1 }}>
                    <div className='FooterIcon'>
                        <a target='_blank' className='noMargin' rel="noopener noreferrer" href='https://www.instagram.com/nawdevelopment/' >
                            <FaInstagram
                                className='SocialIcon'
                            />
                        </a>
                    </div>

                    <div className='FooterIcon'>
                        <a target='_blank' className='noMargin' rel="noopener noreferrer" href='https://www.github.com' >
                            <FaGithub
                                className='SocialIcon'
                            />
                        </a>
                    </div>
                </div>

                <div style={{ flex: 1, justifyContent: 'space-around', display: 'flex', alignItems: 'center' }}>
                    <div className='CopyRight' onClick={() => Navigate('/Terms')} style={{ cursor: 'pointer' }}>
                        Terms & Privacy
                    </div>
                    <img
                        src={logo}
                        alt='NAW Development logo'
                        className='FooterLogoImage'
                    />
                </div>
            </div>
        </>
    )
}

export default Footer;