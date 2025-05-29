import React from 'react'
import { CiHeart } from 'react-icons/ci'
import useSelection from 'antd/es/table/hooks/useSelection'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'


const OurProducts = () => {

    const woman = useSelector(state => state.fetchState.data.Woman) || []







    return (
        <div className=' mt-[100px] gap-20 flex flex-col items-center flex-wrap'>

            <div className=' lg:pl-21 w-full flex flex-col '>

                <div className='flex flex-col-reverse  lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                    <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> Our Products
                </div>


                <div className='text-[20px] lg:text-[30px]  mt-10 flex flex-col md:flex-row  items-center md:justify-between  w-full  gap-4   md:gap-20 font-bold  '>
                    <span>
                        Woman Clothes
                    </span>



                </div>
            </div>

            <div className='flex flex-wrap justify-evenly  gap-10  lg:px-15 '>

                {
                    Object.values(woman).flat().slice(0, 5).map((item, key) => (
                      <div key={key} className="flex flex-col items-center gap-5">

                            <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl">
                                <div className="absolute flex justify-between mt-[20px] p-[10px] w-full">
                                    <span className="bg-red-500 p-[8px] rounded-2xl">-20%</span>
                                    <CiHeart className="text-white size-[40px]" />
                                </div>

                                <img
                                    className="h-full w-full object-contain p-5 bg-center rounded-2xl border-1"
                                    src={item.images?.[0] || "https://via.placeholder.com/300"}
                                    alt="Product"
                                />

                                <CartButton item={item} />
                            </div>

                            <span className="flex flex-col items-center gap-2">
                                <h3>{item.title || "Product Title"}</h3>
                                <h3>{item.price ? `${item.price}$` : "Price not available"}</h3>

                            </span>
                        </div>
                    ))
                }






            </div>


            <Link to="/AllProducts/Woman" className='flex flex-col items-center justify-center'>
                <div className='flex justify-center  flex-col md:mr-[80px] '>
                    <button className=' text-[20px] h-[50px] w-[200px] bg-red-400 text-white  hover:bg-black  transition duration-500 rounded-[10px]'>View All</button>
                </div>

            </Link>


        </div>
    )
}

export default OurProducts