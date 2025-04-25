import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const AllProduct = () => {
    const { section } = useParams();
    const { data, loading, error, } = useSelector((state) => state.fetchState)
    const filteredData = data.filter(item => 
        item.category?.toLowerCase() === section.toLowerCase()
      )
      
    
    return (

        <>
            <Header />
            <div className='mt-24 px-4'>
                <h1 className='text-2xl font-bold mb-4 capitalize'>{section} Products</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <div className='flex justify-evenly gap-6 flex-wrap'>
                    {filteredData.map(item => (
                        <div key={item.id} className=' rounded-xl shadow-lg w-[250px] gap-2.5 flex flex-col p-2'>
                            <img className='h-[250px]' src={item.images[0]} alt={item.name} />
                            
                            <p>${item.price}</p>
                            <p>${item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllProduct