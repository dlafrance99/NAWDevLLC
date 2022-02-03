import React from 'react';


const SubSection = ({ Logo, LogoAlt, Title, Content, Content2, Style, Orientation }) => {

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
                                        <div className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </div>

                                        <div className='BodyHeader'>
                                            {Title}
                                        </div>

                                        <div className='BodySubHeader'>
                                            {Content}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='BodySubHeader'>
                                            {Content}
                                        </div>

                                        <div className='BodyHeader'>
                                            {Title}
                                        </div>

                                        <div className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </div>
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