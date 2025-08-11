import React from 'react';

import SubSection from '../../Components/SubSection';
import Section from '../../Components/Section';

import NAWPutter from '../../Assets/Images/GameLogos/NAWPutterIcon.png'

import DiscGolfGames from '../../Assets/Images/GameLogos/DiscGolfGamesIcon.png'
import Fantasy from '../../Assets/Images/DGGGames/FoundationFantasyIcon.png'
import PuttPracDisc from '../../Assets/Images/DGGGames/BlueBasket.png'
import FieldDay from '../../Assets/Images/DGGGames/FieldWorkIcon.png'
import DGG from '../../Assets/Images/DGGGames/DGGIcon.png'



const DGGAppScreen = () => {

    return (
        <>
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={DiscGolfGames}
                    LogoAlt='Disc Golf Games Logo'
                    Title='Disc Golf Games'
                    Content={`The successor to our NAW Putter app. Disc Golf Games will not only have putting games, but field work and on the course games you can play! We even tossed in a couple Fantasy Disc Golf games! We don't want to give it all away before launch, but this app is going to be a must for all disc golf fans.`}
                    Style='DGGStyle'
                    Orientation='Left'
                    Release='Currently in Testing'
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={Fantasy}
                    LogoAlt='Fantasy Disc Golf img'
                    Title='Foundation Fantasy'
                    Content={`Want to be a part of the DGPT action? With Disc Golf Games Fantasy, you can do just that! Play from a variety of fantasy games and see if you can pick the winning combination.`}
                    Style='DGGStyle2'
                    Orientation='Right'
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={PuttPracDisc}
                    LogoAlt='Putt PracDisc logo img'
                    Title='Putt PracDisc'
                    Content={`Throw for show, putt for dough! In this section, you can play several putting pracDisc (see what we did there?) games. Track your results, and become a master putter!`}
                    Style='DGGStyle'
                    Orientation='Left'                    
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={FieldDay}
                    LogoAlt='Field Day img'
                    Title='Field Day'
                    Content={`"If you want to get better at disc golf, you need to do field work" -Every pro Disc Golfer (probably). Well this is the section for you! With several games to help you with your field work, and track your progress, you'll be one of those annoying field work praisers in no time.`}
                    Style='DGGStyle2'
                    Orientation='Right'
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={DGG}
                    LogoAlt='Disc Golf Games Logo'
                    Title='Disc Golf Games'
                    Content={`Want to play a round on the course, or play a different type of round on the course? This section is for you! Play a normal round, Skins, Wolf, and more.`}
                    Style='DGGStyle'
                    Orientation='Left'                    
                />
            </section>
        </>
    )
}

export default DGGAppScreen