import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../Components/Footer';
import NAWPutterAppScreen from '../Components/AppScreens/NAWPutterAppScreen';
import RandominatorAppScreen from '../Components/AppScreens/RandominatorAppScreen';
import XmasCountdownAppScreen from '../Components/AppScreens/XmasCountdownAppScreen';

const AppScreen = () => {

    let { AppTitle } = useParams()

    const showAppScreen = () => {
        switch (AppTitle) {
            case 'NAWPutter':
                return <NAWPutterAppScreen />
            case 'Randominator':
                return <RandominatorAppScreen />
            case 'XmasCountdown!':
                return <XmasCountdownAppScreen />
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

    return (
        <>
            <div>
                {showAppScreen()}
            </div>

            <Footer />
        </>
    )
}

export default AppScreen