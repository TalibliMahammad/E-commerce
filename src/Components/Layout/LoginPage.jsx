import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import imageL from './../../assets/login.png'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LoginPage = () => {


    return (
        <>
            <Header />

            <div className='flex h-[90vh] pt-20 items-center '>
                <div className='h-full  w-[50%] flex items-center'>
                    <img className='h-full w-full object-cover' src={imageL} alt="" />
                </div>

                <div className=' w-[50%] flex justify-evenly flex-col items-center'>
                    <form className='flex justify-evenly h-[70vh] w-[50%] flex-col bg-white  '>
                        <div className='  text-left'>
                            <h2 className='text-[30px] '>Welcome here Log in and enjoy the shopping</h2>
                            <h4 className='text-[12px]'>Enter your Details below</h4>
                        </div>

                        <div className='  flex  flex-col gap-10'>

                            <input className='bg-transparent p-2 outline-none border-b border-gray-500 ' placeholder='Email or Username ' type="email" />
                            <input className='bg-transparent p-2 outline-none border-b border-gray-500 ' placeholder='Password ' type="password" />
                        </div>

                        <button className=' bg-red-400 p-4 rounded-2xl text-white'>Log in</button>

                        <div className='border-1 p-4 rounded-2xl flex items-center justify-center gap-5' >
                            <FaGoogle className='text-[20px] text-red-500' />  <span>Log in With Google</span>
                        </div>
                        <span className='text-red-500 font-semibold'>Forget Password{' '}?</span>
                    </form>
                    <div>
                        Dont  you have an account{' '}
                        <Link to="/signin" className="underline">
                            sign in
                        </Link>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default LoginPage