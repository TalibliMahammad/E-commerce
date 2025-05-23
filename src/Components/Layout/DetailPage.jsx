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
;

    
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
                <div className='   justify-center flex flex-col items-center mt-[40px] not-only-of-type:pt-5'>
                    <div className='flex flex-col rounded-xl p-5 hover:bg-stone-100 transition-all duration-300 relative  lg:flex-row gap-10'>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-4'>
                                <img className=' border-b h-[138px] w-[178px] object-cover' src={item.images[1]} alt="" />
                                <img className=' border-b h-[138px] w-[178px] object-cover' src={item.images[2]} alt="" />
                                <img className='border-b h-[138px] w-[178px] object-cover' src={item.images[3]} alt="" />
                                <img className=' border-b h-[138px] w-[178px] object-cover' src={item.images[4]} alt="" />
                            </div>
                            <div><img className='h-[600px] w-[500px]' src={item.images[0]} alt="" /></div>
                        </div>
                        <div className='    gap-5 flex flex-col'>
                            <h2 className='text-3xl font-bold'>{item.title}</h2>
                            <div className='flex gap-4'>
                                <span className='flex gap-5'>
                                    <h3>*********</h3>
                                    <h3>{item.rating} </h3>
                                </span>
                                |
                                <span>{item.stock}pieces</span>
                            </div>
                            <div className='w-[500px] flex flex-col gap-5  border-gray-300'>
                                <h3 className=' text-4xl'>{item.price}$</h3>
                                <p className='flex flex-col gap-5'>
                                    <div className='border-b-1 '>{item.description}</div>
                                </p>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <span className='flex gap-5'>
                                    Colours:
                                    <input className='bg-white' type="radio" name="Circle" id="" />
                                    <input className='bg-black' type="radio" name="Circle" id="" />
                                </span>
                                <div className='flex gap-5 '>
                                    <h3 className='cursor-pointer  hover:bg-red-400 hover:text-white transition-all duration-300 border rounded-[5px] p-2'>Xs</h3>
                                    <h3 className='cursor-pointer  hover:bg-red-400 hover:text-white transition-all duration-300 border rounded-[5px] p-2'>Xs</h3>
                                    <h3 className='cursor-pointer  hover:bg-red-400 hover:text-white transition-all duration-300 border rounded-[5px] p-2'>Xs</h3>
                                </div>
                            </div>

                            <div className=' flex justify-between '>

                                <span className='flex items-center rounded-[10px] gap-10 bg-stone-200 '>
                                    <button
                                        onClick={handleDecrement}
                                        className=' rounded-[10px] text-2xl bg-stone-300 text-black h-full w-10 cursor-pointer  hover:bg-red-400 hover:text-white transition-all duration-300'
                                    >
                                        -
                                    </button>
                                    <span>{count}</span>
                                    <button
                                        onClick={handleIncrement}
                                        className=' rounded-[10px] text-2xl bg-stone-300 text-black h-full w-10 cursor-pointer  hover:bg-red-400 hover:text-white transition-all duration-300 '
                                    >
                                        +
                                    </button>
                                </span>

                                <div className='cursor-pointer bg-red-400 text-white hover:bg-white hover:border-1  hover:text-black transition-all duration-300 relative h-15 rounded-2xl flex justify-center'>
                                    <ToastContainer />
                                    <button className='w-[180px]' type="submit">
                                        Buy Now
                                    </button>

                                </div>
                            </div>

                            <div className=' border  flex-col flex gap-5 justify-center rounded-2xl p-5'>
                                <h3 className='text-2xl font-bold'>Delivery</h3>
                                <span className='flex gap-5 '>
                                    <TbTruckDelivery className=' size-[40px] text-red-400' />
                                    <h3>Free delivery on orders over $100</h3>
                                </span>
                                <span className='border-b'></span>
                                <span className='flex gap-5'>
                                    <GiReturnArrow className=' size-[40px] text-red-400' />
                                    <h3>Free returns within 30 days</h3>
                                </span>
                            </div>

                        </div>



                    </div>
                </div>
            ))}  
            <Footer />
        </>
    );
}

export default DetailPage