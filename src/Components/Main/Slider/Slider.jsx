import React from 'react'
import "./Slider.css"

//import slider1 from "../../../assets/slider1.jpg";
//import slider2 from "../../../assets/slider2.png";
//import slider3 from "../../../assets/slider3.png";
//import slider4 from "../../../assets/slider4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

export const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={"/assets/Slider1.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/assets/Slider2.png"} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/assets/Slider3.png"} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/assets/Slider4.png"} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider

