import React from 'react';



import logo from '../Assets/Images/Logo/Whale_NAWDEV_Right.png'
import { FaGithub, FaInstagram, FaPatreon } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='Header Nav'>
                <img
                    src={logo}
                    alt='NAW Development logo'
                    className='HeaderLogoImage'
                />

                <div className='SocialContainer Nav'>
                    <div className='FooterIcon'>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.patreon.com/'  >
                            <FaPatreon
                                className='SocialIcon'
                                size="10"
                            />
                        </a>
                    </div>


                    <div className='FooterIcon'>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/nawdevelopment/' >
                            <FaInstagram
                                className='SocialIcon'
                            />
                        </a>
                    </div>

                    <div className='FooterIcon'>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.github.com' >
                            <FaGithub
                                className='SocialIcon'
                            />
                        </a>
                    </div>
                </div>

                <div className='CopyRight'>
                    &copy; 2020-2022 NAW Development LLC
                </div>
            </div>
        </>
    )
}

export default Footer;