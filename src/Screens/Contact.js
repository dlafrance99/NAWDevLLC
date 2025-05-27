import React from 'react';

import Footer from '../Components/Footer';

import { BiMailSend, } from 'react-icons/bi'

import '../Styles.css'

const Contact = () => {

    return (
        <>
            <div className='Content'>
                <div className='ContactContent'>
                    <div className='BodyHeader'>
                        Contact Us
                    </div>

                    <div className='BodySubHeader marginTop'>
                        Do you have an idea for an app?
                    </div>

                    <div className='BodySubHeader marginTop'>
                        suggestions for our current apps?
                    </div>

                    <div className='BodySubHeader marginTop'>
                        Just want to talk?
                    </div>

                    <div className='BodySubHeader marginTop'>
                        Hit us up by emailing us!
                    </div>

                    <div className='BodyHeader marginTop'>
                        <a className='EmailStyle' href='mailto:nawdevelopment@gmail.com'>
                            <BiMailSend
                                className='EmailStyle'
                            />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact