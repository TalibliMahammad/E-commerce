import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import HomeSlider from './HomeSlider';


const CategorySection = () => {



    const [activeMenu, setActiveMenu] = useState(false)


    const handleToggleMenu = (menuSection) => {
        setActiveMenu(prev => (prev == menuSection ? null : menuSection))
    }

    return (

        <div>
            <div className='flex justify-center gap-4 '>
                <div className=' hidden lg:flex w-[15%] '>

                    <ul className='text-[17px] flex flex-col justify-evenly  w-[80%] '>
                        <div className=' cursor-pointer relative' onClick={() => handleToggleMenu('woman')}>

                            <li className='flex items-center justify-between '>Woman's Fashion <MdKeyboardArrowRight className={`text-[25px]  transition-transform duration-300 ${activeMenu === 'woman' ? 'rotate-90' : ''}`} /></li>
                            {activeMenu == 'woman' && (
                                <ul className="relative  left-0 mt-2  bg-stone-200   rounded-md z-10">
                                    <li className="p-2 hover:bg-gray-100">Dress</li>
                                    <li className="p-2 hover:bg-gray-100">Shirt</li>
                                    <li className="p-2 hover:bg-gray-100">Pants</li>
                                    <li className="p-2 hover:bg-gray-100">Classic Shoes</li>
                                    <li className="p-2 hover:bg-gray-100">Sport Shoes</li>
                                    <li className="p-2 hover:bg-gray-100">Accesoriess</li>
                                </ul>
                            )}
                        </div>


                        <div className=' cursor-pointer relative' onClick={() => handleToggleMenu('man')}>

                            <li className='flex items-center justify-between '>Man's Fashion <MdKeyboardArrowRight className={`text-[25px]  transition-transform duration-300 ${activeMenu === 'man' ? 'rotate-90' : ''}`} /></li>
                            {activeMenu == 'man' && (
                                <ul className="relative  left-0 mt-2   bg-stone-200 rounded-md z-10">
                                    <li className="p-2 hover:bg-gray-100">Dress</li>
                                    <li className="p-2 hover:bg-gray-100">Shirt</li>
                                    <li className="p-2 hover:bg-gray-100">Pants</li>
                                    <li className="p-2 hover:bg-gray-100">Classic Shoes</li>
                                    <li className="p-2 hover:bg-gray-100">Sport Shoes</li>
                                    <li className="p-2 hover:bg-gray-100">Accesoriess</li>
                                </ul>
                            )}
                        </div>
                        <div className=' cursor-pointer relative' onClick={() => handleToggleMenu('Electronics')}>

                            <li className='flex items-center justify-between '>Electronics<MdKeyboardArrowRight className={`text-[25px]  transition-transform duration-300 ${activeMenu === 'Electronics' ? 'rotate-90' : ''}`} /></li>
                            {activeMenu == 'Electronics' && (
                                <ul className="relative  left-0 mt-2  bg-stone-200 rounded-md z-10">
                                    <li className="p-2 hover:bg-gray-100">Laptop</li>
                                    <li className="p-2 hover:bg-gray-100">Camera</li>
                                    <li className="p-2 hover:bg-gray-100">Earbuds</li>
                                    <li className="p-2 hover:bg-gray-100">Gaming</li>
                                    <li className="p-2 hover:bg-gray-100">Phone</li>
                                    <li className="p-2 hover:bg-gray-100">SmartWatch</li>
                                </ul>
                            )}
                        </div>
                        <li className=' cursor-pointer'>Home & LifeStyle</li>
                        <li  className=' cursor-pointer' >Sports & Outdoor</li>
                        <li  className=' cursor-pointer' >Baby's & Toys</li>
                        <li  className=' cursor-pointer'>Groceries & Pets</li>
                        <li  className=' cursor-pointer'>Health & Beauty</li>

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