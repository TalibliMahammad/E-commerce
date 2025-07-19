import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterData } from '../../Redux/CreateSlice/FetchDataSlice';
import UserMenu from './UserMenu';
import BurgerMenu from './BurgerMenu';

const Header = () => {


  const logData = JSON.parse(localStorage.getItem("logData"))

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")/* deyeri yenilemek üçün  */
  const [showUserMenu, setShowUserMenu] = useState(false);/*   deyeri yenilemek*/
  const { data } = useSelector((state) => state.fetchState)/*  datanı çəkmək storedan */


  const dispatch = useDispatch()/* funksiyani çəkmək counterslicedan */
  const { WishListData } = useSelector((state) => state.wishState)/*  daxilindəki deyerlere çatmaq */
  const DataCart = useSelector((state) => state.cartState.items)/*  daxilindeki deyerlere çatmaq */

  const handleInput = (e) => {
    setInputValue(e.target.value)/*  inputdan gelen deyeri useStatedeki deyerle evez  edir  */
    dispatch(filterData(e.target.value))/*  funksiyanin icine daxil olan deyeri action payloada oturur */
  }
/* mürəkkəb obyketleri açmaq üçün funksiya */
  function collectAllArrays(obj) {/*  içindəki obyektləri əhatə edir */
    let result = [];/*  boş array lazımdır ki, arraylar; onun içinə yığsın */
    for (const key in obj) {/*  bu sətir dataların keylerine çatır */
      
      if (Array.isArray(obj[key])) {/*  əgər arraydırsa, deyişkenin içinə əlavə et */

        result = result.concat(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {/* əks halda  obyektdirsə,  və deyilsə null  yeniden çağır yoxla  arraydırsa deyişekene
        əlave edecek */
        result = result.concat(collectAllArrays(obj[key]));
      }
    }

    return result;
  }

  const allProducts = collectAllArrays(data);

  window.allProducts = allProducts;
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

      <div className='border-b border-gray-300 flex custom:justify-center focus:border-gray-400'>
        <div className='flex items-center justify-between px-10 w-full custom:w-[95%] gap-[20px] h-[100px]'>

          <h1 className='lg:text-[35px] font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text text-[25px]'>Exclusive</h1>

          <ul className='font-semibold hidden lg:flex w-[100%] lg:justify-center gap-[30px] text-[16px] 3xl:text-[18px] 3xl:gap-[45px] lg:items-center'>
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
            {!logData?.name && (/* logdata varsa bu buttonlar gorunecek eks halda gorunmeyecek */
              <>
                <li className='px-4 transition-all py-2 bg-blue-700 text-white font-mono hover:text-black rounded-lg hover:bg-green-400 duration-300'>
                  <Link to="/login">Log in</Link>
                </li>
                <li className='px-4 transition-all py-2 bg-blue-700 text-white font-mono hover:text-black rounded-lg hover:bg-green-400 duration-300'>
                  <Link to="/signin">Register</Link>
                </li>
              </>
            )}
          </ul>

        
          <div className=" hidden lg:flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    autoComplete="off"
                    />
                    <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
                   
                    {inputValue && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg z-50 max-h-60 overflow-y-auto">
                      {Array.isArray(window.allProducts)
                      ? window.allProducts
                        .filter(
                        (item) =>
                          item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                          item.brand.toLowerCase().includes(inputValue.toLowerCase())

                        )
                        .slice(0, 8)
                        .map((item) => (
                        <div
                          key={item.id}
                          className="px-4 py-2 hover:bg-cyan-100 cursor-pointer"
                          onClick={() => {
                          setInputValue(item.title);
                          dispatch(filterData(item.title));
                      
                          if (item.id === 2) {
                            navigate('/product/semin');
                          } else {
                            navigate(`/DetailPage/${item.id}`);
                          }
                          }}
                        >
                          <span className="font-semibold">{item.title}</span>
                          <span className="text-xs text-gray-500 ml-2">{item.brand}</span>
                        </div>
                        ))
                      : (
                        <div className="px-4 py-2 text-gray-400">No products found</div>
                      )}
                    </div>
                    )}
                  </div>

                  <div className="relative hidden md:block cursor-pointer" onClick={() => navigate('/wishlist')}>
                    <CiHeart className="text-2xl" />
                    {WishListData.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                      {WishListData.length}
                    </span>
                    )}
                  </div>

                 
            <div className="relative hidden md:block  cursor-pointer" onClick={() => navigate('/cart')}>
              <CiShoppingCart className="text-2xl" />
              {DataCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {DataCart.length}
                </span>
              )}
            </div>

       
            <div className="relative hidden md:block cursor-pointer" onClick={() => setShowUserMenu(!showUserMenu)}>
              <CiUser className="text-2xl" />
             
              {showUserMenu && (
                <div className="absolute right-0 mt-2 z-50">
                  <UserMenu logData={logData} onClose={() => setShowUserMenu(false)} />
                </div>
              )}
            </div>
          </div>

          {isOpen && (
            <BurgerMenu
              logData={logData}
              wishCount={WishListData.length}
              cartCount={DataCart.length}
              setIsOpen={setIsOpen}
            />
          )}

          <div className="lg:hidden text-[30px] ml-[30px]">
            {isOpen ? (
              <IoCloseOutline onClick={() => setIsOpen(false)} className="cursor-pointer " />
            ) : (
              <RxHamburgerMenu onClick={() => setIsOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header