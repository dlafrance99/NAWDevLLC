import React from 'react';

import WhaleBG from '../Assets/Images/Logo/NAW_Productions_10PercentOpacity.png'
import WhaleFlipBG from '../Assets/Images/Logo/NAW_Productions_10PercentOpacity_Flip.png'

const SubSection = ({ Logo, LogoAlt, Title, Content, Content2, Style, Orientation, Destination }) => {



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

    const showSubSection = () => {
        if (Logo === null) {
            return (
                <>
                    <div style={BackgroundStyle} className={Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}>
                        <div className='centerText Nav'>
                            {
                                Orientation === 'Left'
                                    ?
                                    <>
                                        <div className='BodyHeader'>
                                            {Title}
                                        </div>

                                        <div className='BodySubHeader marginRight'>
                                            <div >
                                                {Content}
                                            </div>
                                            <div className='marginTop'>
                                                {Content2}
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='BodySubHeader marginLeft'>
                                            <div >
                                                {Content}
                                            </div>
                                            <div className='marginTop'>
                                                {Content2}
                                            </div>
                                        </div>

                                        <div className='BodyHeader'>
                                            {Title}
                                        </div>
                                    </>
                            }

                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div style={BackgroundStyle} className={Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}>
                        <div className='centerText Nav'>
                            {
                                Orientation === 'Left'
                                    ?
                                    <>
                                        <a href={Destination} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </a>

                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                            {Title}
                                        </a>

                                        <div className='BodySubHeader'>
                                            {Content}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='BodySubHeader'>
                                            {Content}
                                        </div>

                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                            {Title}
                                        </a>

                                        <a href={Destination} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </a>
                                    </>
                            }

                        </div>
                    </div>
                </>
            )
        }

    }

    return (
        <>
            {showSubSection()}
        </>
    )
}

export default SubSection