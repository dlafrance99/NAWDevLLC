import React from 'react';

const SubSection = ({ Logo, LogoAlt, Title, Content, Content2, Style, Orientation, Destination }) => {


    const showSubSection = () => {
        if (Logo === null) {
            return (
                <>
                    <div className={Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}>
                        <div className='centerText Nav'>
                            {
                                Orientation === 'Left'
                                    ?
                                    <>
                                        <div className='BodyHeader'>
                                            {Title}
                                        </div>

                                        <div className='BodySubHeader marginRight'>
                                            <div >
                                                {Content}
                                            </div>
                                            <div className='marginTop'>
                                                {Content2}
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='BodySubHeader marginLeft'>
                                            <div >
                                                {Content}
                                            </div>
                                            <div className='marginTop'>
                                                {Content2}
                                            </div>
                                        </div>

                                        <div className='BodyHeader'>
                                            {Title}
                                        </div>
                                    </>
                            }

                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className={Style === 'A' ? 'PortfolioSegmentA' : 'PortfolioSegmentB'}>
                        <div className='centerText Nav'>
                            {
                                Orientation === 'Left'
                                    ?
                                    <>
                                        <a href={Destination} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </a>

                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                            {Title}
                                        </a>

                                        <div className='BodySubHeader'>
                                            {Content}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='BodySubHeader'>
                                            {Content}
                                        </div>

                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                            {Title}
                                        </a>

                                        <a href={Destination} target="_blank" rel='noreferrer' className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </a>
                                    </>
                            }

                        </div>
                    </div>
                </>
            )
        }

    }

    return (
        <>
            {showSubSection()}
        </>
    )
}

export default SubSection