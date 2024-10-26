import React, { useState, useEffect } from 'react';
import forgot_password_img from '../../../public/images/forgot_password_img.png';

const Forgot_password = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(30);
    const [resendAvailable, setResendAvailable] = useState(false);

    // Handle input changes
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
        setOtp(newOtp);

        // Move to the next input field if current input is filled
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    // Handle backspace to erase the OTP
    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index]) {
            if (index > 0) {
                const prevInput = document.getElementById(`otp-input-${index - 1}`);
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
    };

    // Handle timer countdown
    useEffect(() => {
        if (timeLeft > 0) {
            const intervalId = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        } else {
            setResendAvailable(true); // Enable resend after timer hits 0
        }
    }, [timeLeft]);

    // Handle resend OTP
    const resendOTP = () => {
        setTimeLeft(30);
        setResendAvailable(false);
        setOtp(new Array(6).fill("")); // Clear OTP inputs
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOTP = otp.join("");
        console.log("Entered OTP: ", enteredOTP);
    };

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/Login_bg_img.png')" }}>
            <div className="flex w-full h-full">
                {/* Login Image Side */}
                <div className="hidden lg:flex w-1/2 bg-gray-100 flex-col justify-center">
                    <h1 className="text-5xl font-bold text-orange-600 ms-16">Dash<span className="text-black">Stack</span></h1>
                    <div className="flex items-center justify-center"><img className="mt-16 h-72" src={forgot_password_img} alt="Login" /></div>
                </div>
                {/* Login Form Side */}
                <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-8 py-12 lg:py-0">
                    <h1 className="text-5xl font-bold text-orange-600 lg:hidden">Dash<span className="text-black">Stack</span></h1>
                    <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                    <h3 className="text-2xl mb-4">Enter OTP</h3>
                    <p className="text-gray-600 mb-6">Please enter the 6-digit code sent to your phone number.</p>

                    {/* OTP Input */}
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center mb-4">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`} // Add an ID for each input
                                    type="text"
                                    className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    maxLength="1"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)} // Handle key down for backspace
                                    onFocus={(e) => e.target.select()}
                                />
                            ))}
                        </div>

                        {/* Timer and Resend OTP */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-gray-500">
                                <i className="bi bi-clock"></i> 
                                <span>{timeLeft > 0 ? `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft} sec` : "Time's up!"}</span>
                            </div>
                            <button
                                type="button"
                                className={`text-sm text-blue-500 ${!resendAvailable ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={resendOTP}
                                disabled={!resendAvailable}
                            >
                                Resend OTP
                            </button>
                        </div>

                        {/* Verify Button */}
                        <div className="text-center">
                            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-2 rounded hover:bg-gradient-to-l transition duration-300">
                                Verify
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot_password;
