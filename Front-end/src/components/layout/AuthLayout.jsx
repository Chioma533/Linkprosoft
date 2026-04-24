import React from 'react'
import HeaderBanner from '../HeaderBanner'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import { useLocation } from 'react-router-dom'


const AuthLayout = ({ children}) => {
  const location = useLocation()

  // Auto-detect mode from URL
  const mode = location.pathname === "/login" ? "login" : "signup";  return (
    <>
      <HeaderBanner mode={mode} />

      <section className="w-full lg:bg-[#F6F6F6] min-h-[90vh] font-Inter lg:flex lg:items-center ">
        <div className="w-[85%] lg:w-[80%] mx-auto flex justify-between items-center pt-10 pb-5 lg:py-5">
          <div className='w-[50%] lg:w-[40%] mx-auto hidden lg:block px-4'>
            <img src={OurLogo} alt="" className='w-full mx-auto' />
            <p className='w-full opacity-50 text-center mt-3'>Linkprosoft bridging the gap between employers and employees</p>
          </div>

          <div className='w-full lg:w-[55%] xl:w-[50%] mx-auto bg-transparent lg:bg-white rounded-none lg:rounded-lg shadow-none lg:shadow-lg lg:p-3 lg:px-6 lg:py-6'>
                {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default AuthLayout
