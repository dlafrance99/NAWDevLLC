import React from 'react';

import Section from '../Section';

import Randominator from '../../Assets/Images/GameLogos/Randominator_Icon.png';
import Whale from '../../Assets/Images/Logo/NAW_Productions.png';
import WhaleFlip from '../../Assets/Images/Logo/NAW_Productions_Flip.png';


const RandominatorAppScreen = () => {


    return (
        <>
            <Section
                Title='Randominator'
                Content={`Do you have too many decisions to make? Or simply want to add some randomness into your life? Look no further! Randominator helps you make some choices by making them for you...well kind of. You still have to create the options for the app to choose from.`}
                Style='B'
                AppLogo1={Randominator}
                AppLogoAlt1={`NAW Putter App Logo`}
            />

            <Section
                Title='Create Lists'
                Content={`Make your lists. Lists of what? Whatever you want, we don't really care. You can even create what we call "reducer" lists, which once you randominate it will remove the selection from the list for the next time you randominate. Don't worry though, once you go through the whole list, all items will reappear on the list like magic. Or computer science.`}
                Style='A'
                AppLogo1={Whale}
                AppLogoAlt1='whale Logo'
            />

            <Section
                Title='Randominate'
                Content={`This is kind of the whole point of the app. Once you've created your lists, simply select the list and randominate. The app will randomly select an item from your list after a little light show (epileptics beware).`}
                AppLogo1={WhaleFlip}
                AppLogoAlt1='Randominator Logo'                
            />


        </>
    )
}

export default RandominatorAppScreen;