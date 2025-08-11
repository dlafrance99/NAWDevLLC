import React from 'react';

import SubSection from '../SubSection';

import Xmas from '../../Assets/Images/GameLogos/XmasCountdown_Icon.png';
import Rudolph from '../../Assets/Images/XmasIcons/Rudolph.png'
import Tree from '../../Assets/Images/XmasIcons/Tree.png'

const XmasCountdownAppScreen = () => {


    return (
        <>
            <section className='snap-section sub-scope'>
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
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={Rudolph}
                    LogoAlt='Xmas Countdown! Logo'
                    Title='Is today Christmas?'
                    Content={`Is today Christmas? Probably not, why would you be on our website if it was? Well if this is a question you ask yourself a lot, our app has you covered. It will let you know if today is Christmas, or if that's not enough for you, we'll even let you know how many weeks, days, hours, minutes, and even seconds it is until the next Christmas.`}
                    Style='XmasStyle2'
                    Orientation='Right'
                    Destination={`https://apps.apple.com/us/app/xmas-countdown/id1531199155`}
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={Tree}
                    LogoAlt='Xmas Countdown! Logo'
                    Title='Countdown!'
                    Content={`Want to know exactly when the next Christmas is? Just open the app, we'll let you know in pretty much every increment you could care about. That's it. That's pretty much all this app does, but what else do you expect from an app that gives away what it does in the app name?`}
                    Style='XmasStyle'
                    Orientation='Left'
                    Destination={`https://apps.apple.com/us/app/xmas-countdown/id1531199155`}
                />
            </section>
        </>
    )
}

export default XmasCountdownAppScreen;