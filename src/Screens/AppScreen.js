import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../Components/Footer';

const AppScreen = () => {

    let {AppTitle} = useParams()

    return (
        <>
            <div>
                {AppTitle}
            </div>

            <Footer />
        </>
    )
}

export default AppScreen