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
                Title='About'
                Content={`NAW Development LLC is a small web and mobile development company founded by Devon LaFrance during the pandemic in 2020.`}
                Content2={`During the pandemic, Devon had a lot of time to spend doing his favorite hobby, Disc Golf. Determined to become a better putter, he decided to develop NAW Putter. Shortely after finishing the app, he won his first tournament by 9 strokes. Ever since Devon's spent his time improving NAW Putter and developing a couple other apps along the way.`}
                Style='A'
                Orientation='Right'
            />

            <SubSection
                Logo={null}
                Title='What is NAW?'
                Content={`It's our name. It's also an acronym. `}
                Content2={`Maybe we'll tell you what it means sometime.`}
                Style='B'
                Orientation='Left'
            />

            <SubSection
                Logo={null}
                Title={`What's with the Whale?`}
                Content={`It's our mascot. It's also our logo.`}
                Content2={`What else do you want from us?`}
                Style='A'
                Orientation='Right'
            />

            <Footer />
        </>
    )
}

export default About