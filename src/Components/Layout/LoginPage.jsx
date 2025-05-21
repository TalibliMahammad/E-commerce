import React, { useState } from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import FormRegister from './FormRegister';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../../Redux/CreateSlice/AuthSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { MoonLoader } from 'react-spinners';

const LoginPage = () => {

    const { Register, Login } = useSelector((state) => state.regState);
    console.log(Login);




    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [loader, setLoader] = useState(false)
    const [ShowDot, setShowDot] = useState(false)
    const navigate = useNavigate()






    const verifyFunc = (e) => {
        e.preventDefault()
        const logData = { email, password }
        setShowDot(true)
        dispatch(handleLogin(logData))

        const registeredUser = JSON.parse(localStorage.getItem("regData"))

        if (
            registeredUser &&
            email === registeredUser.email &&
            password === registeredUser.password
        ) {
            toast.success("Login Success!")


            setTimeout(() => {
                const LogUser = localStorage.setItem("LoginUser", JSON.stringify(registeredUser))
                navigate('/');


            }, 3000)

        } else {
            toast.error("Wrong email or passWord!");
            setShowDot(false)
        }

    }




    return (
        <>
            <Header />

            <div className='flex h-[90vh] pt-5 items-center '>
                <div className='h-full  w-[50%] flex items-center'>
                    <img className='h-full w-full object-cover' src={imageL} alt="" />
                </div>

                <div className=' w-[50%] flex justify-evenly flex-col items-center'>

                    <form onSubmit={verifyFunc} className='flex justify-evenly h-[70vh] w-[50%] flex-col bg-white  '>
                        <div className='  text-left'>
                            <h2 className='text-[30px] '>Welcome here Log in and enjoy the shopping</h2>
                            <h4 className='text-[12px]'>Enter your Details below</h4>
                        </div>

                        <div className='  flex  flex-col gap-10'>

                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='bg-transparent p-2 outline-none border-b border-gray-500 ' placeholder='Email or Username ' type="email" />
                            <input onChange={(e) => setPass(e.target.value)} value={password} className='bg-transparent p-2 outline-none border-b border-gray-500 ' placeholder='Password ' type="password" />
                        </div>


                        <div className=' bg-red-400  relative h-15 rounded-2xl text-white flex justify-center '>
                            <ToastContainer />
                            
                            <button className='   w-full' type="submit">
                                Submit
                            </button>
                            {ShowDot && (
                                <div className=" right-8  bottom-2 absolute  z-50">
                                    <MoonLoader color="white" size={30} />
                                </div>
                            )}
                        </div>
                        <div className='border-1 p-4 rounded-2xl flex items-center justify-center gap-5' >
                            <FaGoogle className='text-[20px] text-red-500' />  <span>Log in With Google</span>
                        </div>
                        <span className='text-red-500 font-semibold'>Forget Password{' '}?</span>
                    </form>
                    <div>
                        Dont  you have an account{' '}
                        <Link to="/signin" className="underline">
                            sign in
                        </Link>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default LoginPage