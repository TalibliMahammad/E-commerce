import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CiHeart } from 'react-icons/ci'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartButton from './CartButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import HeartButton from './HeartButton'

const WomanDressSection = () => {

    const data = useSelector(state => state.fetchState.data.Woman?.Dress) || []
    const [swiperRef, setSwiperRef] = useState(null);



    const navigate = useNavigate();


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

        <div className='flex justify-center items-center  lg:justify-between  mt-15 flex-wrap'>

            <div className=' w-full flex flex-col pl-21 items-end '>

                <div className='flex flex-col-reverse  lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                    <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> Woman Section
                </div>


                <div className='text-[20px]  lg:text-[30px]   mt-10 flex flex-col md:flex-row  items-center md:justify-between  w-full  gap-4   md:gap-20 font-bold  '>
                    <span>
                        Dress
                    </span>
                </div>
            </div>


            {data.length > 0 && (
                <Swiper
                    loopSlides={5}
                    onSwiper={setSwiperRef}
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    spaceBetween={20}
                    pagination={{
                        type: 'fraction',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={false}
                    modules={[Pagination, Navigation, Autoplay]}
                    navigation={true}
                    className="mySwiper h-[500px]"
                >
                    {data?.slice(0, 30).map((item, key) => (
                        <SwiperSlide key={item.id} className="!w-[300px] !flex !items-center !justify-center ">
                            <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative">

                                <div
                                    onClick={() => navigate(`/DetailPage/${item.id}`)}
                                    className="relative h-[250px] w-full cursor-pointer"
                                >
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 rounded-full z-10">
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
                                    <div className="cursor-pointer text-yellow-400 text-lg flex">
                                        <span className="flex gap-1">
                                            {item.rating} {getStars(item.rating || 0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <Link to="/AllProducts/Woman/Dress" className="  w-full  mt-10 flex flex-col items-center justify-center">
                <div className="flex justify-center  items-center flex-col md:mr-[80px]">
                    <button className="text-[20px] h-[50px] w-[200px] bg-red-400 text-white hover:bg-black transition duration-500 rounded-[10px]">
                        View All
                    </button>
                </div>
            </Link>

        </div>


    )


}

export default WomanDressSection