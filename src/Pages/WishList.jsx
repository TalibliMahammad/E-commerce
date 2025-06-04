import React from 'react'
import Header from '../Components/Layout/Header'
import Footer from './Footer'
import { CiHeart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { heartsFunc } from '../Redux/CreateSlice/WishList'
import { FaHeart } from 'react-icons/fa'
import CartButton from '../Components/Layout/CartButton'
import wishEmpty from '/gifs/empty.mp4'

const WishList = () => {

    const { WishListData } = useSelector((state) => state.wishState)

    const dispatch = useDispatch()

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

    console.log(WishListData);


    return (
        <div>
            <Header />
            <div className='px-21 mt-10'>

                <div className='flex justify-between items-center  px-10 text-2xl'>
                    <div>WishList ({WishListData.length})</div>
                    <div className='border rounded-2xl p-2 w-[250px] flex justify-center cursor-pointer hover:bg-red-400 hover:text-white transition-all'>Move All To Bag</div>
                </div>

                <div className='flex flex-wrap justify-evenly  gap-10 lg:px-15'>
                    {
                        WishListData.length === 0 ? (
                            <div className='flex items-center justify-center  h-[80vh] w-[100%]'>   <video className=' h-full w-full ' autoPlay loop muted src={wishEmpty} />  </div>
                          
                        ) : (

                                WishListData.map((item, key) => (
                                    <div
                                        key={key}
                                        className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative"
                                    >
                                        <div className="relative h-[250px] w-full cursor-pointer ">
                                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                                                -20%
                                            </div>

                                            <div className="absolute top-2 right-2 z-10">
                                                {WishListData.some(wish => wish.id === item.id) ? (
                                                    <FaHeart
                                                        onClick={() => dispatch(heartsFunc(item))}
                                                        className="text-red-500 size-[30px] cursor-pointer"
                                                    />
                                                ) : (
                                                    <CiHeart
                                                        onClick={() => dispatch(heartsFunc(item))}
                                                        className="text-black size-[30px] cursor-pointer"
                                                    />
                                                )}
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

                                        <div className="p-4 flex flex-col gap-3   items-start">
                                            <h3 className="text-lg font-medium text-gray-500 truncate text-center">{item.title.slice(0, 20) || "Product Title"}</h3>
                                            <div className="  cursor-pointer text-yellow-400 text-lg flex">
                                                <span className='flex gap-1'>

                                                    {item.rating}{getStars((item.rating || 0))}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-green-600 text-center">{item.price ? `${item.price}$` : "Price not available"}</h3>
                                        </div>
                                    </div>
                                ))
                            

                        )
                    }
                </div>
            </div>








            <div className=' px-21 mt-6'>

                <div className='flex justify-between px-10 '>
                    <div className='flex flex-col-reverse   text-2xl lg:flex-row  items-center  w-full  gap-0 lg:gap-[15px] font-bold'>
                        <div className='rotate-90 lg:rotate-0 bg-red-500  rounded-[5px] h-[40px] w-[15px]'></div>
                        Just For You
                    </div>

                    <div className=' text-2xl '>
                        <div className='border rounded-2xl p-2 w-[250px]  flex justify-center'>Move All To Bag</div>
                    </div>

                </div>


                {/*      <div className='flex justify-between p-10'>
                    <div>
                        <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl  ">
                            <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                                <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                                <CiHeart className=' text-white size-[40px]' />
                            </div>

                            <img className=" rounded-2xl w-full h-full object-cover" src={image2} alt="Product" />
                            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                                Add To Cart
                            </span>
                        </div>

                        <span className='flex flex-col gap-5'>
                            <h3>Playstation joystick</h3>
                            <h3>129$</h3>
                            <h3>*********</h3>
                        </span>
                    </div>
                    <div>
                        <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl  ">
                            <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                                <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                                <CiHeart className=' text-white size-[40px]' />
                            </div>

                            <img className=" rounded-2xl w-full h-full object-cover" src={image2} alt="Product" />
                            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                                Add To Cart
                            </span>
                        </div>

                        <span className='flex flex-col gap-5'>
                            <h3>Playstation joystick</h3>
                            <h3>129$</h3>
                            <h3>*********</h3>
                        </span>
                    </div>
                    <div>
                        <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl  ">
                            <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                                <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                                <CiHeart className=' text-white size-[40px]' />
                            </div>

                            <img className=" rounded-2xl w-full h-full object-cover" src={image2} alt="Product" />
                            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                                Add To Cart
                            </span>
                        </div>

                        <span className='flex flex-col gap-5'>
                            <h3>Playstation joystick</h3>
                            <h3>129$</h3>
                            <h3>*********</h3>
                        </span>
                    </div>
                    <div>
                        <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl  ">
                            <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                                <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                                <CiHeart className=' text-white size-[40px]' />
                            </div>

                            <img className=" rounded-2xl w-full h-full object-cover" src={image2} alt="Product" />
                            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                                Add To Cart
                            </span>
                        </div>

                        <span className='flex flex-col gap-5'>
                            <h3>Playstation joystick</h3>
                            <h3>129$</h3>
                            <h3>*********</h3>
                        </span>
                    </div>
                    <div>
                        <div className="relative group h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] flex gap-[20px] rounded-2xl  ">
                            <div className='absolute flex  justify-between mt-[20px] p-[10px] w-[100%]'>
                                <span className='bg-red-500 p-[8px] rounded-2xl'>-20%</span>
                                <CiHeart className=' text-white size-[40px]' />
                            </div>

                            <img className=" rounded-2xl w-full h-full object-cover" src={image2} alt="Product" />
                            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center bg-black text-white px-4 py-2 transition-opacity duration-300">
                                Add To Cart
                            </span>
                        </div>

                        <span className='flex flex-col gap-5'>
                            <h3>Playstation joystick</h3>
                            <h3>129$</h3>
                            <h3>*********</h3>
                        </span>
                    </div>
                </div> */}

            </div>
            <Footer />
        </div>

    )
}

export default WishList