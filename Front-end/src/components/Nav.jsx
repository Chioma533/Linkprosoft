import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../JobDetails/assets/images/profile.png'

const Nav = () => {
  return (
    <>
      <header className='w-[100%] select-none  border-b-[#006FA3] border-b-4'>
        <nav className='flex align-center w-[90%] justify-between m-auto pt-9 pb-4' >
          <div className="text-3xl font-bold text-bluecolor font-Inter  cursor-pointer"   >
            <Link to='/'>Linkprosoft</Link>
          </div>


          <div className='flex  gap-4 align-center '>
            <a href="/" className='bg-[#006FA3] font-Inter text-white justify py-2 px-5 rounded-md '>Sign In</a>
            <div className=' h-[40px] flex rounded-full align-center justify-center '>
              <img src={profile} alt="" className='rounded-full w-[100%]' />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav