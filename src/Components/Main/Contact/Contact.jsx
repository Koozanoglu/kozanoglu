import React, { useEffect, useState } from 'react';
import './Contact.css';
import contactData from '../../../Data/Contact.json';  // JSON verisini import ediyoruz

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(null);

    useEffect(() => {
        setContactInfo(contactData.contact);  // JSON'dan veriyi state'e aktarıyoruz
    }, []);

    return (
        <div className="contact-section" id="iletisim">
            <div className="contact-container" >
                <h2>{contactInfo?.title}</h2>
                <div className="contact-content">
                    <div className="contact-left">
                        <div className="frame">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3145.377241513819!2d32.51940807589265!3d37.968324671937204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU4JzA2LjAiTiAzMsKwMzEnMTkuMSJF!5e0!3m2!1str!2str!4v1744499167520!5m2!1str!2str"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div className="contact-right">
                        <ul>
                            <li><strong>Telefon:</strong> {contactInfo?.phone}</li>
                            <li><strong>Email:</strong> {contactInfo?.email}</li>
                            <li><strong>Adres:</strong> {contactInfo?.address}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
