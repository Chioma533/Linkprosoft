import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import { FiLoader } from "react-icons/fi";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '../../contexts/User';
import AuthLayout from '../../components/layout/AuthLayout';
import { validateEmail as isValidEmail } from '../../utils/helper';
import Input from '../../components/input/input';

const Login = () => {
  // const { login } = useAuth();
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })
  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    success: false
  })

  // validation
  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required"
    if (!isValidEmail(formData.email)) return "Please enter a valid email address"
    return ""
  }

  const validatePassword = (password) => {
    if (!password) return "Password required"
    return ""
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // clear field error when user starts typing
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
        generalError: ""
      }));

    };

  }

  const validateForm = () => {
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };


  const handleLogIn = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      loading: true,
      errors: {}
    }));

    try {
      const res = await login(formData);

      // handle navigation here if needed

    } catch (error) {
      setFormState(prev => ({
        ...prev,
        loading: false,
        errors: {
          submit:
            error.response?.data?.message ||
            "Login failed. Please check your credentials"
        }
      }));
    }
  };

  return (
    <AuthLayout>
      <h2 className='text-[1.6rem] font-Inter font-[800] leading-[40px mb-3 text-center lg:text-left block md:w-full md:mb-3 xl:max-w-[85%]'>Log in,
        start <span className='text-[#4093BA]'>advertising</span> and get <span className='text-[#4093BA]'>working</span>
      </h2>

      <form onSubmit={handleLogIn} >
        <div className='relative mb-3'>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant='filled'
          />
          {formState.errors.email && (
            <p className="text-red-500 text-xs pb-2.5">{formState.errors.email}</p>
          )}
        </div>

        <div className='relative'>
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            variant='filled'
          />
          {formState.errors.password && (
            <p className="text-red-500 text-xs pb-2.5">{formState.errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className='flex items-center gap-1 cursor-pointer'>
            <input
              type="checkbox"
              name="rememberMe"
              id="checkbox"
              className='cursor-pointer'
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <label htmlFor='checkbox' className='font-[400] font-Inter text-sm text-black cursor-pointer'>Keep me logged in.</label>
          </div>

          <Link to='' className='text-blue-500 underline hover:text-blue-700 active:text-blue-800 text-sm'>Forgotten Password?</Link>
        </div>

        {/* submit Error */}
        {formState.errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-sm flex items-center">
              <FiAlertCircle className="text-red-500 w-4 mr-2 h-4" />
              {formState.errors.submit}
            </p>
          </div>
        )}

        <div className='w-full'>
          <button
            type="submit"
            disabled={formState.loading}
            className="px-4 py-2 w-full bg-gradient-to-r from-[#006FA3] to-[#4DC6FF] text-base font-medium rounded-md mt-6 mb-3 text-white flex items-center justify-center gap-2"
          >
            {formState.loading ? (
              <>
                <FiLoader className="w-5 h-5 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
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