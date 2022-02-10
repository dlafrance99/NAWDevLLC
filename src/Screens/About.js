import React from 'react';

import SubSection from '../Components/SubSection';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <>
            <div className='PortfolioSegmentAShort'>
                <div className='BodyMainHeader'>
                    About NAW Development
                </div>
            </div>

            <SubSection
                Logo={null}
                Title={`What's your history?`}
                Content={`NAW Development LLC (NAW Dev) is a small web and mobile development company founded by Devon LaFrance during the pandemic in 2020.`}
                Content2={`During the pandemic, Devon had a lot of time to spend doing his favorite hobby, Disc Golf. Determined to become a better putter, he decided to develop NAW Putter. Shortely after finishing the app, he won his first tournament by 9 strokes. Ever since Devon's spent his time improving NAW Putter and developing a couple other apps along the way.`}
                Style='A'
                Orientation='Right'
            />

            <SubSection
                Logo={null}
                Title={`Our Mission?`}
                Content={`I guess our mission is to make apps. We make apps that are interesting for us. So Disc Golf and other fun things. Most of our apps are available for free (likely with ads), with paid options that improve the experience.`}
                Content2={`What do we do with all that ad money or 'your' money? Well first of all, it's our money now. Second, it's non of your business really. We'll let you into the secret though, we're saving up to build some Disc Golf courses. So if you're a fan of more Disc Golf courses, pay for a couple of our apps, or if you really like Disc Golf, feel free to join our patreon!`}
                Style='B'
                Orientation='Left'
            />

            <SubSection
                Logo={null}
                Title='What is NAW?'
                Content={`It's our name. It's also an acronym. `}
                Content2={`Maybe we'll tell you what it means sometime.`}
                Style='A'
                Orientation='Right'
            />

            <SubSection
                Logo={null}
                Title={`What's with the Whale?`}
                Content={`It's our mascot. It's also our logo.`}
                Content2={`What else do you want from us?`}
                Style='B'
                Orientation='Left'
            />

            <Footer />
        </>
    )
}

export default About