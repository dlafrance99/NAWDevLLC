import React from 'react';

import SubSection from '../Components/SubSection';
import Footer from '../Components/Footer';
import WhaleBackground from '../Components/WhaleBackground';

import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon_FullRes.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'
import DiscGolfGames from '../Assets/Images/GameLogos/DiscGolfGamesIcon.png'

const Portfolio = () => {


    return (
        <>
            <WhaleBackground />
            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    This is some stuff we've done
                </div>
            </div>

            <SubSection
                Logo={NAWPutter}
                LogoAlt='NAW Putter Logo'
                Title='NAW Putter'
                Content={`Stuff`}
                Style='A'
                Orientation='Right'
            />

            <SubSection
                Logo={Randominator}
                LogoAlt='Randominator Logo'
                Title='Randominator'
                Content={`Stuff`}
                Style='B'
                Orientation='Left'
            />

            <SubSection
                Logo={Xmas}
                LogoAlt='Xmas Countdown! Logo'
                Title='Xmas Countdown!'
                Content={`Stuff`}
                Style='A'
                Orientation='Right'
            />

            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    This is Stuff We're Working On
                </div>
            </div>

            <SubSection
                Logo={DiscGolfGames}
                LogoAlt='Disc Golf Games Logo'
                Title='Disc Golf Games'
                Content={`Stuff`}
                Style='A'
                Orientation='Left'
            />


            <SubSection
                Logo={null}
                LogoAlt='Rapid Reader Logo'
                Title='Rapid Reader'
                Content={`Stuff`}
                Style='B'
                Orientation='Right'
            />

            <SubSection
                Logo={null}
                LogoAlt='Secret Stuff Logo'
                Title='Secret Stuff'
                Content={`We're working on some other projects right now, but we can't tell you about that yet. We'll let you know as soon as we can!`}
                Style='A'
                Orientation='Left'
            />

            <Footer />
        </>
    )
}

export default Portfolio