import React from 'react'
import "./Main.css"
import Slider from './Slider/Slider';
import Highlight from "./Highlight/Highlight";
import Products from './Products/Products';
import Writing from './Writing/Writing';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';

export const Main = () => {
    return (
        <div className="main" >
            <Writing />
            <Slider />
            <Highlight />
            <Products />
            <AboutUs />
            <Contact />
        </div>
    )
}

export default Main;
