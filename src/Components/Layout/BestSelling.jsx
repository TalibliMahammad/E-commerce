import React from 'react'
import image1 from './../../assets/apple-iphone-13-promotion-display.png'
import { CiHeart } from 'react-icons/ci'

const BestSelling = () => {
    return (

        <div className=' flex flex-col items-center gap-20 mt-[100px]'>


            <div className=' md:pl-21 w-full flex flex-col'>

                <div className='flex flex-col-reverse  lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                    <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> This month
                </div>


                <div className='text-[20px] lg:text-[30px]  mt-10 flex flex-col md:flex-row  items-center md:justify-between  w-full  gap-4   md:gap-20 font-bold  '>
                    <span>
                        Best Selling Product
                    </span>

                    <div className='flex justify-center  flex-col md:mr-[80px] '>
                        <button className=' text-[20px] h-[50px] w-[200px] bg-red-400 text-white  hover:bg-black  transition duration-500 rounded-[10px]'>View All</button>
                    </div>

                </div>
            </div>


            <div className='flex  justify-center lg:justify-between  flex-wrap   gap-10'>
                <div>
                    <div className='h-[300px] w-[300px] relative'>
                        <img className='h-full w-full object-cover  bg-center ' src={image1} alt="" />
                        <CiHeart className=' absolute z-10 right-3 top-4 text-black size-[40px]' />
                    </div>
                    <h2>Title</h2>
                    <h3>120 Manat</h3>
                    <h3>* * * * *</h3>
                </div>
                <div>
                    <div className='h-[300px] w-[300px] relative'>
                        <img className='h-full w-full object-cover  bg-center ' src={image1} alt="" />
                        <CiHeart className=' absolute z-10 right-3 top-4 text-black size-[40px]' />
                    </div>
                    <h2>Title</h2>
                    <h3>120 Manat</h3>
                    <h3>* * * * *</h3>
                </div>
                <div>
                    <div className='h-[300px] w-[300px] relative'>
                        <img className='h-full w-full object-cover  bg-center ' src={image1} alt="" />
                        <CiHeart className=' absolute z-10 right-3 top-4 text-black size-[40px]' />
                    </div>
                    <h2>Title</h2>
                    <h3>120 Manat</h3>
                    <h3>* * * * *</h3>
                </div>

                <div>
                    <div className='h-[300px] w-[300px] relative'>
                        <img className='h-full w-full object-cover  bg-center ' src={image1} alt="" />
                        <CiHeart className=' absolute z-10 right-3 top-4 text-black size-[40px]' />
                    </div>
                    <h2>Title</h2>
                    <h3>120 Manat</h3>
                    <h3>* * * * *</h3>
                </div>
                <div>
                    <div className='h-[300px] w-[300px] relative'>
                        <img className='h-full w-full object-cover  bg-center ' src={image1} alt="" />
                        <CiHeart className=' absolute z-10 right-3 top-4 text-black size-[40px]' />
                    </div>
                    <h2>Title</h2>
                    <h3>120 Manat</h3>
                    <h3>* * * * *</h3>
                </div>

            </div>

        </div>

    )
}

export default BestSelling