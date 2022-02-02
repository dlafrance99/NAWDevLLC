import React from 'react';
import Whale from '../Assets/Images/Logo/NAW_Productions.png'

const WhaleBackground = () => {

    const showTotalWhales = () => {
        let WhaleTotal = [];
        let ScreenHeight = document.body.scrollHeight - 200;
        let WhaleHeight = 250;
        let topPush = 100

        while (ScreenHeight - WhaleHeight > 0) {
            WhaleTotal.push(
                <img
                    src={Whale}
                    key={`Whale${ScreenHeight}`}
                    alt='Whale Logo'
                    className='WhaleBG'
                    style={{
                        position: 'absolute',
                        top: topPush,
                        height: WhaleHeight,
                        opacity: .05,
                        transform: `scaleX(${randomOrientation()})`,
                        left: randomLeftPosition()
                    }}
                />
            )
            ScreenHeight = ScreenHeight - WhaleHeight;
            topPush = topPush + WhaleHeight
        }

        return (WhaleTotal)
    }

    const randomOrientation = () => {
        let Random = Math.floor(Math.random() * 2)
        if (Random === 0) {
            Random = -1
        }
        return Random
    }

    const randomLeftPosition = () => {
        let Random = Math.floor(Math.random() * document.body.scrollWidth)
        
        return Random
    }

    return (
        <>
            <div style={{
                height: document.body.scrollHeight - 200,
                position: 'absolute'
            }}>
                {showTotalWhales()}
            </div>
        </>
    )
}

export default WhaleBackground