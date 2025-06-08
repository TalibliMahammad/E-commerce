import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CartButton from './CartButton'
import HeartButton from './HeartButton'

const Categoryboxproduct = () => {


    const { category, categoryName } = useParams()

    const data = useSelector((state => state.fetchState.data[category][categoryName]))

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


    return (
        <div className=' bg-stone-100 '>
            <Header />
            <div className='flex justify-evenly mt-10 gap-10 flex-wrap px-19 mb-10'>
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[400px] w-[300px] overflow-hidden group relative">

                        <div className="relative h-[250px] w-full cursor-pointer">
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                                -20%
                            </div>

                            <div className="absolute top-2 right-2 z-10">
                                <HeartButton item={item} />
                            </div>

                            <img
                                className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                                src={item.images?.[0]}
                                alt={item.title}
                            />

                            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <CartButton item={item} />
                            </div>
                        </div>

                        <div className="p-4 flex flex-col gap-1">
                            <h3 className="text-sm text-gray-500 truncate" >{item.brand}</h3>
                            <h3 className="text-lg font-medium text-gray-800 truncate">{item.title.slice(0, 20)}</h3>
                            <h3 className="text-base font-semibold text-green-600">{item.price} $</h3>
                            <div className="  cursor-pointer text-yellow-400 text-lg flex">
                                <span className='flex gap-1'>

                                    {item.rating} {getStars((item.rating || 0))}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>







            <Footer />
        </div>
    )
}

export default Categoryboxproduct