import React from 'react';

import SubSection from '../../Components/SubSection';
import Section from '../../Components/Section';

import NAWPutter from '../../Assets/Images/GameLogos/NAWPutterIcon.png'

import GFGlutton from '../../Assets/Images/GameLogos/GFGluttonIcon.png'

import { IoRestaurantSharp } from "react-icons/io5";
import { TbChefHat } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";


const GFGluttonAppScreen = () => {
    const Fantasy = <IoRestaurantSharp size={150} color='#222A27' />
    const CookBook = <TbChefHat size={150} color='#AB8D3E' />
    const Groceries = <MdShoppingCart size={150} color='#222A27' />

    return (
        <>
            <section className='snap-section sub-scope'>
                <SubSection
                    Logo={GFGlutton}
                    LogoAlt='Gluten Free Glutton Logo'
                    Title='Gluten Free Glutton'
                    Content={`The best stop for all things Gluten Free. This app has verified gluten free restaurants, a gf food scanner, gf recipes and more! A one stop shop for all things gluten free!`}
                    Style='GFGluttonStyle'
                    Orientation='Right'
                    Release='Currently in Testing'
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Icon={Fantasy}                    
                    LogoAlt='Restaurant Finder icon'
                    Title='Restaurant Finder'
                    Content={`Looking for a place to eat? Tired of checking menus for a tiny gf symbol? Well we've done the work for you! We have thousands of vetted restaurants (restaurants with gf mentioned on their menu) and gluten free exclusive restaurants! You can even save your favorites in a collection, rate the restaurant and rate the menu items!`}
                    Style='GFGluttonStyle2'
                    Orientation='Left'
                />
            </section>
            
            <section className='snap-section sub-scope'>
                <SubSection
                    Icon={CookBook}
                    LogoAlt='Cookbook Logo'
                    Title='Cookbook'
                    Content={`An organized Cookbook for all your gluten free recipes! Either find a new recipe, submitted by us or other users, or add your own!`}
                    Style='GFGluttonStyle'
                    Orientation='Right'
                    Release='Currently in Testing'
                />
            </section>

            <section className='snap-section sub-scope'>
                <SubSection
                    Icon={Groceries}                    
                    LogoAlt='Groceries icon'
                    Title='Grocery Scanner'
                    Content={`Shopping for Gluten Free groceries, but unsure if an item is Gluten Free? Simply scan the UPC and our app will let you know if it's gluten free!`}
                    Style='GFGluttonStyle2'
                    Orientation='Left'
                />
            </section>

            
        </>
    )
}

export default GFGluttonAppScreen