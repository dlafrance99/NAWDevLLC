import React from 'react';

import '../Styles.css'

import Title from './Title';
import AppList from '../Components/AppList';
import Header from '../Components/Header';
import HeaderLogo from '../Components/HeaderLogo';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <HeaderLogo />            
            <Header />
            <Title />
            <AppList />
            <Footer />
        </>
    )
}

export default Home