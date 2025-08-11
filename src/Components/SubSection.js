import React from 'react';

const SubSection = ({ Logo, LogoAlt, Icon, Title, Release, Content, Content2, Style, Orientation, Destination }) => {


    const showSubSection = () => {
        if (Logo === null) {
            return (
                <>
                    <div className={Style} style={{ whiteSpace: 'pre-line' }}>
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
                                            {
                                                Content2 && (
                                                    <div className='marginTop'>
                                                        {Content2}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='BodySubHeader marginLeft'>
                                            <div >
                                                {Content}
                                            </div>
                                            {
                                                Content2 && (
                                                    <div className='marginTop'>
                                                        {Content2}
                                                    </div>
                                                )
                                            }
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
        } else if (Icon) {
            return (
                <>
                    <div className={Style}>
                        <div className='centerText Nav'>
                            {
                                Orientation === 'Left'
                                    ?
                                    <>
                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} rel='noreferrer' className='BodySubHeader'>
                                            {Icon}
                                        </a>

                                        <div style={{ flex: 3, justifySelf: 'center', alignContent: 'center', textAlign: 'center' }}>
                                            <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                                {Title}
                                            </a>

                                            {Release && (
                                                <div className='BodySubHeader' style={{ textAlign: 'center' }}>
                                                    {Release}
                                                </div>
                                            )}
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

                                        <div style={{ flex: 3, justifySelf: 'center', alignContent: 'center', textAlign: 'center' }}>
                                            <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                                {Title}
                                            </a>

                                            {Release && (
                                                <div className='BodySubHeader' style={{ textAlign: 'center' }}>
                                                    {Release}
                                                </div>
                                            )}
                                        </div>

                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} rel='noreferrer' className='BodySubHeader'>
                                            {Icon}
                                        </a>
                                    </>
                            }

                        </div>
                    </div >
                </>
            )
        } else {
            return (
                <>
                    <div className={Style}>
                        <div className='centerText Nav'>
                            {
                                Orientation === 'Left'
                                    ?
                                    <>
                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} rel='noreferrer' className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </a>

                                        <div style={{ flex: 3, justifySelf: 'center', alignContent: 'center', textAlign: 'center' }}>
                                            <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                                {Title}
                                            </a>

                                            {Release && (
                                                <div className='BodySubHeader' style={{ textAlign: 'center' }}>
                                                    {Release}
                                                </div>
                                            )}
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

                                        <div style={{ flex: 3, justifySelf: 'center', alignContent: 'center', textAlign: 'center' }}>
                                            <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} className='BodyHeader'>
                                                {Title}
                                            </a>

                                            {Release && (
                                                <div className='BodySubHeader' style={{ textAlign: 'center' }}>
                                                    {Release}
                                                </div>
                                            )}
                                        </div>

                                        <a href={`/AppScreen/${Title.replace(/\s/g, '')}`} rel='noreferrer' className='BodySubHeader'>
                                            <img
                                                src={Logo}
                                                alt={LogoAlt}
                                                className='AppLogo'
                                            />
                                        </a>
                                    </>
                            }

                        </div>
                    </div >
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