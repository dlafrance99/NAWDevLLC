import React from 'react';

import SubSection from '../Components/SubSection';
import Footer from '../Components/Footer';
import WhaleBackground from '../Components/WhaleBackground';

import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon_FullRes.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'
import DiscGolfGames from '../Assets/Images/GameLogos/DiscGolfGamesIcon.png'
import RapidReader from '../Assets/Images/GameLogos/RapidReaderIcon.png'
import SecretStuff from '../Assets/Images/GameLogos/SecretStuffIcon.png'

const Portfolio = () => {


    return (
        <>
            <WhaleBackground />
            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    Stuff We've Done
                </div>
            </div>

            <SubSection
                Logo={NAWPutter}
                LogoAlt='NAW Putter Logo'
                Title='NAW Putter'
                Content={`This mobile app is near and dear to our heart, since it was our first published app! NAW Putter is a disc golf putting stat tracking app. This app enables you to track your practice sessions and learn to putt better. It also comes packed with different putting games so you never get bored!`}
                Style='A'
                Orientation='Right'
                Destination={`https://apps.apple.com/us/app/naw-putter/id1513636570`}
            />

            <SubSection
                Logo={Randominator}
                LogoAlt='Randominator Logo'
                Title='Randominator'
                Content={`This simple mobile apps lets you make lists of items and randomly select one. Complete with an elimination mode that allows you to get rid of items until you've gone through the whole list.`}
                Style='B'
                Orientation='Left'
                Destination={`https://apps.apple.com/us/app/randominator/id1533176755`}
            />

            <SubSection
                Logo={Xmas}
                LogoAlt='Xmas Countdown! Logo'
                Title='Xmas Countdown!'
                Content={`I mean the name kind of says it all. Is today Christmas? Probably not, why would you be looking at our website on Christmas? Anyways, this app will let you know how many months, weeks, days, hours, minutes, and seconds there are until it's Christmas again`}
                Style='A'
                Orientation='Right'
                Destination={`https://apps.apple.com/us/app/xmas-countdown/id1531199155`}
            />

            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    Stuff We're Working On
                </div>
            </div>

            <SubSection
                Logo={DiscGolfGames}
                LogoAlt='Disc Golf Games Logo'
                Title='Disc Golf Games'
                Content={`The successor to our NAW Putter app. Disc Golf Games will not only have putting games, but field work and on the course games you can play! We don't want to give it all away before launch, but this app is going to be a must for all disc golf fans.`}
                Style='A'
                Orientation='Left'
            />

            <SubSection
                Logo={RapidReader}
                LogoAlt='Rapid Reader Logo'
                Title='Rapid Reader'
                Content={`Have you ever been reading and thought to yourself, "I wish I could read this faster"? Well look no further! The purpose of Rapid Reader is to enable readers to read faster. How you ask. Well you'll have to download the app when it launches to find out!`}
                Style='B'
                Orientation='Right'
            />

            <SubSection
                Logo={SecretStuff}
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