import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './../../Pages/Footer'
import CategorySection from './CategorySection'
import HeartButton from './HeartButton'
import CartButton from './CartButton' 

const CategoryProduct = () => {
    const navigate = useNavigate()
    const { categoryKey, subItem } = useParams()
    const formatedCategoryKey = categoryKey[0].toUpperCase() + categoryKey.slice(1).toLowerCase()
    const formatedSubItem = subItem[0].toUpperCase() + subItem.slice(1).toLowerCase()
    const data = useSelector(state => state.fetchState.data?.[formatedCategoryKey]?.[formatedSubItem]) || []

    const getStars = (rating) => {
        const stars = []
        const rounded = Math.round(rating)
        for (let i = 0; i < 5; i++) {
            stars.push(i < rounded ? "★" : "☆")
        }
        return stars.join("")
    }

    return (
        <>
            <Header />
            <div>
                <CategorySection />
                <div className="flex justify-center items-center mb-10 ">
                    <div className="flex justify-center items-center flex-col mt-20 px-4 w-[96%]  ">

                        <div className="flex flex-col-reverse lg:flex-row items-center w-full  pl-18 gap-2 font-bold mb-20">
                            <div className="rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[20px]"></div>
                            <span className="text-lg lg:text-xl">You See {subItem.toUpperCase()} product's</span>
                        </div>

                        <div className='flex justify-evenly gap-6 flex-wrap'>
                            {data.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative"
                                >
                                    <div
                                        onClick={() => navigate(`/DetailPage/${item.id}`)}
                                        className="relative h-[250px] w-full cursor-pointer"
                                    >
                                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                                            -20%
                                        </div>

                                        <div className="absolute top-2 right-2 z-10">
                                            <HeartButton item={item} />
                                        </div>

                                        <img
                                            className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                                            src={item.images?.[0]?.trim()}
                                            alt={item.name}
                                        />

                                        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <CartButton item={item} />
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col gap-1">
                                        <h3 className="text-lg font-medium text-gray-800 truncate">{item.name}</h3>
                                        <h3 className="text-sm text-gray-500 truncate">{item.brand}</h3>
                                        <h3 className="text-sm text-gray-500 truncate">{item.title || "Product Title"}</h3>
                                        <h3 className="text-base font-semibold text-green-600">
                                            {item.price ? `${item.price}$` : "Price not available"}
                                        </h3>
                                        <div className="cursor-pointer text-yellow-400 text-lg flex">
                                            <span className='flex gap-1'>
                                                {item.rating} {getStars(item.rating || 0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CategoryProduct
