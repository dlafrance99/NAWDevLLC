import React from 'react';

import SubSection from '../../Components/SubSection';
import Section from '../../Components/Section';

import NAWPutter from '../../Assets/Images/GameLogos/NAWPutterIcon.png'

import Whale from '../../Assets/Images/NAWPutterGames/WhaleWithBasket.png'
import SevenTen from '../../Assets/Images/NAWPutterGames/7_10.png'
import Hundred from '../../Assets/Images/NAWPutterGames/Putt100.png'
import HourChallenge from '../../Assets/Images/NAWPutterGames/Hour_Challenge.png'
import Pure from '../../Assets/Images/NAWPutterGames/Pure.png'
import AroundTheWorld from '../../Assets/Images/NAWPutterGames/AroundTheWorld.png'
import Chaos from '../../Assets/Images/NAWPutterGames/Chaos.png'
import Dsc from '../../Assets/Images/NAWPutterGames/D_sc.png'
import AndOne from '../../Assets/Images/NAWPutterGames/AndOne.png'


const NAWPutterAppScreen = () => {


    return (
        <>
            <Section
                Title='NAW Putter'
                Content={`NAW Putter is a Disc Golf putting pracDisc app (see what we did there?). It offers several games as well as a custom mode that will keep track of your stats to help you "make moves" and elevate your disc golf game.`}
                Style='B'
                AppLogo1={NAWPutter}
                AppLogoAlt1={`NAW Putter App Logo`}
            />

            <SubSection
                Logo={Whale}
                LogoAlt='Custom PracDisc Logo'
                Title='Custom PracDisc'
                Content={`Want to keep track of your putts, without all the additional fun game stuff? We got you, our custom pracDisc section allows users to set their own distance and keep track of their makes as well as their misses.`}
                Style='A'
                Orientation='Left'
                Destination={`https://apps.apple.com/us/app/randominator/id1533176755`}
            />

            <SubSection
                Logo={SevenTen}
                LogoAlt='Seven Ten Logo'
                Title='Seven Ten'
                Content={`Make them putts! In this game, if you make 90% of your putts you move on to the next distance, 70-89% stay where you are. Any less and you have to move closer - did you really think you could make putts from that distance?`}
                Style='B'
                Orientation='Right'               
            />

            <SubSection
                Logo={Hundred}
                LogoAlt='Putt 100 Logo'
                Title='Putt 100'
                Content={`Score the most points to win in this game. You have 100 putts. One point per foot in distance for a made putt. Choose your distance wisely because you only score if you make the putt.`}
                Style='A'
                Orientation='Left'                
            />

            <SubSection
                Logo={HourChallenge}
                LogoAlt='Hour Challenge Logo'
                Title='Hour Challenge'
                Content={`You have one hour to make as many putts as you can. The only catch, every made putt moves you back 10ft. How far can you go?`}
                Style='B'
                Orientation='Right'               
            />

            <SubSection
                Logo={Pure}
                LogoAlt='Pure Logo'
                Title='Pure'
                Content={`You have 100 putts from a specific distance. How many can you make?`}
                Style='A'
                Orientation='Left'                
            />

            <SubSection
                Logo={AroundTheWorld}
                LogoAlt='Around The World Logo'
                Title='Around The World'
                Content={`We tell you where to go, and how to putt. You just have to make the putts. Easy enough.`}
                Style='B'
                Orientation='Right'               
            />

            <SubSection
                Logo={Chaos}
                LogoAlt='Chaos Logo'
                Title='Chaos'
                Content={`Embrace the chaos... and the cardio. You have 1 minute to make as many putts as you can. The problem, as soon as you make a putt, we give you another distance and type of putt to make. I hope you're in good shape.`}
                Style='A'
                Orientation='Left'                
            />

            <SubSection
                Logo={Dsc}
                LogoAlt='D_sc Logo'
                Title='D_sc'
                Content={`Our version of basketball's horse. Not much else to it. Beat your opponent in this multiplayer game`}
                Style='B'
                Orientation='Right'               
            />

            <SubSection
                Logo={AndOne}
                LogoAlt='And One Logo'
                Title='And One'
                Content={`Race your opponent to the finish line. We proved the putts to make, you just have to make both of your putts. Make both and move to the next station, miss one stay where you are, miss both and move to the previous station.`}
                Style='A'
                Orientation='Left'                
            />
        </>
    )
}

export default NAWPutterAppScreen