import React from 'react'
import image1 from './../../assets/Ekran şəkli 2025-03-31 234106.png'
import image2 from './../../assets/Ekran şəkli 2025-03-31 234122.png'
import image3 from './../../assets/Ekran şəkli 2025-03-31 234142.png'
import image4 from './../../assets/Ekran şəkli 2025-03-31 234153.png'

const FeaturedSection = () => {
    return (
        <div >

            <div className=' lg:pl-21 w-full flex flex-col  mt-[100px]'>

                <div className='flex flex-col-reverse  lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                    <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> Featured
                </div>


                <div className='text-[20px] lg:text-[30px]  mt-10 flex flex-col md:flex-row  items-center md:justify-between  w-full  gap-4   md:gap-20 font-bold  '>
                    <span>
                        New Arrival
                    </span>



                </div>
            </div>


            <div className='flex lg:pl-21  flex-col lg:flex-row gap-10 mt-[100px] '>
                <div className=' lg:w-[70%]'>
                    <img className='  object-cover h-full w-full' src={image1} alt="" />
                </div>
                <div className='flex flex-col  gap-10'>

                    <div className='flex lg:w-[93%]'>
                        <img  className=' h-full w-full object-cover' src={image2} alt="" />
                    </div>

                    <div className='flex lg:w-[45.5%]   lg:justify-start gap-5 flex-col lg:flex-row'>
                        <img className='  h-full w-full object-cover' src={image3} alt="" />
                        <img className='object-cover  h-full w-full ' src={image4} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedSection