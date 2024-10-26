import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import forgot_password_img from '../../../public/images/forgot_password_img.png';

const Forgot_password = () => {
    const [loginError, setLoginError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted data:', data);

        axios
            .post('https://task-4-ten-khaki.vercel.app/user/login', {
                Email: data.Email,
            })
            .then((res) => {
                if (res.data) {
                    console.log('user Login');
                } else {
                    setLoginError('Incorrect email/phone');
                }
            })
            .catch((error) => {
                console.error('Login error:', error);
                setLoginError('Login failed. Please try again later.');
            });
    };

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/Login_bg_img.png')" }}>
            <div className="flex w-full h-full">
                {/* Login Image Side */}
                <div className="hidden lg:flex w-1/2 bg-gray-100 flex-col justify-center">
                    <h1 className="text-5xl font-bold text-orange-600 ms-16">Dash<span className="text-black">Stack</span></h1>
                    <div className="flex items-center justify-center"><img className="mt-16 h-96" src={forgot_password_img} alt="Login" /></div>
                </div>
                {/* Login Form Side */}
                <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-8 py-12 lg:py-0">
                    <h1 className="text-5xl font-bold text-orange-600 lg:hidden">Dash<span className="text-black">Stack</span></h1>
                    <form className="bg-white w-full max-w-md shadow-lg rounded-lg p-8 mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-semibold mb-6 text-center">Forget Password</h2>
                        <p className='pb-3 text-sm md:text-md'>Enter your email and we’ll send you a otp to reset your password.</p>
                        <div className="mb-4">
                            <label className="font-semibold">Email or Phone Number*</label>
                            <input
                                type="text"
                                className="border rounded w-full py-2 px-3 mt-1"
                                placeholder="Enter Your Email or Phone Number"
                                {...register("Email", {
                                    required: "Email or phone number is required",
                                    pattern: {
                                        value: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|^\d{10,15}$)$/i,
                                        message: "Enter a valid email address or phone number"
                                    }
                                })}
                                autoComplete="username"
                            />
                            {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>}
                        </div>

                        {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}

                        <button type="submit" className="bg-gray-100 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold w-full py-2 rounded">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgot_password;