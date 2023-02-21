import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/global.css'

const createPassword = () => {
  return (
    <>
      <div className="gradient-background-top" />
      <div className="gradient-background-bottom" />
      <div className='flex items-center justify-center px-2'>
        <Link to="/">
          <div className="relative m-4 inline-flex cursor-pointer font-montserrat text-white items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500  hover:text-white focus:outline-none">
            <div className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-[#181818] rounded-md group-hover:bg-opacity-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </div>
          </div>
        </Link>
        <div className='flex-1'></div>
        <h1 className="text-lg font-montserrat font-semibold tracking-tight absolute text-stone-200 m-auto">
          New wallet
        </h1>
      </div>

      <div className='px-6'>
        <h1 className="text-3xl font-montserrat tracking-tight font-bold text-[#18bdff] pt-4">
          Set <br /> wallet <br /> password
        </h1>
        <p className="mt-4 text-base font-montserrat text-stone-200">
          Used to unlock your wallet once created.
        </p>
        <div className='pt-4'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Password</label>
          <div className="p-0.5 rounded-lg max-w-sm bg-gradient-to-br from-cyan-500 to-blue-500">
            <input type="password" className="px-3 py-2.5 bg-gray-700 text-white w-full rounded-lg focus:outline-none" id="name" placeholder="•••••••••" />
          </div>
        </div>
        <div className='pt-4'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
          <div className="p-0.5 rounded-lg max-w-sm bg-gradient-to-br from-purple-500 to-pink-500">
            <input type="password" className="px-3 py-2.5 bg-gray-700 text-white w-full rounded-lg focus:outline-none" id="name" placeholder="•••••••••" />
          </div>
        </div>
        <div className='pt-10'>
          <Link to="/">
            <div className="relative inline-flex cursor-pointer font-montserrat text-white items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500  hover:text-white focus:outline-none">
              <div className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-[#181818] rounded-md group-hover:bg-opacity-0 flex items-center justify-center">
                <h1 className='text-base font-semibold'>Next step</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pl-2 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}

export default createPassword