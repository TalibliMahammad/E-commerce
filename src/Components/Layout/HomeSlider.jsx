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
  const { data } = useSelector((state) => state.fetchState);

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {

        data.slice(0,10).map((item,key)=>(

          <SwiperSlide className='bg-stone-200' key={key}><img    className=' h-full w-full object-contain  bg-center '  src={item.images} alt="" /></SwiperSlide>

          
        ))

        }
       
       
      </Swiper>
    </>
  );
}

 
