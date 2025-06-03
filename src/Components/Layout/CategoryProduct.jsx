import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './../../Pages/Footer'
import CategorySection from './CategorySection'
import HeartButton from './HeartButton'

const categoryProduct = () => {
    const { categoryKey, subItem } = useParams()
    const formatedCategoryKey = categoryKey[0].toUpperCase() + categoryKey.slice(1).toLowerCase()
    const formatedSubItem = subItem[0].toUpperCase() + subItem.slice(1).toLowerCase()
    const data = useSelector(state => state.fetchState.data?.[formatedCategoryKey][formatedSubItem]) || []



    return (
        <>
            <Header />
            <div>
                <CategorySection />
                <div className="flex justify-center">
                    <div className="flex justify-center items-center flex-wrap gap-4 mt-12 px-4 w-full max-w-7xl">


                        <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-2 font-bold mb-6">
                            <div className="rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[10px]"></div>
                            <span className="text-lg lg:text-xl">You See {subItem.toUpperCase()} product's</span>
                        </div>

                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-xl shadow-md w-[280px] sm:w-[300px] lg:w-[320px] flex flex-col p-3"
                            >
                                <img
                                    className="rounded-xl h-[250px] object-contain mb-3"
                                    src={item.images?.[0]}
                                    alt={item.name}
                                />
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold  py-1 rounded-full z-10">
                                    -20%
                                </div>

                                <div className="absolute top-2 right-2 z-10">
                                    <HeartButton item={item} />
                                </div>
                                <p className="text-green-600 font-semibold text-lg">{item.price}$</p>
                                <p className="text-gray-700 font-medium">{item.title.slice(0, 50)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default categoryProduct