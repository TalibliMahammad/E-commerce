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
import { MoonLoader, PulseLoader } from 'react-spinners';
import imageL from './../../assets/3094352.jpg'
import googleİcon from '../../assets/google.png'

const LoginPage = () => {

    const { Register, Login } = useSelector((state) => state.regState);

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const navigate = useNavigate()
    const [touched, setTouched] = useState({});
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [ShowDot, setShowDot] = useState(false)








    const validate = () => {
        const newErrors = {}
        if (!email.trim()) {
            toast.error('Email is required');
            newErrors.email = 'Email is required';

        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            toast.error('Invalid email address');
            newErrors.email = 'Invalid email address';

        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';

            toast.error('Password is required');

        } else if (password.length < 6) {
            toast.error('Password must be at least 6 characters');

        }
        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitAttempted(true);

        if (!validate()) {
            return;
        }
        setShowDot(true);
        try {
            await dispatch(handleLogin({ email, password })).unwrap();
            toast.success('Login success');
            setTimeout(() => navigate('/'), 4000);
        } catch {
            toast.error('Wrong email or password');
            setShowDot(false)
            setLoginError('Wrong email or password')
        } finally {
            setTimeout(() => setShowDot(false), 4000);
        }
    };

    const validateField = (fieldName, value) => {
        let error = '';

        if (fieldName === 'email') {
            if (!value.trim()) {
                error = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                error = 'Invalid email address';
            }
        }

        if (fieldName === 'password') {
            if (!value.trim()) {
                error = 'Password is required';
            } else if (value.length < 6) {
                error = 'Password must be at least 6 characters';
            }
        }

        setErrors(prev => ({ ...prev, [fieldName]: error }));
    };

    return (
        <>
            {ShowDot && (
                <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9999]">
                    <PulseLoader color="rgba(30, 179, 77, 1)" />
                </div>
            )}
            <Header />

            <div className='flex h-[100vh] pt-5 items-center '>
                <div className='h-full  w-[50%] flex items-center'>
                    <img className='h-full w-full object-cover' src={imageL} alt="" />
                </div>
                <div className=' w-[50%] flex justify-evenly flex-col items-center'>

                    <form onSubmit={handleSubmit} className='flex justify-evenly h-[70vh] w-[50%] flex-col bg-white  '>
                        <div className='  text-left  flex flex-col  gap-5 '>
                            <h2 className='text-[30px] '>Welcome here  <span className='font-bold text-[35px]'>Log in</span> and enjoy the shopping</h2>
                            <h4 className='text-[12px]'>Enter your Details below</h4>
                            <div className='flex justify-center  font-serif text-xl text-red-500 p-10'>{loginError}</div>

                        </div>

                        <div className='  flex  flex-col gap-10'>

                            <input
                                key={loginError} 
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => {
                                    setTouched(prev => ({ ...prev, email: true }));
                                    validateField('email', email);
                                }}
                                className={`
                                     border-b p-2 rounded outline-none transition-all duration-300
                                     ${loginError === "Wrong email or password" || ((submitAttempted || touched.email) && errors.email)
                                        ? "!border-red-500 !text-red-500 !placeholder-red-500"
                                        : "border-gray-400 text-black placeholder-gray-400"
                                    }
                                            focus:border-blue-500
                                              `}
                                                   />




                            {(submitAttempted || touched.email) && errors.email && (
                                <div className="text-red-500 text-sm">{errors.email}</div>
                            )}



                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPass(e.target.value)}
                                onBlur={() => {
                                    setTouched(prev => ({ ...prev, password: true }));
                                    validateField('password', password);
                                }}
                                className={`
                                    border-b p-2 rounded outline-none transition-all duration-300
                                    ${loginError === "Wrong email or password" || ((submitAttempted || touched.password) && errors.password)
                                        ? "border-red-500 text-red-500 placeholder-red-500"
                                        : "border-gray-400 text-black placeholder-gray-400"
                                    }
                                  focus:border-blue-500
                                           `}
                            />

                            {(submitAttempted || touched.password) && errors.password && (
                                <div className="text-red-500 text-sm">{errors.password}</div>
                            )}
                        </div>


                        <div className=' bg-red-400   relative h-15 rounded-2xl text-white flex justify-center '>
                            <ToastContainer />

                            <button className=' cursor-pointer   w-full' type="submit">
                                Submit
                            </button>
                        </div>
                        <div className='border-1 p-4 rounded-2xl cursor-pointer flex items-center justify-center gap-5' >
                            <img className='w-[20px] h-[20px]  ' src={googleİcon} alt="" />
                            <span>Log in With Google</span>
                        </div>
                        <span className='   cursor-pointer  text-red-500 font-semibold'>Forget Password{' '}?</span>
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