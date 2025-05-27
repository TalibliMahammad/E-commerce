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
import { heartsFunc } from '../../Redux/CreateSlice/WishList';
import Cart from '../../Pages/Cart';
import CartButton from './CartButton';
import { addItem } from '../../Redux/CreateSlice/CartSlice';
import { useNavigate } from 'react-router-dom';



export default function Electronics() {
    const { data } = useSelector((state) => state.fetchState)
    const dispatch = useDispatch()
    const { WishListData } = useSelector((state) => state.wishState)
    const navigate = useNavigate()
    const Laptops = useSelector(state => state.fetchState.data.Electronics?.Laptop) || []
    const SmartWatch = useSelector(state => state.fetchState.data.Electronics?.SmartWatch.slice(0, 5)) || []
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





    ;


    return (
        <>
        {threeArr.length > 0 && (
            <Swiper
                loopAdditionalSlides={5}
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={true}
                className="mySwiper h-[70vh]  w-[100%]  "
            >

                {threeArr?.slice(0, 30).map((item, key) => (

                    <SwiperSlide key={item.id} className=" bg-stone-200 !h-[500px] border-1 border-stone-200 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; rounded-2xl !w-[250px] sm:!w-[400px]">
                        <div onClick={() => navigate(`/DetailPage/${item.id}`)} className=" relative group h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] flex gap-[20px] ">
                            <div className="absolute flex justify-between mt-[20px] p-[10px] w-[100%]">
                                <span className="bg-red-500 p-[8px] rounded-2xl">-20%</span>

                                {
                                    WishListData.some(wish => wish.id === item.id) ? (
                                        <FaHeart
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                dispatch(heartsFunc(item));
                                            }}
                                            className="text-red-500 size-[40px]"
                                        />
                                    ) : (
                                        <CiHeart
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                dispatch(heartsFunc(item));
                                            }}
                                            className="text-white size-[40px]"
                                        />
                                    )
                                }
                            </div>

                            <img
                                key={key}
                                className="h-full w-full object-contain p-5 bg-center rounded-2xl "
                                src={item.images[0].trim()}
                                alt="Product"
                            />




                            <CartButton item={item} />
                        </div>

                        <span className=" px-[16px] flex flex-col gap-5">
                            <h3>{item.name}</h3>
                            <h3>{item.title || "Product Title"}</h3>
                            <h3>{item.price ? `${item.price}$` : "Price not available"}</h3>

                        </span>
                    </SwiperSlide>

                ))}

            </Swiper>
        )}
        </>
    )



}
