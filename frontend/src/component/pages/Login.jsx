import React, { useState } from 'react'
import "../../style/Login.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Loginimg from '../../../public/images/m_Loginimg.png'

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginError, setLoginError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted data:', data);

        axios.post('https://task-4-ten-khaki.vercel.app/user/login', {
            Email: data.Email,
            Password: data.Password,
        })
            .then((res) => {
                if (res.data) {
                    console.log("user Login");
                } else {
                    setLoginError('Incorrect email/phone or password');
                }
            })
            .catch((error) => {
                console.error('Login error:', error);
                setLoginError('Login failed. Please try again later.');
            });
    };

    return (
        <div className="m_Logn_bg">
            <div className="container-fluid">
                <div className="row">
                    {/* Login Img side */}
                    <div className="col-6 pt-5 ps-4 m_Login_col_bg">
                        <h1 className='m_bg-logotext-custom'>Dash<span className='text-dark'>Stack</span></h1>
                        <div className="text-center mt-5 pt-5">
                            <img className='m_Loginimg mt-5' src={Loginimg} alt="Loginimg" />
                        </div>
                    </div>
                    {/* Login Form side */}
                    <div className="col-lg-6 m_Login_col_bg_1 mx-auto d-flex flex-column align-items-center justify-content-center">
                        <h1 className='m_bg-logotext-custom m_Logo_text_media'>Dash<span className='text-dark'>Stack</span></h1>
                        <form className="bg-white p-5 shadow-sm rounded m_Login_From" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="mb-4">Login</h2>

                            <div className="form-group mb-3">
                                <label className="fw-semibold">Email or Phone Number*</label>
                                <input
                                    type="text"
                                    className="form-control"
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
                                {errors.Email && <p className="text-danger mt-1">{errors.Email.message}</p>}
                            </div>

                            <label className="fw-semibold">Password*</label>
                            <div className="input-group mb-3">
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter Password"
                                    {...register("Password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
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
                                    className="btn btn-outline-secondary"
                                    onClick={() => setPasswordShown(!passwordShown)}>
                                    {passwordShown ? '🙈' : '👁️'}
                                </button>
                            </div>
                            {errors.Password && <p className="text-danger mt-1">{errors.Password.message}</p>}
                            {loginError && <p className="text-danger mt-1">{loginError}</p>}

                            <div className="d-flex align-items-center justify-content-between">
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                        {...register("rememberMe")}
                                        autoComplete="off"
                                    />
                                    <label className="form-check-label text_sm_media" htmlFor="rememberMe">Remember Me</label>
                                </div>
                                <div className="mb-4 text-end">
                                    <Link to="/forgot_password" className="text-decoration-none m_bg-logotext-custom text_sm_media">Forgot Password?</Link>
                                </div>
                            </div>

                            <div className="text-center mb-3">
                                <button type="submit" className="btn fw-medium Login_button w-100">Sign In</button>
                            </div>
                            <div className="text-center">
                                <p>Don’t have an account? <Link to="/Registration" className="text-decoration-none m_bg-logotext-custom">Registration</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
