import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { RiAppleLine } from "react-icons/ri";
const Footer = () => {


    return (


        <div className=' mt-[100px]   justify-center items-center flex bg-black text-white'>


            <div className='flex  flex-col lg:flex-row   py-10 lg:justify-evenly gap-10'>

                <div className='justify-center text-center md:text-start    md:justify-between flex flex-wrap md:flex-row gap-20'>
                    <div className=' flex  gap-5 lg:p-0 flex-col '>
                        <h2 className='text-[20px] lg:text-[30px] font-bold'>Exclusive</h2>
                        <h3 className='lg:text-[25px] font-bold'>Subscribe</h3>
                        <h4 className='font-serif'>Get 10% your first order</h4>

                        <div className='border lg:w-[250px] h-[40px] bg-gray-200  relative '>
                            <input type="text" />
                            <IoSendOutline className=' text-black text-2xl absolute bottom-1.5 mr-2 right-0' />
                        </div>

                    </div>

                    <div className='flex flex-col gap-3'>
                        <h2 className=' text-[20px] lg:text-[30px]  font-bold'>Support</h2>
                        <span className='flex flex-col gap-10 text-15px'>

                            <h3 className=''>Baku Khatai,Zigh street 31 </h3>
                            <h3>MahammadTalibli@outlook.com</h3>
                            <h3>+99455-925-35-40</h3>
                        </span>
                    </div>
                </div>


                <div className='flex flex-wrap justify-center md:justify-between   mt-10  md:mt-0 md:flex-row gap-20 '>
                    <div className=' flex gap-2  flex-col' >
                        <h2 className='text-[30px]  font-bold '>Account</h2>
                        <h3>My Account</h3>
                        <h3>Login/Register</h3>
                        <h3>Card</h3>
                        <h3>Wishlist</h3>
                        <h3>Shop</h3>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[30px] font-bold'>Quick Link</h2>
                        <h3>Privacy Policy</h3>
                        <h3>Terms Of Use</h3>
                        <h3>FAQ</h3>
                        <h3>Contact</h3>
                    </div>

                    <div className='flex flex-col gap-1  '>
                        <h2 className='text-[30px] font-bold'>Download App</h2>
                        <h4>Save $ 3 with App New User Only</h4>

                        <div className=' flex items-end   gap-10 '>

                            <BsQrCode className='text-[100px]' />

                            <div className='flex flex-col gap-2'>
                                <h5 className='text-[10px] flex justify-center'>GET IN ON</h5>
                                <div className='flex items-center text-[20px] gap-3 p-1 font-bold bg-white text-black rounded-2xl '>
                                    <PiGooglePlayLogoLight />
                                    Google Play
                                </div>
                                <div className='flex gap-3 text-[20px] bg-white p-1 font-bold text-black rounded-2xl  items-center'>
                                    <RiAppleLine />
                                    AppStore
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer