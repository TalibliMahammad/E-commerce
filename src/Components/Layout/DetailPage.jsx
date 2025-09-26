import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Footer from '../../Pages/Footer'
import { Button } from 'antd'
import { ToastContainer } from 'react-toastify'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { useParams } from 'react-router-dom'
import Login from '../../Pages/Login'
import stripeimg from '/SlidersImages/stripe-svgrepo-com.svg'
import { CiHeart } from 'react-icons/ci'
import Rating from './Rating'
import CartButton from './CartButton'
import { addItem, removeItem } from '../../Redux/CreateSlice/CartSlice'




const DetailPage = ({ item, className }) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const allItems = useSelector((state) => state.fetchState.data) || [];




  const flatItems = Object.values(allItems)
    .flatMap(cat => Object.values(cat))
    .flat();

  const flatMap = flatItems.filter(item => item.id == id)
  const [count, setCount] = React.useState(1);
  const [img, setImg] = React.useState(flatMap[0]?.images[0])
  const cartItems = useSelector(state => state.cartState.items) || [];
  const isCart = cartItems.some(cartItem => cartItem.id === flatMap[0]?.id);

  const handleCart = (e) => {
    e.stopPropagation();
    if (isCart) {
      dispatch(removeItem(flatMap[0].id));
    } else {
      dispatch(addItem(flatMap[0]));
    }
  };



  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(addItem(item));
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(removeItem(item.id));
    }
  };

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


  const getRecommendedItems = (flatMap, flatItems) => {
    const detailId = flatMap.map(item => item.id);
    const detailCategories = flatMap.map(item => item.category.trim().toLowerCase());

    const recommended = flatItems.filter(item =>
      !detailId.includes(item.id) &&
      detailCategories.includes(item.category.trim().toLowerCase())
    );



    return recommended;
  };

  const recommendedItems = getRecommendedItems(flatMap, flatItems);;

  return (
    <>
      <Header />
      {flatMap.map(item => (

        
          <section key={item.id} className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div className="flex flex-col gap-4">
                <div className="border rounded-xl p-4 bg-white shadow">
                  <img
                    src={img}
                    alt={item.title}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-contain rounded-xl"
                  />
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      onClick={() => setImg(image)}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain border rounded-md cursor-pointer hover:ring-2 hover:ring-red-400 transition"
                      alt={`Thumbnail ${index + 1}`}
                    />
                  ))}
                </div>
              </div>


              <div className="flex flex-col gap-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{item.title}</h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl sm:text-2xl">★</span>
                    <span className="text-lg sm:text-xl">{item.rating}</span>
                  </div>
                  <span className="text-base sm:text-lg">{item.stock} in stock</span>
                </div>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{item.description}</p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-red-500">${item.price}</h2>

                {item.category.toLowerCase().includes('clothing') && (
                  <>
                    <div>
                      <h3 className="font-semibold mb-2">Colors</h3>
                      <div className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-black border cursor-pointer"></span>
                        <span className="w-6 h-6 rounded-full bg-red-500 border cursor-pointer"></span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Sizes</h3>
                      <div className="flex gap-3 flex-wrap">
                        {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                          <button
                            key={size}
                            className="border px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition text-sm sm:text-base"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="flex flex-col gap-4 mt-4 max-w-xs">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleDecrement}
                      className="px-4 py-2 bg-gray-200 rounded hover:bg-red-400 hover:text-white transition"
                    >
                      -
                    </button>
                    <span className="text-xl">{count}</span>
                    <button
                      onClick={handleIncrement}
                      className="px-4 py-2 bg-gray-200 rounded hover:bg-red-400 hover:text-white transition"
                    >
                      +
                    </button>
                  </div>


                  <div className="flex flex-col sm:flex-row gap-4  rounded-xl justify-between">

                    <button className=" w-full bg-red-500 text-white  rounded-xl hover:bg-red-600 transition text-lg">
                      Buy Now
                    </button>

                   

                      <button
                        onClick={handleCart}
                         className={` text-white h-15 w-full rounded-xl transition-all text-lg ${isCart ? 'bg-black' : 'bg-red-500 hover:bg-red-600'
                        }`}
                      >
                        {isCart ? 'Remove from Cart' : 'Add to Cart'}
                      </button>
                    </div>
                 
                </div>

                <div className="mt-8 border rounded-xl p-5 bg-gray-50 shadow-sm max-w-md">
                  <h3 className="text-xl font-semibold mb-4">Delivery</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <TbTruckDelivery className="text-red-500 text-2xl" />
                    <span>Free delivery on orders over $100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiReturnArrow className="text-red-500 text-2xl" />
                    <span>Free returns within 30 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Items */}
            <div className="mt-10">
              <div className="flex justify-between flex-wrap items-center gap-4">
                <div className="flex flex-col-reverse text-2xl lg:flex-row items-center w-full gap-0 lg:gap-[15px] font-bold">
                  <div className="rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]"></div>
                  Just Recommended
                </div>

                <div className="text-2xl w-full ">
                  <button className="border rounded-2xl p-2 w-full sm:w-[250px] flex justify-center hover:bg-red-400 hover:text-white transition">
                    Move All To Bag
                  </button>
                </div>
              </div>

              <div className="flex justify-evenly mt-10 gap-10 flex-wrap px-4 sm:px-10 lg:px-20 mb-10">
                {recommendedItems.length > 0 ? (
                  recommendedItems.map(item => (
                    <div
                      key={item.id}
                      className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-full max-w-xs sm:w-[300px] overflow-hidden group relative"
                    >
                      <div className="relative h-[250px] w-full cursor-pointer">
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                          -20%
                        </div>

                        <div className="absolute top-2 right-2 z-10">
                          <button
                            onClick={() => handleWishlistToggle(item.id)}
                            aria-label="Toggle Wishlist"
                            className="text-white text-xl hover:text-red-500 transition-colors duration-300"
                          >
                            <CiHeart />
                          </button>
                        </div>

                        <img
                          className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                          src={item.images?.[0] || "/default.jpg"}
                          alt={item.name || item.title}
                        />

                        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CartButton item={item} />
                        </div>
                      </div>

                      <div className="p-4 flex flex-col gap-1">
                        <h3 className="text-sm text-gray-500 truncate">{item.brand || item.category}</h3>
                        <h3 className="text-lg font-medium text-gray-800 truncate">{(item.title || item.name)?.slice(0, 20)}</h3>
                        <h3 className="text-base font-semibold text-green-600">{item.price} $</h3>
                        <div className="cursor-pointer text-yellow-400 text-lg flex">
                          <span className="flex gap-1">
                            {item.rating} {getStars(item.rating || 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xl text-gray-600 w-full text-center">No recommendations available.</p>
                )}
              </div>
            </div>
          </section>


      ))}



      <Footer />
    </ >
  );
}

export default DetailPage