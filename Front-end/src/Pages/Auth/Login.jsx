import React, { useState } from 'react'
import { FaLinkedin, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '../../contexts/User';
import AuthLayout from '../../components/layout/AuthLayout';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/input/input';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({})
  const { login } = useAuth();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formErrors = {}

    if (!email) {
      formErrors.email = "Please Enter Your Email Address"
    } else if (!validateEmail(email)) {
      formErrors.email = "Email is Invalid"
    }

    if (!password) {
      formErrors.password = "Please Enter Your Password"
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 seven characters"
    }
    setError(formErrors)

    if (Object.keys(formErrors).length === 0) {
      const res = await login({ email, password },);
      if (res.path === 'employer') {
        setTimeout(() => {
          navigate("/user-dashboard");
          setEmail("")
          setPassword("")
        }, 2000);
      } else if (res.path === 'professional') {
        setTimeout(() => {
          navigate('/employer-dashboard');
          setEmail("")
          setPassword("")
        }, 2000);
      }
    }

  }

  return (
    <AuthLayout>
      <h2 className='text-[1.6rem] font-Inter font-[800] leading-[40px mb-3 text-center lg:text-left block md:w-full md:mb-3 xl:max-w-[85%]'>Log in,
        start <span className='text-[#4093BA]'>advertising</span> and get <span className='text-[#4093BA]'>working</span>
      </h2>

      <form action="" onSubmit={handleSubmit} className=''>
        <div className='relative mb-3'>
          <Input
            label="Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setError({ ...error, email: null })}
          />
          <p className='text-xs text-red-600'>{error.email}</p>
        </div>

        <div className='relative'>
              <Input 
                label="Password"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setError({ ...error, password: null })}
              />
          <p className='text-xs text-red-600'>{error.password}</p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className='flex items-center gap-1 cursor-pointer'>
            <input type="checkbox" name="" id="checkbox" className='cursor-pointer' />
            <label htmlFor='checkbox' className='font-[400] font-Inter text-sm text-black cursor-pointer'>Keep me logged in.</label>
          </div>

          <Link to='' className='text-blue-500 underline hover:text-blue-700 active:text-blue-800 text-sm'>Forgotten Password?</Link>
        </div>

        <div className='w-full'>
          <button type='submit' className="px-4 py-2 w-full bg-gradient-to-r from-[#006FA3] to-[#4DC6FF] text-base font-medium rounded-md hover:bg-[#0A66C2] transition mt-6 mb-3 text-[#ffffff]">Sign In</button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="bg-white shadow-xl drop-shadow-xl w-max rounded-full px-2 py-2 cursor-pointer">
            <FaLinkedin className='text-2xl text-bluecolor' />
          </div>
          <div className="bg-white shadow-xl drop-shadow-xl w-max rounded-full px-2 py-2 cursor-pointer">
            <FcGoogle className='text-2xl' />
          </div>
        </div>

      </form>
      <ToastContainer />
    </AuthLayout>
  )
}

export default Login