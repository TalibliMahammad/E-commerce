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




const DetailPage = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const allItems = useSelector((state) => state.fetchState.data) || [];




    const flatItems = Object.values(allItems)        // Electronics, Health, …
        .flatMap(cat => Object.values(cat))           // Camera, Earbuds, …
        .flat();

    const flatMap = flatItems.filter(item => item.id == id)
    const [count, setCount] = React.useState(1);
    const [img, setImg] = React.useState(flatMap[0]?.images[0])


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

    return (
        <>
            <Header />
            {flatMap.map(item => (
  <section className="container mx-auto px-4 py-10">
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
              alt={`Thumbnail ${index + 1}`}
            />
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

        {/* Quantity and Buy Now */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-4">
            <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded hover:bg-red-400 hover:text-white transition">-</button>
            <span className="text-xl">{count}</span>
            <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded hover:bg-red-400 hover:text-white transition">+</button>
          </div>
          <button className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition text-lg">
            Buy Now
          </button>
        </div>

        {/* Delivery info */}
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
    </div>
  </section>
))}


            <Footer />
        </>
    );
}

export default DetailPage