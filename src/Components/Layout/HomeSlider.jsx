import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../../assets/NPI-Pre-Order-Announce-USP-16-Pro-Blog-Banner.jpg'
 import image2 from '../../assets/iphone-promotion-1.jpg'
import image3 from '../../assets/iOS-16-best-features.jpg'
import image4 from '../../assets/DSC08422.jpg'
import image5 from '../../assets/Does-the-iPhone-16-Come-with-Promotion-Display.webp'
import image6 from '../../assets/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg'
import image7 from '../../assets/apple-iphone-13-promotion-display.png'
import image8 from '../../assets/apple-event-september-9-41-58-screenshot.png' 

// import required modules
import { Pagination } from 'swiper/modules';

export default function HomeSlider() {


  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img  className='h-full w-full object-cover  bg-center '  src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-cover  bg-center'  src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='h-full w-full object-cover  bg-center ' src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-cover  bg-center' src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-cover  bg-center ' src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-cover  bg-center '  src={image6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-cover  bg-center '  src={image7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-cover  bg-center ' src={image8} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}

 
