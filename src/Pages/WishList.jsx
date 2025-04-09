import React from 'react'
import Header from '../Components/Layout/Header'
import Footer from './Footer'
import { CiHeart } from 'react-icons/ci'
import image2 from '../assets/apple-iphone-13-promotion-display.png'

const WishList = () => {
    return (
        <div>
            <Header />
            <div className=' px-21 mt-6'>

                
                <div className='flex justify-between  items-center px-10 text-2xl'>
                    <div>WishList (4)</div>
                    <div className='border rounded-2xl p-2 w-[250px] flex justify-center'>Move All To Bag</div>
                </div>


                <div className='flex justify-between p-10'>
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


                <div className='flex justify-between p-10'>
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
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default WishList