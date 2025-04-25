import React from 'react'
import image1 from './../../assets/apple-iphone-13-promotion-display.png'
import { CiHeart } from 'react-icons/ci'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'

const BestSelling = () => {

    const { data } = useSelector(state => state.fetchState)

;


    return (

        <div className=' flex flex-col items-center gap-20 mt-[100px]'>


            <div className=' md:pl-21 w-full flex flex-col'>

                <div className='flex flex-col-reverse  lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                    <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> This month
                </div>


                <div className='text-[20px] lg:text-[30px]  mt-10 flex flex-col md:flex-row  items-center md:justify-between  w-full  gap-4   md:gap-20 font-bold  '>
                    <span>
                        Best Selling Product
                    </span>


                    <Link to="/AllProducts/fragrances" className='flex flex-col md:flex-row items-center gap-5'>

                        <div className='flex justify-center  flex-col md:mr-[80px] '>
                            <button className=' text-[20px] h-[50px] w-[200px] bg-red-400 text-white  hover:bg-black  transition duration-500 rounded-[10px]'>View All</button>
                        </div>

                    </Link>
                </div>
            </div>


            <div className='flex  justify-center lg:justify-between px-17 flex-wrap   gap-10'>

                {
                    data.slice(0, 10).map((item, key) => (
                        <div key={key} className="flex flex-col items-center gap-5">

                            <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl">
                                <div className="absolute flex justify-between mt-[20px] p-[10px] w-full">
                                    <span className="bg-red-500 p-[8px] rounded-2xl">-20%</span>
                                    <CiHeart className="text-white size-[40px]" />
                                </div>

                                <img
                                    className="rounded-2xl w-full h-full object-cover"
                                    src={item.images[0]}
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

        </div>

    )


}

export default BestSelling