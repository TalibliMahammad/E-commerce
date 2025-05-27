import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';

export default function HomeSlider() {
  const Laptops = useSelector(state => state.fetchState.data.Electronics?.Laptop) || []
  
  const forPromotionImages = [
    "/public/Promo/black-friday-big-sale-social-media-post-design-template_47987-25239.jpg",
    "/public/Promo/cccadcdf-c2b7-403a-9fbe-34c62edc24ea.jpg",
    "/public/Promo/lack-friday-sale-social-media-banner-design-template_47987-24589.jpg",
    "/public/Promo/2bdbe56056e0c75b6cf3938a6911141a.jpg",
    "/public/Promo/7274f34d6a776f5d4208ef4a145a8b08.jpg",
    "/public/Promo/a1fea360e3557739b3275c15e97b13ad.jpg",
    "/public/Promo/b945d1c21541e8493c012de14750ec50.jpg",
    "/public/Promo/e7f38e4bb49d0ac977970c38d92c012a.png",
    "/public/Promo/e476a698096dfcfecdcdd0eba4e7b7ed.jpg",
    "/public/Promo/1dad9da122a349a14f94094712946d3c.jpg",
    "/public/Promo/guided_tour__dna6wcz8ieie_xlarge.jpg",
    "/public/Promo/iphone__kqge21l9n26q_og.png",
    "/public/Promo/lenovo-smart-ai.jpg",
    "/public/Promo/modal_power__b0obhiao9aeq_large.jpg",
    "/public/Promo/ora8hzqjeukmwnnb-0_0_desktop_0_1X.webp",
    "/public/Promo/t9ygtye7iprqw6ei-0_0_desktop_0_1X.webp"

  ]

  return (
    <>
      <Swiper pagination={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // <-- Avtomatik hərəkət
  modules={[Pagination, Autoplay]} // <-- Autoplay əlavə olunur
  className="mySwiper shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-xl bg-stone-100"
>
        {

          forPromotionImages.map((item, key) => (

            <SwiperSlide className='' key={key}><img className='p-2 h-full w-full object-cover  bg-center ' src={item} alt="" /></SwiperSlide>


          ))

        }


      </Swiper>
    </>
  );
}


