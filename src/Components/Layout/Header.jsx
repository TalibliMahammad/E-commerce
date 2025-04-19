import React, { useEffect, useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { href, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import useSelection from 'antd/es/table/hooks/useSelection';
import { useDispatch, useSelector } from 'react-redux';
import { filterData } from '../../Redux/CreateSlice/FetchDataSlice';

const Header = () => {


  const localData = JSON.parse(localStorage.getItem("regData"))
  const loginData = JSON.parse(localStorage.getItem("LoginUser"))
  const navigate = useNavigate()
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const { data } = useSelector((state => state.fetchState))
  const dispatch = useDispatch()



  return (

    <header>

      <div className='bg-black lg:h-[8vh] text-white lg:justify-end  justify-center flex items-center pr-0 lg:pr-[30px]'>

        <div className="xl:w-[58.5%] w-[70%] lg:w-[80%] text-[13px] lg:text-[17px] text-center  flex flex-col  items-center  lg:flex-row   lg:justify-between  gap-2 lg:gap-4 xl:mr-[100px]">

          <span className=' flex flex-col items-center lg:flex-row gap-[20px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <h3 className='  underline '>ShowNow</h3>
          </span>
          <h3 className='flex  text-center  ml-[6px] gap-[10px] items-center '>English <FiChevronDown /></h3>
        </div>
      </div>

      <div className='  border-b  border-gray-300 flex   justify-center focus:border-gray-400  rounded-md'>

        <div className=' flex  w-[100%]  lg:w-[95%] gap-[20px] items-center    h-[100px]'>

          <h1 className='lg:text-[35px] lg:ml-[45px]  text-[25px]'>Exclusive</h1>

          <ul className=' hidden lg:flex w-[100%] lg:justify-center gap-[50px] lg:items-center'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Product</li>
            <li>Contact</li>
            {!loginData?.name && (
              <>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
              </>
            )}


          </ul>

          {isOpen &&
            <ul className='  md:flex z-10   absolute  left-0  top-[22.5vh]  bg-stone-300 flex  h-[75%]  w-[80%] lg:w-[40%] flex-col md:justify-around justify-between items-center  p-[15px]   '>
              <div className='flex gap-5 justify-between w-[100%]'>

                <CiHeart className='text-[30px]' />
                <CiShoppingCart className='text-[30px]' />
              </div>
              <li className='ml-[40px] flex gap-1.5 items-center'>Category <MdKeyboardArrowRight className='text-[25px]' /></li>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <span className='flex gap-5'>
                <span className='bg-violet-600 h-[60px] w-[120px] justify-center flex items-center rounded-3xl text-white'>Sign Up</span>
              </span>
            </ul>
          }


          <div className=' justify-between  items-center w-[40%] mr-10 hidden lg:flex  gap-3 '>

            <div className='flex bg-stone-200 items-center h-[34px] lg:p-[15px] p-0  justify-between   rounded-[5px] '>
              <input onChange={(e) => dispatch(filterData(e.target.value))} className='border-none focus:outline-none p-2  ' placeholder='What looking for..' type="text" />
              <CiSearch className='md:text-[30px] text-[20px]' />
            </div>

            <div className='hidden md:flex items-center text-[30px] gap-8 '>
              <Link to="/wishList">  <CiHeart /></Link>
              <Link to="/cart"> <CiShoppingCart /></Link>

              <div className='relative '>

                {(localData && window.location.pathname === "/") ? (

                  <button onClick={() => setIsHover(prev => !prev)} className='flex items-center gap-2'>
                    <CiUser />
                  </button>) : ("")}


                {isHover && (
                  <div className='absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md text-black text-sm p-2 z-50 w-36'>

                    <Link to="/profile" className='block px-3 py-1 hover:bg-gray-100'>Profile</Link>

                    <button className='block px-3 py-1 hover:bg-gray-100 w-full text-left' onClick={() => {

                      localStorage.removeItem('LoginUser');
                      navigate("/login")

                    }}>
                      LogOut
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>

          <div className="  lg:hidden  w-[100%] justify-end flex items-center text-[30px] ml-[30px]">
            {isOpen ? (
              <IoCloseOutline onClick={() => setIsOpen(false)} className="cursor-pointer " />
            ) : (
              <RxHamburgerMenu onClick={() => setIsOpen(true)} className="cursor-pointer" />
            )}
          </div>


        </div>

      </div>


    </header >
  )
}

export default Header