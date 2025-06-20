import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import HomeSlider from './HomeSlider';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = (menuSection) => {
    setActiveMenu(prev => (prev === menuSection ? null : menuSection));
  };

  const handleCategory = (categoryKey, subItem) => {
    const categoryPath = categoryKey.toLowerCase();
    const subPath = subItem ? `/${subItem.toLowerCase().replace(/\s+/g, '-')}` : '';
    const path = `/category/${categoryPath}${subPath}`;
    navigate(path);
    // Mobil menyunu bağla
    setMobileMenuOpen(false);
  };

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
  ];

  return (
    <div className="w-full">

      <div className="flex justify-center gap-4">
        {/* Sidebar (desktop) */}
        <div className="hidden lg:flex w-[15%]">
          <ul className="text-[17px] flex flex-col justify-evenly w-[80%]">
            {categories.map((category) => (
              <li key={category.key} className="relative   text-[13px] xl:text-[15px]">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggleMenu(category.key)}
                >
                  {category.title}
                  <MdKeyboardArrowRight
                    className={`text-[25px] transition-transform duration-300 ${
                      activeMenu === category.key ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <ul
                  className={`transition-all duration-300 overflow-hidden bg-stone-200 rounded-md z-10 mt-2
                    ${activeMenu === category.key ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {category.subItems.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCategory(category.key, item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobil üçün açılan menyu */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-[90%] bg-stone-200 rounded-md p-4 overflow-auto max-h-[60vh]">
            <ul>
              {categories.map((category) => (
                <li key={category.key} className="mb-2">
                  <div
                    className="flex items-center justify-between cursor-pointer bg-gray-300 rounded-md px-3 py-2"
                    onClick={() => handleToggleMenu(category.key)}
                  >
                    <span>{category.title}</span>
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-300 ${
                        activeMenu === category.key ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeMenu === category.key && (
                    <ul className="pl-6 mt-2 flex flex-col gap-2">
                      {category.subItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="cursor-pointer text-gray-700 hover:text-black"
                          onClick={() => handleCategory(category.key, item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Slayder hissəsi */}
        <span className="hidden lg:flex border-r border-stone-200"></span>

        <div className="mt-[50px] lg:ml-10 lg:h-[60vh] flex justify-center w-[100%] lg:w-[72%]">
          <HomeSlider />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
