import React from 'react';

import '../Styles.css'

import Title from './Title';
import Portfolio from './Portfolio';
import Header from '../Components/Header';
import HeaderLogo from '../Components/HeaderLogo';

const Home = () => {
    return (
        <>
            <HeaderLogo />
            <Header />
            <Title />
            <Portfolio />
        </>
    )
}

export default Home