import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import ProductsPage from './Components/ProductsPage/ProductsPage'
import ProductDetailPage from './Components/ProductsDetailPage/ProductsDetailPage'

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const scrollToId = localStorage.getItem('scrollToId');
      if (scrollToId) {
        // DOM tamamen render edilsin diye 100ms bekliyoruz
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          localStorage.removeItem('scrollToId');
        }, 100); // 100ms gayet yeterli, istersen artırabilirsin
      }
    }
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Yeterli zaman veriyoruz DOM'un oturması için
        setTimeout(() => {
          const yOffset = -80; // Header yüksekliği kadar yukarıda kalmasın diye
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300); // 300ms gecikme daha doğal hissettirir
      }
    }
  }, [location]);

  return (
    <div id="home">
      <Header />
      <Routes>
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/urunler/:kategori" element={<ProductDetailPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;