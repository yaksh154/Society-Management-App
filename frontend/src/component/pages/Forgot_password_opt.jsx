import React, { useState, useEffect } from 'react';
import "../../style/Forgot_password.css"
import forgot_password_img from '../../../public/images/forgot_password_img.png'

const Forgot_password = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(30);
    const [resendAvailable, setResendAvailable] = useState(false);

    // Handle input changes
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
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
                        <div className="bg-white p-5 shadow-sm rounded m_Login_From">
                            <div className="row justify-content-center">
                                <h3 className=" mb-4">Enter OTP</h3>
                                <p className="m_text_sm">Please enter the 6-digit code sent to your phone number.</p>

                                {/* OTP Input */}
                                <form onSubmit={handleSubmit}>
                                    <div className="otp-box m_otp_container mb-3">
                                        {otp.map((data, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                className="m_otp_input m_form_control"
                                                maxLength="1"
                                                value={data}
                                                onChange={(e) => handleChange(e.target, index)}
                                                onFocus={(e) => e.target.select()}
                                            />
                                        ))}
                                    </div>

                                    {/* Timer and Resend OTP */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="otp-timer">
                                            <i className="bi bi-clock"></i> <span>{timeLeft > 0 ? `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft} sec` : "Time's up!"}</span>
                                        </div>
                                        <a
                                            type="button"
                                            className="bg-logotext-custom text_sm_media text-decoration-none "
                                            onClick={resendOTP}
                                            disabled={!resendAvailable}
                                        >
                                            Resend OTP
                                        </a>
                                    </div>

                                    {/* Verify Button */}
                                    <div className="text-center">
                                        <button type="submit" className="m_Login_button btn w-100">Verify</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot_password