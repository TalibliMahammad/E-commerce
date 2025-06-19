import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import HeartButton from './HeartButton';
import CartButton from './CartButton';
import Timer from './Timer';

export default function Electronics() {
  const { data } = useSelector((state) => state.fetchState);
  const Laptops = data?.Electronics?.Laptop || [];
  const navigate = useNavigate();

  // swiperRef useRef ilə
  const swiperRef = useRef(null);

  // Event handler memoizasiya
  const handleNavigate = useCallback(
    (id) => {
      navigate(`/DetailPage/${id}`);
    },
    [navigate]
  );

  // getStars funksiyasını memoizə etmək olar, amma burda sadədir
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i}>{i <= rating ? '⭐' : '☆'}</span>);
    }
    return stars;
  };
  useEffect(() => {
    // Swiper-in avtomatik oynatma funksiyasını başlatmaq üçün
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  // Lazy loading və performans üçün decoding="async" əlavə edildi
  // Swiper-in performansını artırmaq üçün lazy loading və decoding istifadə edildi
  // Bu, şəkillərin yüklənməsini optimallaşdırır və səhifənin yüklənmə sürətini artırır
  return (
    <div className="mt-[100px] flex flex-col gap-10 ">
      <div className="pt-5">
        <div className="  px-5 lg:pl-21 ">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-[15px] font-bold">
            <div className="rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]"></div> Electronics
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-5 lg:gap-20 font-bold">
            <span className="text-[20px] md:text-[35px]">Laptops</span>
            <Timer />
          </div>
        </div>

        <div className="flex gap-5">
          {Laptops.length > 0 && (
            <div className="w-full">
              <Swiper
                // swiperRef-ə ref kimi bağla
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={'auto'}
                spaceBetween={20}
                pagination={{ type: 'fraction' }}
                autoplay={{ delay: 5000, disableOnInteraction: false }} // autoplay interval artırıldı
                loop={false}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={true}
                className="mySwiper h-[500px] overflow-hidden"
              >
                {Laptops.slice(0, 15).map((item) => (
                  <SwiperSlide key={item.id} className=" w-[200px] lg:max-w-[300px] !flex !items-center !justify-center">
                    <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative">
                      <div
                        onClick={() => handleNavigate(item.id)}
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
                          loading="lazy" // lazy load əlavə edildi
                          decoding="async"
                        />

                        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <CartButton item={item} />
                        </div>
                      </div>

                      <div className="p-4 flex flex-col gap-1">
                        <h3 className="text-lg font-medium text-gray-800 truncate">{item.name}</h3>
                        <h3 className="text-sm text-gray-500 truncate">{item.title || 'Product Title'}</h3>
                        <h3 className="text-base font-semibold text-green-600">{item.price ? `${item.price}$` : 'Price not available'}</h3>
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
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Link to={`/AllProducts/Electronics/Laptop`} className="flex flex-col items-center justify-center">
          <button className="text-[20px] h-[50px] w-[200px] bg-red-400 text-white hover:bg-black transition duration-500 rounded-[10px]">
            View All
          </button>
        </Link>
        <div className="border-b border-gray-300 h-[1px] w-full mt-[60px] mr-auto"></div>
      </div>
    </div>
  );
}