import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import forgot_password_img from '../../../public/images/forgot_password_img.png';
import { ManagerResetPassword } from '../services/Api/api';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm();
    
    const onSubmit = (formData) => {
        setLoading(true);
        const Emails = localStorage.getItem('Email');
        const Email = Emails.replace(/^"(.*)"$/, '$1');
        const data = ({...formData,Email})
        console.log(data);
        ManagerResetPassword(data, setLoginError, setLoading, reset, navigate)
    };
    
    const password = watch('Password');

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/Login_bg_img.png')" }}>
            <div className="flex w-full h-full">
                {/* Login Image Side */}
                <div className="hidden lg:flex w-1/2 bg-gray-100 flex-col justify-center">
                    <h1 className="text-5xl font-bold text-orange-600 ms-16">Dash<span className="text-black">Stack</span></h1>
                    <div className="flex items-center justify-center">
                        <img className="mt-16 h-72" src={forgot_password_img} alt="Login" />
                    </div>
                </div>
                {/* Login Form Side */}
                <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-8 py-12 lg:py-0">
                    <h1 className="text-5xl font-bold text-orange-600 lg:hidden max-[430px]:text-4xl">Dash<span className="text-black">Stack</span></h1>
                    <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                        <h1 className="text-4xl font-bold lg:hidden mb-8 max-[430px]:text-2xl">Dash<span className='text-gray-800'>Stack</span></h1>
                        <form className="bg-white w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                            {/* Hidden Username Field */}
                            <input type="text" name="username" autoComplete="username" hidden />

                            <h2 className="text-2xl font-semibold mb-6 max-[430px]:text-xl">Reset Password</h2>

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
                            {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}

                            {/* Submit Button */}
                            <button type="submit" className={`bg-gray-100 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold w-full py-2 rounded ${loading && 'opacity-50 cursor-not-allowed'}`} disabled={loading}>
                                Reset Password{loading ? 'Loading...' : 'Reset Password'}
                            </button>

                            {/* Back to Login Link */}
                            {/* <div className="text-center mt-4">
                                <Link to="/" className="text-orange-500 text-sm">Back to Login</Link>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
