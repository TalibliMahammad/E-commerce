import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
// Removed unused import
import { useDispatch, useSelector } from 'react-redux'
// Removed unused imports
import { addItem, removeItem } from '../../Redux/CreateSlice/CartSlice'



const CartPage = () => {
    const DataCart = useSelector((state) => state.cartState.items)
    const dispatch = useDispatch()
    const subtotal = DataCart.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
    const shipping = 20; 
    const total = subtotal + shipping;
    



    return (
        <div>
            <Header />
            <div className='  m-23 flex flex-col gap-10'>
                <h1 className='text-left text-3xl font-bold'>Shopping Cart({DataCart.length})</h1>
                <div className='bg-stone-100 flex justify-around py-5 rounded-2xl'>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>



                {DataCart.map((item, key) => (

                    <div className='flex flex-col gap-3.5'>

                        <div className='bg-stone-100 flex justify-around py-2 rounded-2xl items-center'>
                            <div className='h-[80px] w-[60px]' key={key} ><img className='h-full w-full object-cover' src={item.image} alt="" /></div>
                            <span>{typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}$</span>
                            <span className=' flex items-center gap-10 bg-stone-200 '>
                                <button
                                    onClick={() => dispatch(removeItem(item.id))}
                                    className='  text-2xl  bg-stone-300 text-black p-2 '

                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => dispatch(addItem(item))}
                                    className=' text-2xl  bg-stone-300 text-black p-2'
                                >
                                
                                    +
                                </button>

                            </span>
                            <span>{typeof item.totalPrice === 'number' ? item.totalPrice.toFixed(2) : '0.00'}$</span>
                        </div>
                    </div>

                ))}


                <div className=' flex  justify-between '>

                    <div className='flex gap-5 flex-col  w-[35%] p-5 '>
                        <div className='h-[60px] w-[200px]  flex justify-center  border items-center bg-white'>Return To Shop</div>
                        
                        <div className=' flex  gap-7 justify-between   items-center'>
                            <input className='h-full w-[50%] outline-none border pl-4 ' placeholder='Enter The Coupon' type="text" />
                            <div className='bg-red-400 h-[70px] w-[200px] flex items-center rounded-2xl text-white justify-center'>Apply Coupon</div>
                        </div>
                    </div>

                    <div className='flex gap-5  flex-col r  items-end'>
                        <div className=' h-[60px] w-[200px]  flex justify-center  border   items-center'>Update Cart</div>
                        <div className='border  rounded-2xl p-5   w-[400px] flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold'>Cart Totals</h2>
                            <div className=' border-b-1 p-4 flex justify-between items-center'>
                                <span>Subtotal</span>
                                <span>{subtotal.toFixed(2)}$</span>
                            </div>
                            <div className='border-b-1 p-4 flex justify-between items-center'>
                                <span>Shipping</span>
                                <span>{shipping.toFixed(2)}$</span>
                            </div>
                            <div className='border-b-1 p-4 flex justify-between items-center'>
                                <span>Total</span>
                                <span>{total.toFixed(2)}$</span>
                            </div>
                            <div className=' flex h-[80px] gap-7 justify-center items-center'>
                                <div className='bg-red-400 h-[60px] w-[50%] flex items-center rounded-xl text-white justify-center'>Progress Checkout</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )

}

export default CartPage