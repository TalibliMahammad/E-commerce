import React from 'react'
import imagePro from '../../assets/image.png'

const PromotionSection = () => {
    return (

        <div className='mt-[100px] flex justify-center  '>
            <div className='  md:h-[75vh] md:w-[91.1%] bg-red-500'>
                <img   className='h-full w-full  object-cover' src={imagePro} alt="" />
            </div>
        </div>
    )
}

export default PromotionSection