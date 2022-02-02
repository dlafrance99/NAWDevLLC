import React from 'react';


const SubSection = ({ Logo, LogoAlt, Title, Content, Style, Orientation }) => {


    return (
        <>
            <div className={Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}>
                <div className='centerText Nav'>
                    {
                        Orientation === 'Left'
                            ?
                            <>
                                <div className='BodyHeader'>
                                    <img
                                        src={Logo}
                                        alt={LogoAlt}
                                        className='AppLogo'
                                    />
                                </div>

                                <div className='BodyHeader'>
                                    {Title}
                                </div>

                                <div className='BodySubHeader'>
                                    {Content}
                                </div>
                            </>
                            :
                            <>
                                <div className='BodySubHeader'>
                                    {Content}
                                </div>

                                <div className='BodyHeader'>
                                    {Title}
                                </div>

                                <div className='BodyHeader'>
                                    <img
                                        src={Logo}
                                        alt={LogoAlt}
                                        className='AppLogo'
                                    />
                                </div>
                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default SubSection