import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { RiAppleLine } from "react-icons/ri";
const Footer = () => {


    return (


        <div className="bg-black text-white px-6 py-12 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">

              
                <div className="flex flex-col gap-5 max-w-[300px]">
                    <h2 className="text-2xl font-bold">Exclusive</h2>
                    <h3 className="text-xl font-semibold">Subscribe</h3>
                    <p className="text-sm">Get 10% off your first order</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full h-10 px-3 pr-10 text-black rounded-lg bg-gray-200 focus:outline-none"
                        />
                        <IoSendOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-black cursor-pointer" />
                    </div>
                </div>

              
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">Support</h2>
                    <p>Baku Khatai, Zigh street 31</p>
                    <p>MahammadTalibli@outlook.com</p>
                    <p>+99455-925-35-40</p>
                </div>

               
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Account</h2>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>

              
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Quick Link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

       
                <div className="flex flex-col gap-4 max-w-[300px]">
                    <h2 className="text-2xl font-bold">Download App</h2>
                    <p className="text-sm">Save $3 with App - New User Only</p>
                    <div className="flex items-center gap-4">
                        <BsQrCode className="text-6xl" />
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-center">GET IT ON</span>
                            <div className="bg-white text-black rounded-xl flex items-center px-3 py-1 gap-2 text-sm font-semibold">
                                <PiGooglePlayLogoLight />
                                Google Play
                            </div>
                            <div className="bg-white text-black rounded-xl flex items-center px-3 py-1 gap-2 text-sm font-semibold">
                                <RiAppleLine />
                                App Store
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer