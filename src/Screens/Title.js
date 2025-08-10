import React from 'react';

import '../Styles.css'
import logo from '../Assets/Images/Logo/NAW_Dev_Logo_Normal.png'


const Title = () => {
    return (
        <>
            <div className='MaroonWrapper'>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div className='HeaderText'>
                        {`Software Development`.toUpperCase()}
                    </div>
                </div>
                <img
                    src={logo}
                    alt='NAW Development logo'
                    className='MainImage'
                    style={{ flex: 1, }}
                />
            </div>
        </>
    )
}

export default Title