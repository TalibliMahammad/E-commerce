import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiWatch } from "react-icons/gi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import { IoGameControllerSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const CategoryBox = () => {

    const navigate = useNavigate()
    const { data } = useSelector((state) => state.fetchState)

   


    
    const handleClick = (categoryName) => {
        navigate(`/Electronics/${categoryName}`)
    }


    return (
        <div className='flex flex-col gap-10 '>
            <div className='mt-[100px]  flex flex-col  gap-3.5'>

                <div className=' lg:pl-21 pt-5'>
                    <div className='flex flex-col-reverse text-[20px] lg:flex-row items-center  gap-0 lg:gap-[15px] font-bold'>
                        <div className=' rotate-90 lg:rotate-0 bg-red-500 rounded-[5px] h-[40px] w-[15px]'></div> Categories
                    </div>
                </div>

            </div>

            <div className='flex  justify-center mt-[30px] gap-[50px] flex-wrap'>
                <div   onClick={()=>handleClick("Phone")} className=' border rounded-2xl h-[250px] bg-gray-200 w-[250px]  flex items-center justify-center flex-col  gap-[20px]    hover:bg-red-500 hover:text-white  transition duration-500 '>
                    <IoIosPhonePortrait className='size-[100px]' />
                    <h3>Phone</h3>
                </div>
                <div  onClick={()=>handleClick("Laptop")} className='border  rounded-2xl  h-[250px] bg-gray-200  w-[250px] flex items-center justify-center flex-col  gap-[20px] hover:bg-red-500 hover:text-white  transition duration-500 '>
                    <HiOutlineComputerDesktop className='size-[100px]' />
                    <h3>Laptop</h3>
                </div>
                <div  onClick={()=>handleClick("Smartwatch")}  className='border  rounded-2xl h-[250px] bg-gray-200  w-[250px] flex items-center justify-center  gap-[20px] flex-col hover:bg-red-500 hover:text-white  transition duration-500'>
                    <GiWatch className='size-[100px]' />
                    <h3>Smart Watch</h3>
                </div>
                <div  onClick={()=>handleClick("Camera")}   className=' border rounded-2xl h-[250px] bg-gray-200   w-[250px] flex items-center justify-center  gap-[20px] flex-col  hover:bg-red-500 hover:text-white  transition duration-500'>
                    <MdOutlinePhotoCamera className='size-[100px]' />
                    <h3>Camera</h3>
                </div>
                <div  onClick={()=>handleClick("Earbuds")}  className=' border rounded-2xl h-[250px] bg-gray-200   w-[250px] flex items-center  gap-[20px] justify-center flex-col  hover:bg-red-500 hover:text-white  transition duration-500'>
                    <BsHeadphones className='size-[100px]' />
                    <h3>EarBuds</h3>
                </div>
                <div  onClick={()=>handleClick("Gaming")}    className='border  rounded-2xl h-[250px] bg-gray-200  p-[10px]  w-[250px] flex items-center  gap-[20px] justify-center flex-col  hover:bg-red-500 hover:text-white  transition duration-500'>
                    <IoGameControllerSharp className='size-[100px]' />
                    <h3>Gaming</h3>
                </div>
            </div>


        </div>
    )
}

export default CategoryBox