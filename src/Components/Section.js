import React from 'react';

import WhaleBG from '../Assets/Images/Logo/NAW_Productions_10PercentOpacity.png'
import WhaleFlipBG from '../Assets/Images/Logo/NAW_Productions_10PercentOpacity_Flip.png'

const Section = ({ AppLogo1, AppLogoAlt1, AppLogo2, AppLogoAlt2, AppLogo3, AppLogoAlt3, Title, Content, Style, Destination1, Destination2, Destination3 }) => {


    const RandomPosition = () => {
        let RandomNum = Math.floor(Math.random() * 170)
        return -120 + RandomNum
    }

    const RandomWhale = () => {
        let Rando = Math.floor(Math.random() * 2)
        if (Rando === 1) {
            return WhaleBG
        } else {
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


    const showSection = () => {
        return (
            <>
                <div
                    style={BackgroundStyle}
                    className={`${Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}`}>
                    <div className='centerText'>
                        <div className='BodyHeader' id='twentythree'>
                            {Title}
                        </div>

                        <div className='BodySubHeader' id='twentythree'>
                            <div>
                                {Content}
                            </div>
                        </div>

                        <div className='Nav' id='twentythree'>
                            {
                                AppLogo1
                                    ?
                                    <a href={Destination1} target="_blank" rel='noreferrer' >
                                        <img
                                            src={AppLogo1}
                                            alt={AppLogoAlt1}
                                            className='AppLogoThumbnail'
                                        />
                                    </a>
                                    :
                                    null
                            }
                            {
                                AppLogo2
                                    ?
                                    <a href={Destination2} target="_blank" rel='noreferrer' >
                                        <img
                                            src={AppLogo2}
                                            alt={AppLogoAlt2}
                                            className='AppLogoThumbnail'
                                        />
                                    </a>
                                    :
                                    null
                            }
                            {
                                AppLogo3
                                    ?
                                    <a href={Destination3} target="_blank" rel='noreferrer' >
                                        <img
                                            src={AppLogo3}
                                            alt={AppLogoAlt3}
                                            className='AppLogoThumbnail'
                                        />
                                    </a>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {showSection()}
        </>
    )
}

export default Section