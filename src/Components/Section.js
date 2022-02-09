import React from 'react';


const Section = ({ AppLogo1, AppLogoAlt1, AppLogo2, AppLogoAlt2, AppLogo3, AppLogoAlt3, Title, Content, Content2, Style, Orientation, Destination1, Destination2, Destination3 }) => {

    const showSection = () => {

        return (
            <>
                <div className={Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}>
                    <div className='centerText'>
                        <div className='BodyHeader'>
                            {Title}
                        </div>

                        <div className='BodySubHeader'>
                            <div>
                                {Content}
                            </div>
                            <div className='marginTop'>
                                {Content2}
                            </div>
                        </div>

                        <div className='Nav '>
                            <a href={Destination1} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                <img
                                    src={AppLogo1}
                                    alt={AppLogoAlt1}
                                    className='AppLogoThumbnail'
                                />
                            </a>
                            <a href={Destination2} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                <img
                                    src={AppLogo2}
                                    alt={AppLogoAlt2}
                                    className='AppLogoThumbnail'
                                />
                            </a>
                            <a href={Destination3} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                <img
                                    src={AppLogo3}
                                    alt={AppLogoAlt3}
                                    className='AppLogoThumbnail'
                                />
                            </a>
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