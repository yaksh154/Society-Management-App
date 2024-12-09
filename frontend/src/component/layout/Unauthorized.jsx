import React from 'react'
import Stars from '../../../public/images/Stars.jpg'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center ">
                <div className="relative">
                    <h1
                        className="text-[13rem] font-[900] bg-clip-text text-transparent max-[768px]:text-[10rem] max-[540px]:text-[8rem] max-[403px]:text-[6rem]"
                        style={{
                            backgroundImage: `url(${Stars})`,
                            backgroundSize: "cannot",
                            backgroundPosition: "center",
                        }}
                    >
                        Oops!
                    </h1>
                </div>
                <p className='text-xl font-bold mb-5'>404 - PAGE NOT FOUND</p>
                <p className='text-center mb-5 max-[403px]:text-sm'>The page you are looking for might have been removed <br /> hed its name changed or is temporarily unavailable.</p>
                <Link to={"/"} className='px-5 py-2 max-[426px]:px-4 max-[426px]:py-[6px] bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200'>
                    GO TO HOMEPAGE
                </Link>
            </div>
        </div>
    )
}

export default Unauthorized
