import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import HomeSlider from './HomeSlider';


const CategorySection = () => {



    return (

        <div>
            <div className='flex justify-center gap-4 '>
                <div className=' hidden lg:flex w-[15%] '>

                    <ul className='text-[17px] flex flex-col justify-evenly  w-[80%] '>

                        <li className='flex items-center justify-between '>Woman's Fashion <MdKeyboardArrowRight className='text-[25px] mr-10' /> </li>
                        <li className='flex items-center justify-between '>Men's Fashion<MdKeyboardArrowRight className='text-[25px] mr-10' />  </li>
                        <li>Electronics</li>
                        <li>Home & LifeStyle</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby's & Toys</li>
                        <li>Groceries & Pets</li>
                        <li>Health & Beauty</li>

                    </ul>

                </div>

                <span className="border-r border-stone-200  hidden lg:flex"></span>

                <div className=' mt-[50px] lg:ml-10  lg:h-[60vh]  flex justify-center w-[100%] lg:w-[72%]'>
                    <HomeSlider />

                </div>
            </div>

        </div>
    )
}

export default CategorySection