import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
                setLoginError('Reset password failed. Please try again later.');
            });
    };

    const password = watch('Password');

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="flex w-full lg:flex-row flex-col lg:space-x-4">
                {/* Left side with image */}
                <div className="lg:w-1/2 flex flex-col items-center lg:pt-5 p-4 bg-gray-200">
                    <h1 className='text-4xl font-bold'>Dash<span className='text-gray-800'>Stack</span></h1>
                    <div className="text-center mt-12">
                        <img className="h-80 mt-5" src={forgot_password_img} alt="Reset password" />
                    </div>
                </div>

                {/* Right side with form */}
                <div className="lg:w-1/2 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold lg:hidden mb-8">Dash<span className='text-gray-800'>Stack</span></h1>
                    <form className="bg-white p-6 shadow-lg rounded w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                        {/* Hidden Username Field */}
                        <input type="text" name="username" autoComplete="username" hidden />

                        <h2 className="text-2xl font-semibold mb-6">Reset Password</h2>

                        {/* Password Field */}
                        <label className="font-semibold">Password*</label>
                        <div className="flex items-center mb-3">
                            <input
                                type={passwordShown ? "text" : "password"}
                                className="form-control border border-gray-300 rounded-lg px-3 py-2 w-full"
                                placeholder="Enter Password"
                                autoComplete="new-password"
                                {...register("Password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                    maxLength: { value: 20, message: "Password cannot exceed 20 characters" },
                                })}
                            />
                            <button
                                type="button"
                                className="ml-2 text-gray-500"
                                onClick={() => setPasswordShown(!passwordShown)}
                                aria-label={passwordShown ? 'Hide password' : 'Show password'}
                            >
                                {passwordShown ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.Password && <p className="text-red-600 text-sm mt-1">{errors.Password.message}</p>}

                        {/* Confirm Password Field */}
                        <label className="font-semibold">Confirm Password*</label>
                        <div className="flex items-center mb-3">
                            <input
                                type={confirmPasswordShown ? "text" : "password"}
                                className="form-control border border-gray-300 rounded-lg px-3 py-2 w-full"
                                placeholder="Confirm Password"
                                autoComplete="new-password"
                                {...register("ConfirmPassword", {
                                    required: "Please confirm your password",
                                    validate: value => value === password || "Passwords do not match",
                                })}
                            />
                            <button
                                type="button"
                                className="ml-2 text-gray-500"
                                onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                                aria-label={confirmPasswordShown ? 'Hide confirm password' : 'Show confirm password'}
                            >
                                {confirmPasswordShown ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.ConfirmPassword && <p className="text-red-600 text-sm mt-1">{errors.ConfirmPassword.message}</p>}

                        {/* Submit Button */}
                        <button type="submit" className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-300 text-white font-medium mt-4">
                            Reset Password
                        </button>

                        {/* Back to Login Link */}
                        <div className="text-center mt-4">
                            <Link to="/" className="text-orange-500 text-sm">Back to Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
