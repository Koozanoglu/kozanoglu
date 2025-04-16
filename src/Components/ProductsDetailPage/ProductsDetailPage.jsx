import { useNavigate, useParams } from 'react-router-dom';
import productData from '../../Data/ProductsDetail.json';
import './ProductsDetailPage.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductDetailPage = () => {
    const { kategori } = useParams();
    const decodedKategori = decodeURIComponent(kategori);

    const filteredProducts = productData.filter(
        (urun) => urun.kategori === decodedKategori
    );

    const navigate = useNavigate();

    const handleIletisimClick = () => {
        navigate('/#iletisim');
    };

    return (
        <div className="product-detail-page">
            <h1 className="kategori-baslik">{decodedKategori}</h1>

            {filteredProducts.length === 0 ? (
                <p className="yakinda">Yakında gelecek...</p>
            ) : (
                filteredProducts.map((urun, index) => (
                    <div key={index} className="urun-blok">
                        {/* Sol: Swiper Slider */}
                        <div className="slider-kisim">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={20}
                                slidesPerView={1}
                            >
                                {urun.gorseller.map((gorsel, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={gorsel} alt={`Görsel ${i + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Sağ: Bilgiler */}
                        <div className="bilgi-kisim">
                            <h2>{urun.baslik}</h2>
                            <h4>{urun.altBaslik}</h4>
                            <button className="iletisim-btn" onClick={handleIletisimClick}>
                                Bize Ulaşın
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductDetailPage;