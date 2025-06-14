import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import HomeSlider from './HomeSlider';
import { useNavigate } from 'react-router-dom';


const CategorySection = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const navigate = useNavigate()

    const handleToggleMenu = (menuSection) => {
        setActiveMenu(prev => (prev == menuSection ? null : menuSection))
    }
    const handleCategory = (categoryKey, subItem) => {
        const categoryPath = categoryKey.toLowerCase();
        const subPath = subItem ? `/${subItem.toLowerCase().replace(/\s+/g, '-')}` : '';
        const path = `/category/${categoryPath}${subPath}`;
        navigate(path);
    }


    const categories = [
        {
            key: 'woman',
            title: "Woman's Fashion",
            subItems: ['Dress', 'Shirt', 'Pants', 'Classic-Shoes', 'Sport-Shoes', 'Accessories']
        },
        {
            key: 'man',
            title: "Man's Fashion",
            subItems: ['Accessories', 'Pants', 'Polo', 'T-Shirt', 'Shoes']
        },
        {
            key: 'Electronics',
            title: 'Electronics',
            subItems: ['Laptop', 'Camera', 'Earbuds', 'Gaming', 'Phone', 'SmartWatch']
        },
        {
            key: 'Home',
            title: 'Home & Lifestyle',
            subItems: ['Home', 'Lifestyle']
        },
        {
            key: 'Sport',
            title: 'Sports & Outdoor',
            subItems: ['Sport',]
        },
        {
            key: 'Baby',
            title: 'Baby & Toys',
            subItems: ['Baby',]
        },
        {
            key: 'Pets',
            title: 'Groceries & Pets',
            subItems: ['Pets']
        },
        {
            key: 'Health',
            title: 'Health & Beauty',
            subItems: ['Health', 'Beauty',]
        },
    ]

    return (

        <div>
            <div className=' flex justify-center gap-4 '>
                <div className=' hidden lg:flex w-[15%] '>

                    <ul className='text-[17px] flex flex-col justify-evenly w-[80%]'>
                        {categories.map((category, index) => (
                            <li key={category.key} className="relative">
                                <div
                                    className={`flex items-center justify-between ${index < 3 ? "cursor-pointer" : "cursor-pointer"}`}
                                    onClick={() => {
                                        if (index < 3) {
                                            handleToggleMenu(category.key);
                                        } else {
                                            handleCategory(category.key, category.subItems?.[0]);
                                        }
                                    }}
                                >
                                    {category.title}
                                    {index < 3 && (
                                        <MdKeyboardArrowRight
                                            className={`text-[25px] transition-transform duration-300 ${activeMenu === category.key ? "rotate-90" : ""}`}
                                        />
                                    )}
                                </div>

                                {index < 3 && (
                                    <ul
                                        className={`transition-all duration-300 overflow-hidden bg-stone-200 rounded-md z-10 mt-2
                ${activeMenu === category.key ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
                                    >
                                        {category.subItems.map((item, subIndex) => (
                                            <li key={subIndex} className="p-2 hover:bg-gray-100" onClick={() => handleCategory(category.key, item)}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}



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