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

        <>
        <section key={item.id} className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="flex flex-col gap-4">
              <div className="border rounded-xl p-4 bg-white shadow">
                <img src={img} alt={item.title} className="w-full h-[500px] object-contain rounded-xl" />
              </div>
              <div className="flex gap-4 justify-center">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    onClick={() => setImg(image)}
                    className="w-20 h-20 object-contain border rounded-md cursor-pointer hover:ring-2 hover:ring-red-400 transition"
                    alt={`Thumbnail ${index + 1}`} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold text-gray-800">{item.title}</h1>

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span>{item.rating}</span>
                </div>
                <span>{item.stock} in stock</span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>

              <h2 className="text-3xl font-semibold text-red-500">${item.price}</h2>


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
                    <div className="flex gap-3">
                      {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                        <button
                          key={size}
                          className="border px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}


              <div className="flex  flex-col gap-4 mt-4">
                <div className="flex items-center gap-4">
                  <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded hover:bg-red-400 hover:text-white transition">-</button>
                  <span className="text-xl">{count}</span>
                  <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded hover:bg-red-400 hover:text-white transition">+</button>
                </div>

                <div className="flex  gap-4 justify-between ">

                  <button className="w-[300px] bg-red-500 text-white py-3 rounded-xl hover:w-full transition-all hover:bg-red-600  text-lg">
                    Buy Now
                  </button>


                  <div className={`w-[300px] text-white py-3 rounded-xl hover:w-full transition-all text-lg ${isCart ? 'bg-black' : 'bg-red-500 hover:bg-red-600'}`}>

                  <button
                    onClick={handleCart}
                    className={` group-hover:opacity-100  w-full text-center px-4 py-2 transition-opacity duration-300  text-white`}
                  >
                    {isCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>


              </div>
            </div>


            <div className="mt-8 border rounded-xl p-5 bg-gray-50 shadow-sm">
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
        </div><div className=' w-full  '>




            <div className="flex justify-between lg:flex-row gap-10 py-10  text-white ">

              <div className=" space-y-4">
                {item.images.map((img, index) => (
                  <img
                    key={index}
                    className="w-full h-120 object-contain rounded-xl shadow"
                    src={img}
                    alt={`Product image ${index + 1}`} />
                ))}
              </div>


              <div className="lg:w-1/2 space-y-8">

                <div className="bg-gray-800  p-4 rounded-xl shadow-lg">
                  <h1 className="text-4xl font-bold text-gray-300">{item.title}</h1>
                </div>


                <div className="bg-gray-800  p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-3">Product Information</h2>
                  <h2 className='text-2xl font-semibold mb-3'>{item.brand}</h2>
                  <div className="  cursor-pointer text-yellow-400 text-lg flex">
                    <span className='flex gap-1'>
                      <span>in Stock</span> {item.countInStock}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description || "This product is made of high-quality materials and is designed for long-term use. It provides excellent performance and great value for the price."}
                  </p>

                  <div className="  cursor-pointer text-yellow-400 text-lg flex">
                    <span className='flex gap-1'>
                      <span>Rating</span> {item.rating} {getStars((item.rating || 0))}
                    </span>
                  </div>

                </div>


                <div className="bg-gray-900  flex gap-5 flex-col  p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold  mb-3">Customer Review</h2>
                  <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-200 italic">
                      “I really like this product. The quality is amazing and it was delivered quickly. Highly recommended!”
                    </p>
                    <span className="block text-sm text-gray-400 mt-2">- John Doe</span>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-200 italic">
                      “Absolutely love it! The quality is outstanding and delivery was super fast.”
                    </p>
                    <span className="block text-sm text-gray-400 mt-2">-  Sarah John</span>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-200 italic">
                      “Exactly what I was looking for. Stylish and comfortable. Will buy again.”
                    </p>
                    <span className="block text-sm text-gray-400 mt-2">-Mark Williams</span>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-200 italic">
                      “The product looks better in real life than the pictures. Highly recommended!”
                    </p>
                    <span className="block text-sm text-gray-400 mt-2">-Emma Brown</span>
                  </div>
                </div>


                <div className="bg-gray-800 p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-3">Additional Information</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Free shipping within 3 business days.</li>
                    <li>Returnable within 7 days of delivery.</li>
                    <li>Guaranteed 100% original product.</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-md shadow text-gray-200 space-y-3 mt-6">
                  <h3 className="text-xl font-semibold text-white">🛡️ Warranty & Return Policy</h3>

                  <p><span className="font-semibold text-white">Warranty Duration:</span> This product comes with a 12-month limited warranty covering manufacturing defects and hardware issues.</p>

                  <p><span className="font-semibold text-white">Return Policy:</span> Returns are accepted within 30 days of delivery. Items must be in original condition with packaging intact. Shipping costs for returns are the responsibility of the customer unless the item is faulty.</p>

                  <p className="text-sm text-gray-400">Need help? Contact our support team at support@example.com</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-md shadow text-gray-200 mt-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🔒 Secure Payment Methods</h3>

                  <p className="mb-4 text-gray-300">We accept the following secure payment options:</p>

                  <div className="flex items-center gap-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                    <img src={stripeimg} alt="Stripe" className="h-20" />
                  </div>

                  <p className="text-sm text-gray-400 mt-3">Your payment information is encrypted and protected by industry-leading security protocols.</p>
                </div>
                <div className=" bg-gray-700 text-white rounded-xl p-6 space-y-6 shadow-lg">
                  <h2 className="text-2xl font-bold flex items-center gap-2">👥 Ask a Question</h2>


                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Your Name</label>
                      <input type="text" placeholder="e.g. John Doe" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Your Question</label>
                      <textarea rows="3" placeholder="Write your question here..." className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <button type="submit" className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-white font-semibold">
                      Submit Question
                    </button>
                  </form>


                  <div className="border-t border-gray-700 pt-6 space-y-5">
                    <div>
                      <p className="font-semibold text-lg">❓ Alice asked:</p>
                      <p className="text-gray-300 mb-2">Is this product waterproof?</p>
                      <p className="text-green-400">✅ Yes, it has an IP68 rating which means it's fully waterproof up to 1.5 meters for 30 minutes.</p>
                    </div>

                    <div>
                      <p className="font-semibold text-lg">❓ David asked:</p>
                      <p className="text-gray-300 mb-2">Does it support wireless charging?</p>
                      <p className="text-green-400">✅ Absolutely! It supports fast wireless charging up to 15W.</p>
                    </div>

                    <div>
                      <p className="font-semibold text-lg">❓ Mary asked:</p>
                      <p className="text-gray-300 mb-2">Can I return it if I don’t like it?</p>
                      <p className="text-green-400">✅ Yes, we offer a 14-day return policy, no questions asked.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div><div className=' mt-10'>
            <div className='flex justify-between'>
              <div className='flex flex-col-reverse text-2xl lg:flex-row items-center w-full gap-0 lg:gap-[15px] font-bold'>
                <div className='rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div>
                Just Recommended
              </div>

              <div className='text-2xl'>
                <div className='border rounded-2xl p-2 w-[250px] flex justify-center'>Move All To Bag</div>
              </div>
            </div>

            <div className='flex justify-evenly mt-10 gap-10 flex-wrap px-20 mb-10'>
              {recommendedItems.length > 0 ? (
                recommendedItems.map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative"
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
                        alt={item.name || item.title} />

                      <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => onAddToCart(item)}
                          className="w-full bg-black text-white py-2 font-semibold hover:bg-gray-800 transition-colors duration-300"
                        >
                          Add To Cart
                        </button>
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
                <p className="text-xl text-gray-600">No recommendations available.</p>
              )}
            </div>

          </div>

        </section>

        </>
      ))} 
      


      <Footer />
    </ >
  );
}

export default DetailPage