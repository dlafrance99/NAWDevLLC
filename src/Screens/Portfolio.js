import React from 'react';

import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon_FullRes.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'

const Portfolio = () => {
    return (
        <>
            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    This is some stuff we've done
                </div>
            </div>

            <div className='PortfolioSegmentA'>
                <div className='centerText Nav'>
                    <div className='BodyHeader'>
                        Stuff
                    </div>

                    <div className='BodyHeader'>
                        NAW Putter
                    </div>

                    <div className='BodyHeader'>
                        <img
                            src={NAWPutter}
                            alt='NAW Putter Logo'
                            className='AppLogo'
                        />
                    </div>
                </div>
            </div>

            <div className='PortfolioSegmentB'>
                <div className='centerText Nav'>
                    <div className='BodyHeader'>
                        <img
                            src={Randominator}
                            alt='Randominator Logo'
                            className='AppLogo'
                        />
                    </div>

                    <div className='BodyHeader'>
                        Randominator
                    </div>

                    <div className='BodyHeader'>
                        Stuff
                    </div>
                </div>
            </div>


            <div className='PortfolioSegmentA'>
                <div className='centerText Nav'>
                    <div className='BodyHeader'>
                        NAW Putter
                    </div>

                    <div className='BodyHeader'>
                        Xmas Countdown!
                    </div>

                    <div className='BodyHeader'>
                        <img
                            src={Xmas}
                            alt='Xmas Countdown! Logo'
                            className='AppLogo'
                        />
                    </div>
                </div>
            </div>

            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    This is Stuff We're Working On
                </div>
            </div>

            <div className='PortfolioSegmentA'>
                <div className='centerText Nav'>
                    <div className='BodyHeader'>
                        <img
                            src={NAWPutter}
                            alt='NAW Putter Logo'
                            className='AppLogo'
                        />
                    </div>

                    <div className='BodyHeader'>
                        Disc Golf Games
                    </div>

                    <div className='BodyHeader'>
                        Stuff
                    </div>
                </div>
            </div>


            <div className='PortfolioSegmentB'>
                <div className='centerText Nav'>
                    <div className='BodyHeader'>
                        <img
                            src={Randominator}
                            alt='Randominator Logo'
                            className='AppLogo'
                        />
                    </div>

                    <div className='BodyHeader'>
                        RapidReader
                    </div>

                    <div className='BodyHeader'>
                        Stuff
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio