import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HeaderLogo from '../Components/HeaderLogo';
import ScreenTitle from '../Components/ScreenTitle';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import DGGAppScreen from '../Components/AppScreens/DGGAppScreen';
import GFGluttonAppScreen from '../Components/AppScreens/GFGluttonAppScreen';
import CardSharkCounterAppScreen from '../Components/AppScreens/CardSharkCounterAppScreen';
import NAWPutterAppScreen from '../Components/AppScreens/NAWPutterAppScreen';
import XmasCountdownAppScreen from '../Components/AppScreens/XmasCountdownAppScreen';
import RandominatorAppScreen from '../Components/AppScreens/RandominatorAppScreen';


const AppScreen = () => {
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

    let { AppTitle } = useParams()

    const showAppScreen = () => {
        switch (AppTitle) {
            case 'DiscGolfGames':
                return <DGGAppScreen />
            case 'GlutenFreeGlutton':
                return <GFGluttonAppScreen />
            case 'CardSharkCounter':
                return <CardSharkCounterAppScreen />
            case 'NAWPutter':
                return <NAWPutterAppScreen />            
            case 'XmasCountdown!':
                return <XmasCountdownAppScreen />
            case 'Randominator':
                return <RandominatorAppScreen />
            default:
                return (
                    <>
                        <main style={{ padding: "1rem", height: '75vh' }}>
                            <p style={{ color: 'white' }}>There's nothing here, check the URL and try again</p>
                        </main>
                    </>
                )
        }
    }

    const showAppTitle = () => {
        switch (AppTitle) {
            case 'DiscGolfGames':
                return 'Disc Golf Games'
            case 'GlutenFreeGlutton':
                return 'Gluten Free Glutton'
            case 'CardSharkCounter':
                return 'Card Shark Counter'
            case 'NAWPutter':
                return 'NAW Putter'
            case 'XmasCountdown!':
                return 'Xmas Countdown!'
            case 'Randominator':
                return 'Randominator'

            default:
                break;
        }
    }

    return (
        <>
            <HeaderLogo />

            <ScreenTitle
                Title={showAppTitle()}
            />
            <Header />

            <div ref={containerRef} className="snap-container">
                {showAppScreen()}

                <div style={{ scrollSnapAlign: 'end', scrollSnapStop: 'always' }}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AppScreen