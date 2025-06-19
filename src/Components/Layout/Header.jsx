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
import UserMenu from './UserMenu';
import BurgerCategoryMenu from './BurgerMenu';
import BurgerMenu from './BurgerMenu';

const Header = () => {


  const localData = JSON.parse(localStorage.getItem("regData"))
  const logData = JSON.parse(localStorage.getItem("logData"))
  const navigate = useNavigate()
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { data, filtered } = useSelector((state => state.fetchState))
  const dispatch = useDispatch()
  const { WishListData } = useSelector((state) => state.wishState)
  const DataCart = useSelector((state) => state.cartState.items)
  const { Register, Login } = useSelector((state) => state.regState);

  const [inputValue, setInputValue] = useState("")
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value)
    dispatch(filterData(e.target.value))
  }
  return (

    <header>

      <div className='bg-black lg:h-[8vh] text-white lg:justify-end  justify-center flex items-center pr-0 lg:pr-[15px]'>

        <div className="xl:w-[64%] w-[70%] lg:w-[80%] text-[13px] lg:text-[17px] text-center  flex flex-col  items-center  lg:flex-row   lg:justify-between  gap-2 lg:gap-4 xl:mr-[100px]">

          <span className=' flex flex-col items-center lg:flex-row gap-[20px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <h3 className='  underline '>ShowNow</h3>
          </span>
          <h3 className='flex  text-center  ml-[6px] gap-[10px] items-center '>English <FiChevronDown /></h3>
        </div>
      </div>


      <div className='  border-b border-gray-300  flex    custom:justify-center focus:border-gray-400 '>

        <div className='   flex items-center justify-between px-10 w-full  custom:w-[95%] gap-[20px]  h-[100px]'>



          <h1 className='lg:text-[35px]  font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text text-[25px]'>Exclusive</h1>



          <ul className=' font-semibold hidden    lg:flex w-[100%] lg:justify-center  gap-[30px]  text-[16px] 3xl:text-[18px] 3xl:gap-[45px]  lg:items-center'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${isActive ? 'after:w-full text-red-500' : 'after:w-0 text-black'
                } after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${isActive ? 'after:w-full text-red-500' : 'after:w-0 text-black'
                } after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Product
            </NavLink>

            <NavLink
              to="/ContactUs"
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${isActive ? 'after:w-full text-red-500' : 'after:w-0 text-black'
                } after:absolute   after:left-0 after:bottom-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${isActive ? 'after:w-full text-red-500' : 'after:w-0 text-black'
                } after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/ourservices"
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${isActive ? 'after:w-full text-red-500' : 'after:w-0 text-black'
                } after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Our Services
            </NavLink>
            {!logData?.name && (
              <>
                <li className='px-4  transition-all  py-2 bg-blue-700 text-white  font-mono hover:text-black rounded-lg hover:bg-green-400  duration-300'>
                  <Link
                    to="/login"
                    className=" "
                  >
                    Log in
                  </Link>

                </li  >
                <li className='px-4  transition-all  py-2 bg-blue-700 text-white  font-mono hover:text-black rounded-lg hover:bg-green-400  duration-300'>

                  <Link
                    to="/signin"
                    className=""
                  >
                    Register
                  </Link>
                </li>

              </>
            )}

          </ul>


          {isOpen && (
            <BurgerMenu
              logData={logData}
              wishCount={WishListData.length}
              cartCount={DataCart.length}
              setIsOpen={setIsOpen}
            />
          )}

          <div className="  lg:hidden  text-[30px] ml-[30px]">
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