import React from 'react';

import Section from '../Section';

import XmasCountdown from '../../Assets/Images/GameLogos/XmasCountdown_Icon.png';
import Whale from '../../Assets/Images/Logo/Whale.png';

const XmasCountdownAppScreen = () => {


    return (
        <>
            <Section
                Title='Xmas Countdown!'
                Content={`Is today Christmas? Probably not, why would you be on our website if it was? Well if this is a question you ask yourself a lot, our app has you covered. It will let you know if today is Christmas, or if that's not enough for you, we'll even let you know how many weeks, days, hours, minutes, and even seconds it is until the next Christmas.`}
                Style='B'
                AppLogo1={XmasCountdown}
                AppLogoAlt1={`NAW Putter App Logo`}
            />

            <Section
                Title='Countdown!'
                Content={`Want to know exactly when the next Christmas is? Just open the app, we'll let you know in pretty much every increment you could care about. That's it. That's pretty much all this app does, but what else do you expect from an app that gives away what it does in the app name?`}
                Style='A'
                AppLogo1={Whale}
                AppLogoAlt1='whale Logo'
            />
        </>
    )
}

export default XmasCountdownAppScreen;