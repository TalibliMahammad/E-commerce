import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const FeaturedBottom = () => {
  return (
    <div className='mt-[100px] flex justify-evenly  gap-20 lg:gap-0 flex-wrap'>

        <div className='bg-gray-300 p-3 rounded-2xl gap-3.5 flex flex-col items-center'>
        <TbTruckDelivery className='text-[45px]' />
        <h2 className='text-[30px] font-bold'>Free And Fast Delivery</h2>
        <h3 className='text-[20px]'>Free delivery for all orders over $140 </h3>
        </div>
        <div className='bg-gray-300 p-3 rounded-2xl gap-3.5 flex flex-col items-center'>
        <BiPhoneCall  className='text-[45px]' />
        <h2 className='text-[30px] font-bold'  >24\7 customer Service</h2>
        <h3 className='text-[20px] '>Friendly custimer support </h3>
        </div>
        <div className='bg-gray-300 p-3 rounded-2xl gap-3.5  flex flex-col items-center'>
        <FaMoneyBillTransfer className='text-[45px]' />
        <h2 className='text-[30px] font-bold'>Money Back Guarantee</h2>
        <h3 className='text-[20px] ' >We return money  within 30 days </h3>
        </div>
    </div>
  )
}

export default FeaturedBottom