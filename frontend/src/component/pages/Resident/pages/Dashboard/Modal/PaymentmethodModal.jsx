import React, { useState } from 'react'
import PaymentCardNumber from './PaymentCardNumber';

const PaymentmethodModal = ({close1,close2}) => {
    const [selectedMethod, setSelectedMethod] = useState("");
    const [CardNum, setCardNum] = useState(false)
    const closeModals = () =>{
        close2(false)
    }

    const handlePayment = () => {
        if (selectedMethod) {
            setCardNum(true)
        } else {
            alert("Please select a payment method.");
        }
    };
    const CloseCardNum = () =>{
        setCardNum(false)
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
            <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full mx-auto relative z-60">
                <h2 className="text-xl font-semibold">Detail of the Per Person</h2>
                <div className="space-y-3">
                    <div
                        onClick={() => setSelectedMethod("Master Card")}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer ${selectedMethod === "Master Card"
                            ? "border-orange-500 bg-orange-100"
                            : "border-gray-300"
                            }`}
                    >
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Master Card"
                            className="w-8 h-8 mr-3"
                        />
                        <span className="text-sm font-medium">Master Card</span>
                    </div>
                    <div
                        onClick={() => setSelectedMethod("Visa Card")}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer ${selectedMethod === "Visa Card"
                            ? "border-orange-500 bg-orange-100"
                            : "border-gray-300"
                            }`}
                    >
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Visa Card"
                            className="w-8 h-8 mr-3"
                        />
                        <span className="text-sm font-medium">Visa Card</span>
                    </div>
                    <div
                        onClick={() => setSelectedMethod("Cash Payment")}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer ${selectedMethod === "Cash Payment"
                            ? "border-orange-500 bg-orange-100"
                            : "border-gray-300"
                            }`}
                    >
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Cash Payment"
                            className="w-8 h-8 mr-3"
                        />
                        <span className="text-sm font-medium">Cash Payment</span>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={closeModals}
                        className="bg-white border rounded-lg w-1/2 font-semibold text-gray-700 py-2 mr-2 hover:bg-[#f0f5fb]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handlePayment}
                        className="bg-gray-100 w-1/2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold py-1 rounded text-sm"
                    >
                        Pay Now
                    </button>
                </div>
                {CardNum && (<PaymentCardNumber close1={close1} close2={close2} close3={CloseCardNum}/>)}
            </div>
        </div>
    )
}

export default PaymentmethodModal
