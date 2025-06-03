import React from 'react'
import { CiHeart } from 'react-icons/ci'
import useSelection from 'antd/es/table/hooks/useSelection'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import HeartButton from './HeartButton'


const OurProducts = () => {

    const woman = useSelector(state => state.fetchState.data.Woman) || []




 const getStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        {i <= rating ? '⭐' : '☆'}
      </span>
    );
  }
  

  return stars;
};


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

            <div className='flex flex-wrap justify-evenly gap-10 lg:px-15'>
                {
                    Object.values(woman).flat().slice(0, 5).map((item, key) => (
                        <div
                            key={key}
                            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative"
                        >
                            <div className="relative h-[250px] w-full cursor-pointer">
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                                    -20%
                                </div>

                             
                                <div className="absolute top-2 right-2 z-10">
                                    <HeartButton item={item} />
                                </div>

                                <img
                                    className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                                    src={item.images?.[0] || "https://via.placeholder.com/300"}
                                    alt={item.title}
                                />

                                
                                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <CartButton item={item} />
                                </div>
                            </div>

                         
                            <div className="p-4 flex flex-col gap-1 ">
                                <h3 className="text-lg font-medium text-gray-500 truncate">{item.title.slice(0, 20) || "Product Title"}</h3>
                                <h3 className="text-base font-semibold text-green-600">
                                    {item.price ? `${item.price}$` : "Price not available"}

                                     <div className="  cursor-pointer text-yellow-400 text-lg flex">
                                        <span className='flex gap-1'>  

                                      {item.rating} {getStars((item.rating || 0))}
                                        </span>
                                    </div>
                                </h3>
                            </div>
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