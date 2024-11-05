import React from 'react'

const Home_totle_card = (props) => {
    return (
        <div className="flex lg:items-center md:items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 max-w-sm max-[425px]:flex-col-reverse max-[425px]:content-start">
            <div>
                <p className="text-gray-500 text-sm font-medium">{props.total_title}</p>
                <p className="text-2xl font-bold text-gray-800">₹ {props.total_price}</p>
            </div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-md ${props.totle_icon_bg_back}`}>
                <div className={`${props.totle_color} ${props.totle_icon_bg} text-xl rounded-md flex items-center justify-center w-6 h-6 font-bold`}>{props.totle_simbol}</div>
            </div>
        </div>
    )
}

export default Home_totle_card
