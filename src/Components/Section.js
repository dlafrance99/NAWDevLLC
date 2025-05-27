import React from 'react';

const Section = ({ AppLogo1, AppLogoAlt1, AppLogo2, AppLogoAlt2, AppLogo3, AppLogoAlt3, Title, Content, Style, Destination1, Destination2, Destination3 }) => {

    const showSection = () => {
        return (
            <>
                <div
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