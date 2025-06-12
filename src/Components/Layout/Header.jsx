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

      <div className='  border-b  border-gray-300 flex   justify-center focus:border-gray-400  rounded-md'>

        <div className=' flex  w-[100%]  lg:w-[95%] gap-[20px] items-center    h-[100px]'>

          <h1 className='lg:text-[35px] lg:ml-[45px]  text-[25px]'>Exclusive</h1>

          <ul className=' hidden lg:flex w-[100%] lg:justify-center gap-[50px] lg:items-center'>
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
                <li>
                  <Link
                    to="/login"
                    className="relative pb-1 text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Log in
                  </Link>

                </li>
                <Link
                  to="/signin"
                  className="relative pb-1 text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Register
                </Link>

              </>
            )}


          </ul>

{isOpen && (
  <div className="fixed top-0 left-0 h-full w-[80%] md:w-[40%] bg-white z-50 shadow-lg flex flex-col justify-between p-6 rounded-r-2xl transition-transform duration-300">
    
   
    <div className="flex justify-between items-center mb-8">
      <CiHeart className="text-3xl text-gray-700 hover:text-red-500 cursor-pointer transition" />
      <CiShoppingCart className="text-3xl text-gray-700 hover:text-blue-500 cursor-pointer transition" />
    </div>

    
    <nav className="flex flex-col gap-5 text-[17px] font-medium text-gray-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive ? 'text-red-500 font-semibold' : 'hover:text-red-500'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>

      <NavLink
        to="/ContactUs"
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive ? 'text-red-500 font-semibold' : 'hover:text-red-500'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Contact
      </NavLink>

      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive ? 'text-red-500 font-semibold' : 'hover:text-red-500'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        About Us
      </NavLink>

      <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition">
        Category <MdKeyboardArrowRight className="text-xl" />
      </div>
    </nav>

    {/* Auth Buttons */}
    {!logData?.name && (
      <div className="flex flex-col gap-3 mt-10">
        <Link
          to="/login"
          className="w-full text-center py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={() => setIsOpen(false)}
        >
          Log In
        </Link>
        <Link
          to="/signin"
          className="w-full text-center py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    )}
  </div>
)}




          <div className=' justify-between  items-center w-[40%] mr-10 hidden lg:flex  gap-3 '>
            <div className='relative flex  gap-6'>

              <div className="flex items-center border h-[34px] lg:p-[15px] p-0 bg-white rounded-full shadow-lg">
                <input
                  value={inputValue}
                  onChange={(e) => handleInput(e)}
                  className="w-full px-4 py-2 border-none focus:outline-none"
                  placeholder="What looking for.."
                  type="text"
                />
                <CiSearch className="text-[30px] md:text-[30px]" />
              </div>

              {inputValue.trim() !== "" && filtered.length > 0 && (
                <div className='absolute top-full mt-2 right-0 bg-stone-200 shadow-lg rounded-md text-black text-sm p-2 z-50 w-full'>
                  {filtered.length > 0 ? (
                    filtered.map((item, index) => (

                      <div key={index} onClick={() => navigate(`/DetailPage/${item.id}`)} className="p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                        < img src={item.images[0]} alt={item.title} className="w-10 h-10 object-cover" />
                        <span>
                          {item.title && `${item.title.slice(0, 30)} | `}
                          {item.category && `${item.category} | `}
                          {item.brand && `${item.brand} | `}
                          {item.name}
                        </span>
                        <span>
                          {item.price}$
                        </span>

                      </div>

                    ))
                  ) : (
                    <div className="p-2 text-center">No results found</div>
                  )}
                </div>
              )}
            </div>

            <div className='hidden md:flex items-center text-[30px] gap-8 '>
              <div className='relative flex  gap-6'>
                <Link to="/wishList">
                  <span className=' bg-orange-400  rounded-[20px] w-5 absolute text-[15px] bottom-4  flex  justify-center left-4'>{WishListData.length ? WishListData.length : ""} </span>
                  <CiHeart className='relative ' /></Link>
              </div>

              <div className='relative flex gap-6'>
                <Link to="/cart">
                  <span className=' bg-orange-400  rounded-[20px] w-5 absolute text-[15px] bottom-4  flex  justify-center left-4'>{DataCart.length ? DataCart.length : ""} </span>
                  <CiShoppingCart className='relative ' /></Link>
              </div>
              <div className='relative '>

                {(localData && window.location.pathname === "/") ? (

                  <button onClick={() => setIsHover(prev => !prev)} className='flex items-center gap-2'>
                    <CiUser />
                  </button>) : ("")}


                {isHover && <UserMenu  setIsHover={setIsHover} />
                }


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