import React, { useRef, useEffect } from 'react';

import SubSection from '../Components/SubSection';
import HeaderLogo from '../Components/HeaderLogo';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ScreenTitle from '../Components/ScreenTitle';

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const scopes = Array.from(
            root.querySelectorAll('.title-scope, .sub-scope')
        );

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    const visible = entry.intersectionRatio >= 0.55; // same as Title
                    if (visible) {
                        el.classList.add('is-visible');
                        el.classList.remove('is-leaving');
                    } else {
                        el.classList.remove('is-visible');
                        el.classList.add('is-leaving');
                        clearTimeout(el._leaveTimer);
                        el._leaveTimer = setTimeout(() => el.classList.remove('is-leaving'), 180);
                    }
                });
            },
            { root, threshold: [0, 0.55, 1] }
        );

        scopes.forEach((el) => io.observe(el));

        // initial state on first paint
        requestAnimationFrame(() => {
            scopes.forEach((el) => {
                const r = el.getBoundingClientRect();
                const cr = root.getBoundingClientRect();
                const visiblePx = Math.max(0, Math.min(r.bottom, cr.bottom) - Math.max(r.top, cr.top));
                const ratio = visiblePx / r.height;
                if (ratio >= 0.55) el.classList.add('is-visible');
            });
        });

        return () => {
            io.disconnect();
            scopes.forEach((el) => clearTimeout(el._leaveTimer));
        };
    }, []);
    return (
        <>
            <ScreenTitle
                Title='About'
            />
            <HeaderLogo />
            <Header />

            <div ref={containerRef} className='snap-container'>

                <section className='snap-section sub-scope'>
                    <SubSection
                        Logo={null}
                        Title={`What's your history?`}
                        Content={`NAW Development LLC (NAW Dev) is a small web and mobile development company founded by Devon LaFrance during the pandemic in 2020.`}
                        Content2={`During the pandemic, Devon had a lot of time to spend doing his favorite hobby, Disc Golf. Determined to become a better putter, he decided to develop NAW Putter. Shortely after finishing the app, he won his first tournament by 9 strokes. Ever since Devon's spent his time developing apps to help improve life in other aspects.`}
                        Style='DGGStyle'
                        Orientation='Right'
                    />
                </section>


                <section className='snap-section sub-scope'>
                    <SubSection
                        Logo={null}
                        Title={`Our Mission?`}
                        Content={`I guess our mission is to make apps. We make apps that are interesting for us. So Disc Golf and other fun things. Most of our apps are available for free (likely with ads) and with paid options that improve the experience.`}
                        Content2={`What do we do with all that sweet money from our apps? Non of your business really. We'll let you into the secret though, it helps us do this full time. If we can do this full time, we'll spend more time improving our apps!`}
                        Style='NAWPutterStyle'
                        Orientation='Left'
                    />
                </section>


                <section className='snap-section sub-scope'>
                    <SubSection
                        Logo={null}
                        Title='What is NAW?'
                        Content={`Wouldn't you like to know, weather boy...`}
                        Content2={`It's our name. It's also an acronym...\n Maybe we'll tell you about it sometime.`}
                        Style='CardSharkCounterStyle'
                        Orientation='Right'
                    />
                </section>


                <section className='snap-section sub-scope'>
                    <SubSection
                        Logo={null}
                        Title={`Where are you located?`}
                        Content={`Denverish, Colorado`}
                        // Content2={`What else do you want from us?`}
                        Style='GFGluttonStyle'
                        Orientation='Left'
                    />
                </section >

                <div style={{ scrollSnapAlign: 'end', scrollSnapStop: 'always' }}>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default About