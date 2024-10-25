import React, { useState } from 'react';
import "../../style/Forgot_password.css";
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios
import forgot_password_img from '../../../public/images/forgot_password_img.png';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [loginError, setLoginError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted data:', data);

        axios.post('https://task-4-ten-khaki.vercel.app/user/reset-password', {
            password: data.Password,
        })
            .then((res) => {
                if (res.data) {
                    console.log("Password Reset Successful");
                } else {
                    setLoginError('Reset password failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Password reset error:', error);
                setLoginError('Reset password failed. Please try again later.');
            });
    };

    // Watching password to match with confirm password
    const password = watch('Password');

    return (
        <div className="m_Logn_bg">
            <div className="container-fluid">
                <div className="row">
                    {/* Left side with image */}
                    <div className="col-6 pt-5 ps-4 m_Login_col_bg">
                        <h1 className='m_bg-logotext-custom'>Dash<span className='text-dark'>Stack</span></h1>
                        <div className="text-center mt-5 pt-5">
                            <img className='m_forgot_password_img mt-5' src={forgot_password_img} alt="Reset password" />
                        </div>
                    </div>

                    {/* Right side with form */}
                    <div className="col-lg-6 m_Login_col_bg_1 mx-auto d-flex flex-column align-items-center justify-content-center">
                        <h1 className='m_bg-logotext-custom m_Logo_text_media'>Dash<span className='text-dark'>Stack</span></h1>

                        <div className="row justify-content-center">
                            <form className="bg-white p-5 shadow-sm rounded m_Login_From" onSubmit={handleSubmit(onSubmit)}>
                                {/* Hidden Username Field for Accessibility */}
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete="username"
                                    style={{ display: 'none' }}
                                />

                                <h2 className="mb-4">Reset Password</h2>

                                {/* Password Field */}
                                <label className="fw-semibold">Password*</label>
                                <div className="input-group mb-3">
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Enter Password"
                                        autoComplete="new-password"
                                        {...register("Password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters long",
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Password cannot exceed 20 characters",
                                            },
                                        })}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setPasswordShown(!passwordShown)}
                                        aria-label={passwordShown ? 'Hide password' : 'Show password'}
                                    >
                                        {passwordShown ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.Password && <p className="text-danger mt-1">{errors.Password.message}</p>}

                                {/* Confirm Password Field */}
                                <label className="fw-semibold">Confirm Password*</label>
                                <div className="input-group mb-3">
                                    <input
                                        type={confirmPasswordShown ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        autoComplete="new-password"
                                        {...register("ConfirmPassword", {
                                            required: "Please confirm your password",
                                            validate: value => value === password || "Passwords do not match",
                                        })}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                                        aria-label={confirmPasswordShown ? 'Hide confirm password' : 'Show confirm password'}
                                    >
                                        {confirmPasswordShown ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.ConfirmPassword && <p className="text-danger mt-1">{errors.ConfirmPassword.message}</p>}

                                {/* Submit Button */}
                                <div className="text-center mb-3">
                                    <button type="submit" className="btn fw-medium Login_button w-100">Reset Password</button>
                                </div>

                                {/* Back to Login Link */}
                                <div className="text-center">
                                    <Link to="/" className="m_text_sm text-decoration-none m_bg-logotext-custom">Back to Login</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
