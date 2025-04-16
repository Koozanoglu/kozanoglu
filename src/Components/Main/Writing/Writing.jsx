import React from 'react'
import "./Writing.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export const Writing = () => {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper2"
        >
            <SwiperSlide><h5>Ofis-Büro Mobilyaları</h5></SwiperSlide>
            <SwiperSlide><h5>Bahçe Takımları</h5></SwiperSlide>
            <SwiperSlide><h5>Mutfak Takımları</h5></SwiperSlide>
        </Swiper>
    );
}

export default Writing;
