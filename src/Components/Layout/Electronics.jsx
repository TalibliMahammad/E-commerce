import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../Pages/Cart';
import CartButton from './CartButton';
import { addItem } from '../../Redux/CreateSlice/CartSlice';
import { useNavigate } from 'react-router-dom';
import HeartButton from './HeartButton';



export default function Electronics() {
    const { data } = useSelector((state) => state.fetchState)
    const dispatch = useDispatch()
    const { WishListData } = useSelector((state) => state.wishState)
    const navigate = useNavigate()
    const Laptops = useSelector(state => state.fetchState.data.Electronics?.Laptop) || []
    const SmartWatch = useSelector(state => state.fetchState.data.Electronics?.Smartwatch.slice(0, 5)) || []
    const phone = useSelector(state => state.fetchState.data.Electronics?.Phone.slice(0, 5)) || []
    const threeArr = [...Laptops, ...phone, ...SmartWatch]
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





  const getStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        {i <= rating ? '⭐' : '☆'}
      </span>
    );
  }
  

  return stars;
};



    return (
        <>
            {threeArr.length > 0 && (
                <Swiper
                    loopAdditionalSlides={5}
                    onSwiper={setSwiperRef}
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    spaceBetween={20}
                    pagination={{
                        type: 'fraction',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={5}
                    modules={[Pagination, Navigation, Autoplay]}
                    navigation={true}
                    className="mySwiper h-[500px]"
                >

                    {threeArr?.slice(0, 30).map((item, key) => (

                        <SwiperSlide key={item.id} className="!w-[300px] !flex !items-center !justify-center" >
                            <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative">

                                <div
                                    onClick={() => navigate(`/DetailPage/${item.id}`)}
                                    className="relative h-[250px] w-full cursor-pointer"
                                >
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold  py-1 rounded-full z-10">
                                        -20%
                                    </div>

                                    <div className="absolute top-2 right-2 z-10">
                                        <HeartButton item={item} />
                                    </div>

                                    <img
                                        className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                                        src={item.images[0].trim()}
                                        alt="Product"
                                    />


                                    <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <CartButton item={item} />
                                    </div>
                                </div>

                               
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-lg font-medium text-gray-800 truncate">{item.name}</h3>
                                    <h3 className="text-sm text-gray-500 truncate">{item.title || "Product Title"}</h3>
                                    <h3 className="text-base font-semibold text-green-600">
                                        {item.price ? `${item.price}$` : "Price not available"}
                                    </h3>
                                    <div className="  cursor-pointer text-yellow-400 text-lg flex">
                                        <span className='flex gap-1'>  

                                      {item.rating} {getStars((item.rating || 0))}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>


                    ))}

                </Swiper>
            )}
        </>
    )



}
