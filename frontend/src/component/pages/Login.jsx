import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loginimg from '../../../public/images/m_Loginimg.png';
// import { UserDataLogin } from '../services/Api/api';
import axios from 'axios';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginError, setLoginError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    // User Login 
    const onSubmit = async (data) => {
        console.log(data);
        
        UserDataLogin(data,setLoginError)
    };

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/Login_bg_img.png')" }}>
            <div className="flex w-full h-full">
                {/* Login Image Side */}
                <div className="hidden lg:flex w-1/2 bg-gray-100 flex-col justify-center">
                    <h1 className="text-5xl font-bold text-orange-600 ms-16">Dash<span className="text-black">Stack</span></h1>
                    <div className="flex items-center justify-center"><img className="mt-16 h-72" src={Loginimg} alt="Login" /></div>
                </div>
                {/* Login Form Side */}
                <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-8 py-12 lg:py-0">
                    <h1 className="text-5xl font-bold text-orange-600 lg:hidden">Dash<span className="text-black">Stack</span></h1>
                    <form className="bg-white w-full max-w-md shadow-lg rounded-lg p-8 mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

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

                        <label className="font-semibold">Password*</label>
                        <div className="flex items-center mb-4">
                            <input
                                type={passwordShown ? "text" : "password"}
                                className="border rounded w-full py-2 px-3 mt-1"
                                placeholder="Enter Password"
                                {...register("Password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 4,
                                        message: "Password must be at least 6 characters long"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Password cannot exceed 20 characters"
                                    }
                                })}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="text-gray-500 ml-2"
                                onClick={() => setPasswordShown(!passwordShown)}
                            >
                                {passwordShown ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>}
                        {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}

                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    {...register("rememberMe")}
                                    autoComplete="off"
                                />
                                Remember Me
                            </label>
                            <Link to="/forgot_password" className="text-orange-600 text-sm">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="bg-gray-100 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold w-full py-2 rounded">
                            Sign In
                        </button>

                        <p className="text-center text-sm mt-4">Don’t have an account? <Link to="/registration" className="text-orange-600 font-semibold">Registration</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
