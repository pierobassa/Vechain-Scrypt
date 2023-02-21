import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/global.css'

const noWallet = () => {
  return (
    <>
      <div className="gradient-background-top" />
      <div className="gradient-background-bottom" />
      <div className="px-6 mt-7">
        <div className="flex items-center justify-start">
          <img src="vechain_logo.png" className="w-24 drop-shadow-md" />
        </div>
        <div className="text-left mt-7">
          <h1 className="text-3xl font-montserrat font-semibold tracking-tight text-stone-500">
            Welcome to
          </h1>
          <h1 className="mt-2 text-5xl uppercase font-montserrat tracking-wide font-bold text-[#18bdff]">
            Scrypt
          </h1>
          <p className="mt-4 text-lg font-montserrat text-stone-200">
            Bringing the VechainTHOR blockchain to your fingertips.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-14">
            <Link to="/create_password">
              <div className="h-36 w-32 relative inline-flex cursor-pointer font-montserrat text-white items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:outline-none">
                <div className="relative h-[100%] w-[100%] px-5 py-2.5 transition-all ease-in duration-75 bg-[#181818] rounded-md group-hover:bg-opacity-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <h1 className="mt-6 uppercase font-bold">Create new</h1>
                </div>
              </div>
            </Link>
            <div className="h-36 w-32 relative inline-flex cursor-pointer font-montserrat text-white items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500  hover:text-white focus:outline-none">
              <div className="relative h-[100%] w-[100%] px-5 py-2.5 transition-all ease-in duration-75 bg-[#181818] rounded-md group-hover:bg-opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>

                <h1 className="mt-6 uppercase font-bold">Import wallet</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default noWallet