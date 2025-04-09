import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from './../../assets/apple-event-september-9-41-58-screenshot.png'
import image2 from './../../assets/NPI-Pre-Order-Announce-USP-16-Pro-Blog-Banner.jpg'
import image3 from './../../assets/Does-the-iPhone-16-Come-with-Promotion-Display.webp'
import image4 from './../../assets/apple-iphone-13-promotion-display.png'
import { CiHeart } from "react-icons/ci";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function FlashSales() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };


    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[70vh]  w-[100%]  "
            >
                <SwiperSlide className=' rounded-2xl !w-[250px] sm:!w-[400px]' >
                    <div className="relative group h-[250px] w-[250px] sm:h-[400px] sm:w-[400px]  flex gap-[20px] rounded-2xl  ">
                        <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                            <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                            <CiHeart className=' text-white size-[40px]' />
                        </div>

                        <img className=" rounded-2xl w-full h-full object-cover" src={image1} alt="Product" />
                        <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                            Add To Cart
                        </span>
                    </div>

                    <span className='flex flex-col gap-5'>
                        <h3>Playstation joystick</h3>
                        <h3>129$</h3>
                        <h3>*********</h3>
                    </span>

                </SwiperSlide>
                <SwiperSlide className=' rounded-2xl !w-[250px] sm:!w-[400px]' >
                    <div className="relative group h-[250px] w-[250px] sm:h-[400px] sm:w-[400px]  flex gap-[20px] rounded-2xl  ">
                        <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                            <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                            <CiHeart className=' text-white size-[40px]' />
                        </div>

                        <img className=" rounded-2xl w-full h-full object-cover" src={image1} alt="Product" />
                        <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                            Add To Cart
                        </span>
                    </div>

                    <span className='flex flex-col gap-5'>
                        <h3>Playstation joystick</h3>
                        <h3>129$</h3>
                        <h3>*********</h3>
                    </span>

                </SwiperSlide>


                <SwiperSlide className=' rounded-2xl  !w-[250px] sm:!w-[400px]' >
                    <div className="relative group h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] flex gap-[20px] rounded-2xl  ">
                        <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                            <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                            <CiHeart className=' text-white size-[40px]' />
                        </div>

                        <img className=" rounded-2xl w-full h-full object-cover" src={image2} alt="Product" />
                        <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                            Add To Cart
                        </span>
                    </div>

                    <span className='flex flex-col gap-5'>
                        <h3>Playstation joystick</h3>
                        <h3>129$</h3>
                        <h3>*********</h3>
                    </span>

                </SwiperSlide>


                <SwiperSlide className=' rounded-2xl  !w-[250px] sm:!w-[400px]' >
                    <div className="relative group h-[250px] w-[250px] sm:h-[400px] sm:w-[400px]   flex gap-[20px] rounded-2xl  ">
                        <div className='absolute flex   justify-between mt-[20px] p-[10px] w-[100%]'>
                            <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                            <CiHeart className=' text-white size-[40px]' />
                        </div>

                        <img className=" rounded-2xl w-full h-full object-cover" src={image3} alt="Product" />
                        <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                            Add To Cart
                        </span>
                    </div>

                    <span className='flex flex-col gap-5'>
                        <h3>Playstation joystick</h3>
                        <h3>129$</h3>
                        <h3>*********</h3>
                    </span>

                </SwiperSlide>

                <SwiperSlide className=' rounded-2xl !w-[250px] sm:!w-[400px]' >
                    <div className="relative group h-[250px] w-[250px]  sm:h-[400px] sm:w-[400px]  flex gap-[20px] rounded-2xl  ">
                        <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                            <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                            <CiHeart className=' text-white size-[40px]' />
                        </div>

                        <img className=" rounded-2xl w-full h-full object-cover" src={image4} alt="Product" />
                        <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                            Add To Cart
                        </span>
                    </div>

                    <span className='flex flex-col gap-5'>
                        <h3>Playstation joystick</h3>
                        <h3>129$</h3>
                        <h3>*********</h3>
                    </span>

                </SwiperSlide>
            </Swiper>


        </>
    );
}
