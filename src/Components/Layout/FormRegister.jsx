import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../../Redux/CreateSlice/AuthSlice';
import { ThreeDot } from 'react-loading-indicators';
import { MoonLoader } from 'react-spinners';

const FormRegister = () => {



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [ShowDot, setShowDot] = useState(false)


    return (

        <Formik

            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setLoader(true);
                dispatch(handleRegister(values));
                setShowDot(true); // 1. animasiyanı göstər

                // 2. 3 saniyə sonra yönləndir
                setTimeout(() => {
                    navigate("/login");
                }, 3000);

                setSubmitting(false);
            }}
        >

            {({


                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form className='flex flex-col justify-between  h-full' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className='bg-transparent p-2  outline-none border-b border-gray-500 ' placeholder='Name '
                    />

                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className='bg-transparent p-2  outline-none border-b border-gray-500 ' placeholder='Email '
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className='bg-transparent p-2  outline-none border-b border-gray-500 ' placeholder='Password '
                    />

                    <div className=' bg-red-400  relative h-15 rounded-2xl text-white flex justify-center '>
                        {errors.password && touched.password && errors.password}
                        <button className='  w-full' type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        {ShowDot &&(
                            <div className=" right-8  bottom-2 absolute  z-50">
                                <MoonLoader color="white" size={30} />
                            </div>
                        )}
                    </div>


                </form>
            )}

        </Formik>

    )

}






export default FormRegister;