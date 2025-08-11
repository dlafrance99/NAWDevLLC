import React from 'react';

import SubSection from '../../Components/SubSection';
import Section from '../../Components/Section';

import NAWPutter from '../../Assets/Images/GameLogos/NAWPutterIcon.png'

import CardSharkCounter from '../../Assets/Images/GameLogos/CardSharkCounterIcon.png'
import Chaos from '../../Assets/Images/CardSharkGames/Chaos.png'
import HitItOrSplitIt from '../../Assets/Images/CardSharkGames/HitItOrSplitIt.png'
import QuickCount from '../../Assets/Images/CardSharkGames/QuickCount.png'

const CardSharkCounterAppScreen = () => {    

    return (
        <>
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={CardSharkCounter}
                    LogoAlt={`Card Shark Counter Logo`}
                    Title={`Card Shark Counter`}
                    Content={`Learn and Practice card counting! Learn the right strategies, hone your skills, become a smarter person. Become like the card sharks you see in movies!`}
                    Style='CardSharkCounterStyle'
                    Orientation='Left'
                    Release='Currently in Testing'
                />
            </section>
            
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={QuickCount}
                    LogoAlt={`Quick Count Logo`}
                    Title={`Quick Count`}
                    Content={`Just try to keep count. Choose the length and difficulty, then try to keep up. That's all there is to it!`}
                    Style='CardSharkCounterStyle2'
                    Orientation='Right'                    
                />
            </section>
           
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={HitItOrSplitIt}
                    LogoAlt={`Hit it or Split it Logo`}
                    Title={`Hit it Or Split it`}
                    Content={`Do you know what to do and when at the table? Use this to make sure you know the best strategy for any situation.`}
                    Style='CardSharkCounterStyle'
                    Orientation='Left'
                />
            </section>
            
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={Chaos}
                    LogoAlt={`Chaos Logo`}
                    Title={`Chaos`}
                    Content={`Let's face it, card counting isn't that hard. You know what is hard? Counting cards with all the distractions at the casino. In this game, try to keep count, while we send distractions your way.`}
                    Style='CardSharkCounterStyle2'
                    Orientation='Right'                    
                />
            </section>


        </>
    )
}

export default CardSharkCounterAppScreen