import React, { use, useState } from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../Redux/CreateSlice/CartSlice'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CartAnimation from '/SlidersImages/CartAnimations.mp4'



const CartPage = () => {
    const DataCart = useSelector((state) => state.cartState.items)
    const dispatch = useDispatch()
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0)
    const navigate = useNavigate();

    const subtotal = DataCart.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
    const shipping = 20;
    const discountTotal = subtotal - (subtotal * (discount / 100));
    const total = discountTotal + shipping;





    const applyCoupon = () => {
        if (couponCode.trim().toLowerCase() === 'discount30') {
            setDiscount(30);
            toast.success('Coupon applied successfully');
        } else {
            setDiscount(0);
            toast.error('Invalid coupon code');
        }
    };

    return (
        <div className=''>
            <ToastContainer />
            <Header />
            {DataCart.length > 0 ? (
                <div className="p-10 bg-stone-100 min-h-screen">
                    <h1 className="text-4xl font-bold mb-10 text-center">
                        Shopping Cart ({DataCart.length})
                    </h1>

                    <div className="hidden md:flex justify-between font-semibold text-lg border-b border-gray-300 pb-4">
                        <span className="w-[25%] text-left">Product</span>
                        <span className="w-[15%] text-center">Price</span>
                        <span className="w-[30%] text-center">Quantity</span>
                        <span className="w-[15%] text-right">Subtotal</span>
                    </div>

                    {DataCart.map((item, key) => (
                        <div key={item.id} className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow px-10 my-4 gap-4">
                            <div className="w-full md:w-[25%] flex items-center gap-4 ">
                                <img src={item.image} alt={item.name} className="h-[80px] w-[60px] object-contain rounded" />
                                <span className="font-medium text-gray-700">{item.name}</span>
                            </div>

                            <span className="w-full md:w-[15%] text-center font-semibold text-gray-700">
                                {typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}$
                            </span>

                            <div className="w-full md:w-[30%] flex justify-center items-center gap-4">
                                <button
                                    onClick={() => dispatch(removeItem(item.id))}
                                    className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-black text-lg"
                                >
                                    -
                                </button>
                                <span className="font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => dispatch(addItem(item))}
                                    className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-black text-lg"
                                >
                                    +
                                </button>
                            </div>

                            <span className="w-full md:w-[15%] text-right font-semibold text-gray-800">
                                {typeof item.totalPrice === 'number' ? item.totalPrice.toFixed(2) : '0.00'}$
                            </span>
                        </div>
                    ))}

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        
                        <div className="space-y-5">
                            <button onClick={() => navigate('/')} className="w-full py-4 bg-white border hover:bg-gray-100 rounded-xl font-semibold">

                                Return to Shop
                            </button>

                            <div className="flex gap-4">
                                <input
                                    className="flex-1 border border-gray-300 p-3 rounded-xl outline-none"
                                    placeholder="Enter Coupon Code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button onClick={applyCoupon} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">
                                    Apply Coupon
                                </button>
                            </div>
                        </div>


                        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                            <h2 className="text-2xl font-bold border-b pb-2">Cart Totals</h2>

                            <div className="flex justify-between">
                                <span className="text-gray-700">Subtotal</span>
                                <span className="font-semibold">{subtotal.toFixed(2)}$</span>
                            </div>
                            {(discount > 0) && (
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Discount</span>
                                    <span className="font-semibold">{discount.toFixed(2)}$</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-gray-700">Shipping</span>
                                <span className="font-semibold">{shipping.toFixed(2)}$</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                                <span className="text-xl font-semibold">Total</span>
                                <span className="text-xl font-bold text-green-600">{total.toFixed(2)}$</span>
                            </div>

                            <button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl text-lg font-semibold">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex items-center justify-center flex-col  mt-10'>
                    <h3 className="text-2xl font-bold text-red-500 animate-pulse">
                        Your Cart is Empty
                    </h3>
            <div className='flex justify-center py-10  h-[70vh]'>
                <video className='w-full h-full rounded-[30px]'  autoPlay loop muted  src={CartAnimation}></video>
            </div>
                </div>
            )}



            <Footer />
        </div>
    )

}

export default CartPage