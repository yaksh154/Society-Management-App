import React from 'react'

const Home_totle_card = (props) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 max-w-sm">
            <div>
                <p className="text-gray-500 text-sm font-medium">{props.total_title}</p>
                <p className="text-2xl font-bold text-gray-800">₹ {props.total_price}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-orange-100">
                <div className="text-orange-600 text-xl font-bold">≡</div>
            </div>
        </div>
    )
}

export default Home_totle_card
