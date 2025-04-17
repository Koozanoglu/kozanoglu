import React, { useEffect, useState } from 'react';
import "./AboutUs.css";
import aboutData from "../../../Data/AboutUs.json";

const AboutUs = () => {
    const [data, setData] = useState({ title: "", paragraph: "" });

    useEffect(() => {
        setData(aboutData);
    }, []);

    return (
        <section className="about-section">
            <div className="logo-background" id='aboutus'>
                <img src="/assets/Kozanoglu_logo.png" alt="Logo Background" />
            </div>
            <div className="about-content" >
                <h2>{data.title}</h2>
                <p className="subtitle">Kozanoğlumobilya</p>
                <p>{data.paragraph}</p>
            </div>
        </section>
    );
};

export default AboutUs;