import React, { useState } from 'react'
import "../../style/Forgot_password.css"
import { useForm } from 'react-hook-form'
import forgot_password_img from '../../../public/images/forgot_password_img.png'
import { Link } from 'react-router-dom'

const Forgot_password = () => {
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
        })
            .then((res) => {
                if (res.data) {
                    console.log("user Login");
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
        <div className="m_Logn_bg">
            <div className="container-fluid">
                <div className="row">
                    {/* Login Img side */}
                    <div className="col-6 pt-5 ps-4 m_Login_col_bg">
                        <h1 className='m_bg-logotext-custom'>Dash<span className='text-dark'>Stack</span></h1>
                        <div className="text-center mt-5 pt-5">
                            <img className='m_forgot_password_img mt-5' src={forgot_password_img} alt="Loginimg" />
                        </div>
                    </div>
                    {/* Login Form side */}
                    <div className="col-lg-6 m_Login_col_bg_1 mx-auto d-flex flex-column align-items-center justify-content-center">
                        <h1 className='m_bg-logotext-custom m_Logo_text_media'>Dashp<span className='text-dark'>Stack</span></h1>

                        <div className="row justify-content-center">
                            <form className="bg-white p-5 shadow-sm rounded m_Login_From" onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="mb-4">Forget Password</h2>
                                <p className="m_text_sm">Enter your email and we’ll send you a otp to reset your password.</p>

                                <div className="form-group mb-4">
                                    <label className="fw-semibold">Email or Phone Number*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Email or Phone Number"
                                        {...register("Email", {
                                            required: "Email or phone number is required",
                                            pattern: {
                                                value: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|^\d{10,15}$)$/,
                                                message: "Enter a valid email address or phone number"
                                            }
                                        })}
                                    />
                                    {errors.Email && <p className="text-danger mt-1">{errors.Email.message}</p>}
                                </div>
                                {loginError && <p className="text-danger mt-1">{loginError}</p>}

                                <div className="text-center mb-3">
                                    <button type="submit" className="btn fw-medium Login_button w-100">Sign In</button>
                                </div>
                                <div className="text-center"><Link to={"/"} className="m_text_sm text-decoration-none m_bg-logotext-custom">Back to Login</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot_password
