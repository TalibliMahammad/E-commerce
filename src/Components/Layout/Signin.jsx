import React from 'react'
import Footer from '../../Pages/Footer'
import imageL from './../../assets/login.png'
import { FaGoogle } from "react-icons/fa";
import Header from './Header';
import { Link } from 'react-router-dom';
import FormRegister from './FormRegister';

const Signin = () => {
  return (
    <>
      <Header />
      <div className='flex h-[90vh] pt-5 items-center '>
        <div className='h-full  w-[50%] flex items-center'>
          <img className='h-full w-full object-cover' src={imageL} alt="" />
        </div>

        <div className=' w-[50%] flex justify-evenly flex-col items-center'>

          
          <div className='flex justify-evenly h-[70vh] w-[50%] flex-col bg-white  '>
            <div className='  text-left'>
              <h2 className='text-[30px] '>Create an Account</h2>
              <h4 className='text-[12px]'>Enter your Details below</h4>
            </div>

            <div className='  flex  flex-col justify-between h-[350px] '>
              <FormRegister/>
            </div>
            <div className='border-1 p-4 rounded-2xl flex items-center justify-center gap-5' >
              <FaGoogle className='text-[20px] text-red-500' />  <span>Sign Up With Google</span> </div>
          </div>
          <div>
            Do you have an account?{' '}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )

}

export default Signin