import React from 'react';

import SubSection from './SubSection';
import Footer from './Footer';

import HeaderLogo from './HeaderLogo';
import Header from './Header';
import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'
import DiscGolfGames from '../Assets/Images/GameLogos/DiscGolfGamesIcon.png'
import RapidReader from '../Assets/Images/GameLogos/RapidReaderIcon.png'
import SecretStuff from '../Assets/Images/GameLogos/SecretStuffIcon.png'
import GFGlutton from '../Assets/Images/GameLogos/GFGluttonIcon.png'
import Oceans21 from '../Assets/Images/GameLogos/Oceans21Icon.png'

const AppList = ({ ShowAll }) => {
    return (
        <>
            <SubSection
                Logo={DiscGolfGames}
                LogoAlt='Disc Golf Games Logo'
                Title='Disc Golf Games'
                Content={`The successor to our NAW Putter app. Disc Golf Games will not only have putting games, but field work and on the course games you can play! We even tossed in a couple Fantasy Disc Golf games! We don't want to give it all away before launch, but this app is going to be a must for all disc golf fans.`}
                Style='DGGStyle'
                Orientation='Left'
                Release='Currently in Testing'
            />

            <SubSection
                Logo={GFGlutton}
                LogoAlt='Gluten Free Glutton Logo'
                Title='Gluten Free Glutton'
                Content={`The best stop for all things Gluten Free. This app has verified gluten free restaurants, a gf food scanner, gf recipes and more! A one stop shop for all things gluten free!`}
                Style='GFGluttonStyle'
                Orientation='Right'
                Release='Currently in Testing'
            />

            <SubSection
                Logo={Oceans21}
                LogoAlt={`Ocean's 21 Logo`}
                Title={`Ocean's 21`}
                Content={`Learn and Practice card counting! Learn the right strategies, hone your skills, become a smarter person. Become like the card sharks you see in movies!`}
                Style='Oceans21Style'
                Orientation='Left'
                Release='Currently in Testing'
            />

            <SubSection
                Logo={NAWPutter}
                LogoAlt='NAW Putter Logo'
                Title='NAW Putter'
                Content={`This mobile app is near and dear to our heart, since it was our first published app! NAW Putter is a disc golf putting stat tracking app. This app enables you to track your practice sessions and learn to putt better. It also comes packed with different putting games so you never get bored!`}
                Style='NAWPutterStyle'
                Orientation='Right'
                Destination={`https://apps.apple.com/us/app/naw-putter/id1513636570`}
                Release='Available on IOS'
            />

            {
                ShowAll && (
                    <>
                        <SubSection
                            Logo={Xmas}
                            LogoAlt='Xmas Countdown! Logo'
                            Title='Xmas Countdown!'
                            Content={`I mean the name kind of says it all. Is today Christmas? Probably not, why would you be looking at our website on Christmas? Anyways, this app will let you know how many months, weeks, days, hours, minutes, and seconds there are until it's Christmas again`}
                            Style='XmasStyle'
                            Orientation='Left'
                            Release='Available on IOS'
                            Destination={`https://apps.apple.com/us/app/xmas-countdown/id1531199155`}
                        />

                        <SubSection
                            Logo={Randominator}
                            LogoAlt='Randominator Logo'
                            Title='Randominator'
                            Content={`This simple mobile apps lets you make lists of items and randomly select one. Complete with an elimination mode that allows you to get rid of items until you've gone through the whole list.`}
                            Style='RandominatorStyle'
                            Orientation='Right'
                            Destination={`https://apps.apple.com/us/app/randominator/id1533176755`}
                            Release='Deprecated'
                        />
                    </>
                )
            }
        </>
    )
}

export default AppList