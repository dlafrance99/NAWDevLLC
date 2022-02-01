import React from 'react';
import Whale from '../Assets/Images/Logo/NAW_Productions.png'

const WhaleBackground = () => {
    const showTotalWhales = () => {
        let WhaleTotal = [];
        let ScreenHeight = document.body.scrollHeight;
        let WhaleHeight = 250;
        let topPush = 0

        while (ScreenHeight > 0) {
            WhaleTotal.push(
                <img
                    src={Whale}
                    alt='Whale Logo'
                    className='WhaleBG'
                    style={{
                        position: 'absolute',
                        top: topPush,
                        height: ScreenHeight - WhaleHeight < WhaleHeight ? ScreenHeight : '250px'
                    }}
                />
            )
            ScreenHeight = ScreenHeight - WhaleHeight;
            topPush = topPush + WhaleHeight
        }

        return (WhaleTotal)
    }

    return (
        <>

            {showTotalWhales()}
        </>
    )
}

export default WhaleBackground