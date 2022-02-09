import React from 'react';

import Footer from '../Components/Footer';

import { BiMailSend, } from 'react-icons/bi'

import WhaleBG from '../Assets/Images/Logo/NAW_Productions_10PercentOpacity.png'
import WhaleFlipBG from '../Assets/Images/Logo/NAW_Productions_10PercentOpacity_Flip.png'

import '../Styles.css'

const Contact = () => {
    const RandomPosition = () => {
        let RandomNum = Math.floor(Math.random() * 170)
        return -120 + RandomNum
    }

    const RandomWhale = () => {
        let Rando = Math.floor(Math.random()*2)
        if(Rando === 1){
            return WhaleBG
        }else {
            return WhaleFlipBG
        }
    }

    const BackgroundStyle = {
        backgroundImage: `url(${RandomWhale()})`,
        backgroundSize: '150%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        backgroundPositionX: `${RandomPosition()}vw`,
    }
  
    return (
        <>
            <div className='Content' style={BackgroundStyle}>                
                <div className='ContactContent'>
                    <div className='BodyHeader'>
                        Contact Us
                    </div>

                    <div className='BodySubHeader marginTop'>
                        Do you have an idea for an app?
                    </div>

                    <div className='BodySubHeader marginTop'>
                        suggestions for our current apps?
                    </div>

                    <div className='BodySubHeader marginTop'>
                        Just want to talk?
                    </div>

                    <div className='BodySubHeader marginTop'>
                        Hit us up by emailing us!
                    </div>

                    <div className='BodyHeader marginTop'>
                        <a className='EmailStyle' href='mailto:nawdevelopment@gmail.com'>
                            <BiMailSend
                                className='EmailStyle'
                            />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact