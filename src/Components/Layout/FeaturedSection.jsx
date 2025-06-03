import React from 'react'


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


            <div className='flex   items-center justify-center lg:flex-row gap-10  '>
                <div className='mt-[40px] flex justify-center  '>
                    <div className=' w-[96%] flex justify-center'>
                        <video className='' autoPlay loop muted src={'./SlidersImages/4727645-uhd_3840_2160_25fps.mp4'}></video>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedSection