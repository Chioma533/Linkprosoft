import React from 'react'
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
const Newsletter = () => {
  return (
    <>

      <section className='w-full bg-[#267BB4] flex items-center'>
        <div className="w-[95%] lg:w-[60%] mx-auto flex flex-col items-center py-6">
          <div className=''>
            <IoIosMail className='text-white text-7xl sm:text-5xl ' />
          </div>

          <div>
            <h2 className='text-center font-Inter text-xl mb-3 text-white leading-normal font-bold'>Subscribe Newsletter</h2>
          </div>

          <div className='w-full sm:w-[65%] mx-auto flex justify-between items-center bg-white rounded-full'>
            <input type="email" className='focus:border-transparent outline-none w-[70%] py-2 px-5 bg-transparent' placeholder='Enter your email' />
            <Link className='w-[30%] text-center text-white font-bold font-Inter text-base bg-[#03AEFF] py-2 rounded-r-full'>Subscribe</Link>
          </div>

        </div>
      </section>
    </>
  )
}

export default Newsletter