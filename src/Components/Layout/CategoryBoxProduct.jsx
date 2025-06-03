import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CartButton from './CartButton'

const Categoryboxproduct = () => {


    const { category, categoryName } = useParams()

    const data = useSelector((state => state.fetchState.data[category][categoryName]))


    console.log(data[0].images[0]);

    return (
        <div className=' bg-stone-100 '>
            <Header />
            <div className='flex justify-evenly mt-10  gap-10 flex-wrap px-19 mb-10'>

                {data.map((item) => (
                    <div className="flex flex-col gap-6 p-6  rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">


                        <div className='bg-white   h-[250px] w-[270px]'>
                            <img className='h-full w-full object-contain' src={item.images[0]} alt="" />
                        </div>
                        <CartButton />
                        <div className='ml-5 p-5'>

                            <h3>{item.price} $</h3>
                            <h3>{item.title.slice(0, 20)}</h3>
                            <h3>{item.stock}</h3>

                        </div>
                    </div>
                ))}

            </div>






            <Footer />
        </div>
    )
}

export default Categoryboxproduct