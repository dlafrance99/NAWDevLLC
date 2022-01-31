import React from 'react';



import logo from '../Assets/Images/Logo/Whale_NAWDEV_Right.png'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='Header Nav'>
                <img
                    src={logo}
                    alt='NAW Development logo'
                    className='HeaderLogoImage'
                />

                <div className='SocialContainer'>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/' >
                        <FaFacebook
                            className='SocialIcon'
                        />
                    </a>

                    <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com' >
                        <FaInstagram
                            className='SocialIcon'
                        />
                    </a>

                    <a target='_blank' rel="noopener noreferrer" href='https://www.github.com' >
                        <FaGithub
                            className='SocialIcon'
                        />
                    </a>
                </div>

                <div className='CopyRight'>
                    &copy; 2020-2022 NAW Development LLC
                </div>
            </div>
        </>
    )
}

export default Footer;