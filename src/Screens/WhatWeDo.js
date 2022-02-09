import React from 'react';

import Footer from '../Components/Footer';
import Section from '../Components/Section';

import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'


const WhatWeDo = () => {
    return (
        <>
            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    Full Service App Development
                </div>
            </div>

            <Section
                Title='Mobile Apps'        
                Content={`From ideas to an app on your phone that's what we do. `}
                Style='A'
                Orientation='Right'
                Destination={`https://apps.apple.com/us/app/naw-putter/id1513636570`}
                AppLogo1={NAWPutter}
                AppLogoAlt1={`NAW Putter App Logo`}
                AppLogo2={Randominator}
                AppLogoAlt2={`Randominator App Logo`}
                AppLogo3={Xmas}
                AppLogoAlt3={`Xmas Countdown! App Logo`}
            />

            <Footer />
        </>
    )
}

export default WhatWeDo