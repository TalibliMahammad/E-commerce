import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { heartsFunc } from '../../Redux/CreateSlice/WishList';
import Cart from '../../Pages/Cart';
import CartButton from './CartButton';
import { addItem } from '../../Redux/CreateSlice/CartSlice';

export default function FlashSales() {
    const { data } = useSelector((state) => state.fetchState)
    const dispatch = useDispatch()

    const { WishListData } = useSelector((state) => state.wishState)





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

                {data.slice(0, 10).map((item, key) => (

                    <SwiperSlide key={key} className="rounded-2xl !w-[250px] sm:!w-[400px]">
                        <div className="relative group h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] flex gap-[20px] rounded-2xl">
                            <div className="absolute flex justify-between mt-[20px] p-[10px] w-[100%]">
                                <span className="bg-red-500 p-[8px] rounded-2xl">-20%</span>

                                {
                                    WishListData.some(wish => wish.id === item.id) ? (
                                        <FaHeart
                                            onClick={() => dispatch(heartsFunc(item))}
                                            className="text-red-500 size-[40px]"
                                        />
                                    ) : (
                                        <CiHeart
                                            onClick={() => dispatch(heartsFunc(item))}
                                            className="text-white size-[40px]"
                                        />
                                    )
                                }

                            </div>

                            <img className="rounded-2xl w-full h-full object-cover" src={item.images} alt="Product" />
                           <CartButton item={item} />
                        </div>

                        <span className="flex flex-col gap-5">
                            <h3>{item.name}</h3>
                            <h3>{item.title || "Product Title"}</h3>
                            <h3>{item.price ? `${item.price}$` : "Price not available"}</h3>

                        </span>
                    </SwiperSlide>
                ))}


            </Swiper>


        </>
    );
}
