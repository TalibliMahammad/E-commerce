import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './../../Pages/Footer'
import CategorySection from './CategorySection'

const categoryProduct = () => {
    const { categoryKey, subItem } = useParams()
    const formatedCategoryKey = categoryKey[0].toUpperCase() + categoryKey.slice(1).toLowerCase()
    const formatedSubItem = subItem[0].toUpperCase() + subItem.slice(1).toLowerCase()
    const data = useSelector(state => state.fetchState.data?.[formatedCategoryKey][formatedSubItem]) || []
console.log(categoryKey,subItem);


    return (
        <>
            <Header />
            <div>
                <CategorySection />
                <div className=' flex  justify-center'>
                    <div className='flex justify-center  itmes-center flex-wrap  gap-4 mt-24 px-4 w-[80%]'>
                     <div className='flex flex-col-reverse  lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                    <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div>You See {formatedSubItem} {subItem}
                </div>
                        {data.map((item) => (
                            <div key={item.id} className='  bg-stone-200 rounded-xl shadow-lg w-[340px] gap-2.5 flex flex-col p-2'>
                                <img className='   rounded-xl h-[350px]  object-contain' src={item.images?.[0]} alt={item.name} />
                                <p>{item.price}</p>
                                <p>{item.title}</p>
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