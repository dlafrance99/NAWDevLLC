import React from 'react';

import Footer from '../Components/Footer';
import Section from '../Components/Section';

import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'
import Whale from '../Assets/Images/GameLogos/NAWDevWhaleMaroonBackgroundSquare.png'


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
                Content={`Mobile Apps are our bread and butter. It's what we prefer to make and what we specialize in. From ideas to published apps, we do it all. Take a look at some of the apps that are published right now!`}
                Style='A'
                Orientation='Right'
                AppLogo1={NAWPutter}
                AppLogoAlt1={`NAW Putter App Logo`}
                Destination1={`https://apps.apple.com/us/app/naw-putter/id1513636570`}
                AppLogo2={Randominator}
                AppLogoAlt2={`Randominator App Logo`}
                Destination2={`https://apps.apple.com/us/app/randominator/id1533176755`}
                AppLogo3={Xmas}
                AppLogoAlt3={`Xmas Countdown! App Logo`}
                Destination3={`https://apps.apple.com/us/app/xmas-countdown/id1531199155`}
            />

            <Section
                Title='Websites'        
                Content={`Mobile is our bread and butter, but websites are the bread basket. What does that mean? We don't really know, but we can make websites too. Hell, we made this website you're using right now.`}
                Style='B'
                Orientation='Right'
                AppLogo2={Whale}
                AppLogoAlt2={`Randominator App Logo`}    
            />

            <Footer />
        </>
    )
}

export default WhatWeDo