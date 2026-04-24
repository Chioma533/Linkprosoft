import { useState } from 'react'
import HeaderBanner from '../../components/HeaderBanner'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '../../contexts/User';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/input/input';

const SignUp = () => {
    const { signup, signUpUserAs } = useAuth();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [compName, setCompName] = useState('');
    const [userType, setUserType] = useState(signUpUserAs);
   
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signup({ firstName, lastName, email, password, compName, userType });
            console.log(response);

            if (response.success && response.user_type === 'employer') {
                toast.success(response.message);
                setTimeout(() => {
                    navigate('/user-dashboard')
                }, 2000);
            }

            if (response.success && response.user_type === 'professional') {
                toast.success(response.message);
                setTimeout(() => {
                    navigate('/employer-dashboard')
                }, 2000);
            }

            if (!response.success) {
                toast.warning(response.message);
            }
        } catch (error) {
            console.error(error.message);
        }

    }

    return (
        <AuthLayout>
            <h2 className='hidden lg:block text-[1.5rem] font-Inter font-[800] mb-3 text-center w-full md:mb-3 text-bluecolor'>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='md:flex gap-4 items-center'>
                    <div className='w-full'>
                        <Input
                            label="First Name"
                            type="firstName"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            label="Last Name"
                            type="lastName"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='md:flex gap-4 items-center'>
                    <div className='w-full'>
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='md:flex gap-4 items-center'>
                    <div className='w-full'>
                        <Input
                            label="Company Name"
                            type="text"
                            name="compName"
                            id="compName"
                            value={compName}
                            onChange={(e) => setCompName(e.target.value)}
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            label="User Type"
                            type="text"
                            name="userType"
                            id="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        />

                    </div>

                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center lg:gap-2 mt-5 lg:mt-1">
                    <div className='flex items-center gap-1 cursor-pointer '>
                        <input type="checkbox" name="" id="checkbox" className='cursor-pointer' />
                        <label htmlFor='checkbox' className='font-[400] font-Inter text-sm text-black cursor-pointer'>Keep me logged in.</label>
                    </div>

                    <div className="block lg:flex-col flex-nowrap justify-between items-center lg:items-start sm:gap-[1%] font-Inter my-2">
                        <p className='text-sm'>Already have an account? {" "}
                            <button onClick={() => navigate('/login')} className='text-blue-500 underline hover:text-blue-700'> Sign In</button>
                        </p>
                    </div>
                </div>

                <div className='w-full sm:w-[50%]lg:w-full mx-auto'>
                    <button type='submit' className="px-4 py-2 w-full bg-[#006FA3] text-base font-medium rounded-md hover:bg-[#0A66C2] transition mt-6 mb-3 text-[#ffffff]">Sign Up</button>
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

export default SignUp
