import { React, useEffect } from 'react';
import './ProductsPage.css';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const navigate = useNavigate();

    const handleSectionClick = (kategori) => {
        navigate(`/urunler/${encodeURIComponent(kategori)}`);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="productspage">
            {/* 1. Ürün - Resim solda, başlık sağda */}
            <div className="section row" onClick={() => handleSectionClick("Balkon-Cafe-Bahçe Mobilyası")}>
                <div className="left image">
                    <img src="/assets/Slider1.jpg" alt="Ürün 1" />
                </div>
                <div className="right text">
                    <h2>Balkon-Cafe-Bahçe Mobilyası</h2>
                </div>
                <div className="hover-text">
                    <p>Ürünleri Gör</p>
                </div>
            </div>

            {/* 2. Ürün - Resim sağda, başlık solda */}
            <div className="section row reverse" onClick={() => handleSectionClick("Ofis-Büro Mobilyaları")}>
                <div className="text">
                    <h2>Ofis-Büro Mobilyaları</h2>
                </div>
                <div className="image">
                    <img src="/assets/Slider2.png" alt="Ürün 2" />
                </div>
                <div className="hover-text">
                    <p>Ürünleri Gör</p>
                </div>
            </div>

            {/* 3. Ürün - Resim solda, başlık sağda */}
            <div className="section row" onClick={() => handleSectionClick("Mutfak Takımları")}>
                <div className="left image">
                    <img src="/assets/Slider3.png" alt="Ürün 3" />
                </div>
                <div className="right text">
                    <h2>Mutfak Takımları</h2>
                </div>
                <div className="hover-text">
                    <p>Ürünleri Gör</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;

