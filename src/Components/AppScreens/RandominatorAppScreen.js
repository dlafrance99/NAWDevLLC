import React from 'react';

import SubSection from '../SubSection';

import Randominator from '../../Assets/Images/GameLogos/Randominator_Icon.png';
import { FaRandom } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";


const RandominatorAppScreen = () => {
    const Random = <FaRandom size={150} color='#dc473d' />
    const List = <IoListSharp size={150} color='#be7afb' />


    return (
        <>
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={Randominator}
                    LogoAlt='Randominator Logo'
                    Title='Randominator'
                    Content={`This simple mobile apps lets you make lists of items and randomly select one. Complete with an elimination mode that allows you to get rid of items until you've gone through the whole list.`}
                    Style='RandominatorStyle'
                    Orientation='Right'
                    Destination={`https://apps.apple.com/us/app/randominator/id1533176755`}
                    Release='Deprecated (no longer available)'
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Icon={Random}
                    LogoAlt='Randominator Logo'
                    Title='Randominate'
                    Content={`This is kind of the whole point of the app. Once you've created your lists, simply select the list and randominate. The app will randomly select an item from your list after a little light show (epileptics beware).`}
                    Style='RandominatorStyle2'
                    Orientation='Left'
                    Destination={`https://apps.apple.com/us/app/randominator/id1533176755`}
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Icon={List}
                    LogoAlt='Randominator Logo'
                    Title='Create Lists'
                    Content={`Make your lists. Lists of what? Whatever you want, we don't really care. You can even create what we call "reducer" lists, which once you randominate it will remove the selection from the list for the next time you randominate. Don't worry though, once you go through the whole list, all items will reappear on the list like magic. Or computer science.`}
                    Style='RandominatorStyle'
                    Orientation='Right'
                    Destination={`https://apps.apple.com/us/app/randominator/id1533176755`}
                />
            </section>
        </>
    )
}

export default RandominatorAppScreen;