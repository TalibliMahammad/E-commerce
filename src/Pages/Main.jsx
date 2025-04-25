import React, { useEffect } from 'react'
import FlashSales from '../Components/Layout/FlashSales'
import CategoryBox from '../Components/Layout/CategoryBox'
import BestSelling from '../Components/Layout/BestSelling'
import PromotionSection from '../Components/Layout/PromotionSection'


import FeaturedBottom from '../Components/Layout/FeaturedBottom'
import FeaturedSection from '../Components/Layout/FeaturedSection'
import OurProducts from '../Components/Layout/OurProducts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/CreateSlice/FetchDataSlice'
import { Link } from 'react-router-dom'


const Main = () => {

  const dispatch = useDispatch();



  // Data yüklənəndə çağırırıq
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch] )



  
  return (
    <>

      <div className='mt-[100px] flex flex-col gap-9 '>

        <div className=' lg:pl-21 pt-5'>
          <div className='flex flex-col-reverse  lg:flex-row items-center  gap-0 lg:gap-[15px] font-bold'>
            <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> Today's
          </div>


          <div className='p-5 flex flex-col md:flex-row items-center  justify-between lg:justify-start   gap-5 lg:gap-20 font-bold  '>
            <span className=' text-[20px] md:text-[35px]'>
              Flash Sales
            </span>

            <div className='flex-col  bg-stone-100  p-3  flex '>

              <div className='flex md:text-[15px] gap-[15px] md:gap-[10px]  items-end'>
                <span>Days</span>
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
              </div>

              <div className='flex  pr-5 px-1 md:text-[15px]  justify-between   items-end'>
                <h4>03</h4>
                <span>:</span>
                <h4>24</h4>
                <span>:</span>
                <h4>36 </h4>
                <span>:</span>
                <h4>48 </h4>
              </div>

            </div>
          </div>






          <div className='  flex gap-5'>
            <FlashSales />

          </div>
        </div>





        <div className=' flex flex-col items-center justify-center'>
          <Link to="/AllProducts/beauty" className='flex flex-col items-center justify-center'>
          <button className=' text-[20px] h-[50px] w-[200px] bg-red-400 text-white  hover:bg-black  transition duration-500 rounded-[10px]'>View All</button>
          </Link>
          <div className='border-b border-gray-300 h-[1px] w-full mt-[60px]  mr-auto'></div>
        </div>


      </div >

      <CategoryBox />
      <BestSelling />
      <PromotionSection />
      <OurProducts />
      <FeaturedSection />
      <FeaturedBottom />

    </>
  )
}

export default Main