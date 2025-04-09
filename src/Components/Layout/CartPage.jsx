import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import imageCart from './../../assets/image.png'



const CartPage = () => {
    return (
        <div>
            <Header />
            <div className='  m-23 flex flex-col gap-10'>
                <div className='bg-stone-100 flex justify-around py-5 rounded-2xl'>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>

                <div className='flex flex-col gap-3.5'>
                    <div className='bg-stone-100 flex justify-around py-2 rounded-2xl items-center'>
                        <div className='h-[80px] w-[60px]'><img className='h-full w-full object-cover' src={imageCart} alt="" /></div>
                        <span>350 Azn</span>
                        <span className=' h-[50px]'>
                            <input className='bg-stone-200 rounded-xl  outline-none h-full pl-7  border-none w-[70px] ' type="number" name="" id="" />
                        </span>
                        <span>155 azn</span>
                    </div>
                    <div className='bg-stone-100 flex justify-around py-2 rounded-2xl items-center'>
                        <div className='h-[80px] w-[60px]'><img className='h-full w-full object-cover' src={imageCart} alt="" /></div>
                        <span>350 Azn</span>
                        <span className=' h-[50px]'>
                            <input className='bg-stone-200 rounded-xl  outline-none h-full pl-7  border-none w-[70px] ' type="number" name="" id="" />
                        </span>
                        <span>155 azn</span>
                    </div>
                    <div className='bg-stone-100 flex justify-around py-2 rounded-2xl items-center'>
                        <div className='h-[80px] w-[60px]'><img className='h-full w-full object-cover' src={imageCart} alt="" /></div>
                        <span>350 Azn</span>
                        <span className=' h-[50px]'>
                            <input className='bg-stone-200 rounded-xl  outline-none h-full pl-7  border-none w-[70px] ' type="number" name="" id="" />
                        </span>
                        <span>155 azn</span>
                    </div>
                </div>
                <div className=' flex  justify-between '>
                    <div className='h-[60px] w-[200px]  flex justify-center  border items-center bg-white'>Return To Shop</div>
                    <div className='h-[60px] w-[200px]  flex justify-center  border items-center'>Update Cart</div>
                </div>

                <div className='w-[30%] flex h-[80px] gap-7 justify-between  items-center'>
                <input className='h-[40px] w-[50%] outline-none border pl-4 '  placeholder='Enter The Coupon' type="text" />
                <div className='bg-red-400 h-[60px] w-[50%] flex items-center rounded-xl text-white justify-center'>Apply Coupon</div>
            </div>
            </div>

          
            <Footer />
        </div>
    )
}

export default CartPage