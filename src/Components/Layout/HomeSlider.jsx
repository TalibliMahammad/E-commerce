import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';

export default function HomeSlider() {
 const Laptops = useSelector(state => state.fetchState.data.Electronics?.Laptop) || []
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
         {

        Laptops.slice(0,10).map((item,key)=>(

          <SwiperSlide  key={key}><img className=' h-full w-full object-contain  bg-center '  src={item.images[0]} alt="" /></SwiperSlide>

          
        ))

        } 
       
       
      </Swiper>
    </>
  );
}

 
