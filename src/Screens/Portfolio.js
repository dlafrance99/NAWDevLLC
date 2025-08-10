import React from 'react';

import SubSection from '../Components/SubSection';
import Footer from '../Components/Footer';

import HeaderLogo from '../Components/HeaderLogo';
import Header from '../Components/Header';
import NAWPutter from '../Assets/Images/GameLogos/NAWPutterIcon.png'
import Randominator from '../Assets/Images/GameLogos/Randominator_Icon.png'
import Xmas from '../Assets/Images/GameLogos/XmasCountdown_Icon.png'
import DiscGolfGames from '../Assets/Images/GameLogos/DiscGolfGamesIcon.png'
import RapidReader from '../Assets/Images/GameLogos/RapidReaderIcon.png'
import SecretStuff from '../Assets/Images/GameLogos/SecretStuffIcon.png'
import GFGlutton from '../Assets/Images/GameLogos/GFGluttonIcon.png'
import Oceans21 from '../Assets/Images/GameLogos/Oceans21Icon.png'
import AppList from '../Components/AppList';
import ScreenTitle from '../Components/ScreenTitle';


const Portfolio = () => {


    return (
        <>
            <HeaderLogo />
            <ScreenTitle
                Title='Portfolio'
            />
            <Header />

            <AppList
                ShowAll={true}
            />            

            <Footer />
        </>
    )
}

export default Portfolio