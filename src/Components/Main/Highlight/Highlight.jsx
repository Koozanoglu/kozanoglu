import React from 'react'
import "./Highlight.css"
import HighlightData from "../../../Data/Highlight.json"
//import Chair from '../../../assets/chair-0.png';

export const Highlight = () => {

    const images = import.meta.glob('../../../assets/*', { eager: true });

    const imagePath = (imageName) => {
        const path = `../../../assets/${imageName}`;
        return images[path]?.default || null;
    };

    return (
        <div className='container'>
            {HighlightData.map((highlight, index) => (
                <div key={index} className='row-wrapper'>
                    <div className='image'>
                        <img src={"/assets/chair-0.png"} alt={highlight.title} />
                    </div>
                    <div className='content'>
                        <h1>Ofis-Büro Mobilyaları</h1>
                        <h1>Mutfak Masa ve Sandalye Takımları</h1>
                        <h1>Balkon-Cafe-Bahçe Mobilyası</h1>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Highlight
