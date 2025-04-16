import React, { useEffect, useState } from 'react';
import "./Footer.css";
import footerData from "../../Data/Footer.json";
import { Link } from "react-router-dom"

const Footer = () => {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        setBoxes(footerData.boxes);
    }, []);

    return (
        <div className="footer">
            <div className="box-container">
                {boxes.map((box, index) => (
                    <div className="box" key={index}>
                        {box.type === "logo" && (
                            <>
                                <img src={box.logoSrc} alt="logo" className="footer-logo" />
                                {box.content.map((text, pIndex) => (
                                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: text }}></p>
                                ))}
                            </>
                        )}

                        {box.type === "links" && (
                            <>
                                <h4>{box.title}</h4>
                                <ul>
                                    {box.content.map((item, itemIndex) => (
                                        <li key={itemIndex}>

                                            <a href={item.url}><Link to="/urunler" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{item.name}</Link></a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {box.type === "social_icons" && (
                            <>
                                <h4>{box.title}</h4>
                                <div className="icons">
                                    {box.content.map((iconItem, iconIndex) => (
                                        <a key={iconIndex} href={iconItem.url} target="_blank" rel="noopener noreferrer">
                                            <i className={iconItem.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
