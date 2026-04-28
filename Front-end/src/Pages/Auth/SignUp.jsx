import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiLoader } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '../../contexts/User';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/input/input';
import { validateEmail as isValidEmail } from '../../utils/helper';

const SignUp = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        compName: "",
        userType: "",
        rememberMe: false
    });

    const [formState, setFormState] = useState({
        loading: false,
        errors: {}
    });

    // 🔹 handle input
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        // clear error
        if (formState.errors[name]) {
            setFormState(prev => ({
                ...prev,
                errors: { ...prev.errors, [name]: "" }
            }));
        }
    };

    // 🔹 validation
    const validateForm = () => {
        let errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            errors.lastName = "Last name is required";
        }

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
        if (!formData.userType) {
            errors.userType = "Please select a user type";
        }

        return errors;
    };

    // 🔹 submit
    const handleSignUp = async (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormState(prev => ({ ...prev, errors }));
            return;
        }

        setFormState({ loading: true, errors: {} });

        try {
            const res = await signup(formData);

            toast.success(res.message || "Account created successfully");

            setTimeout(() => {
                navigate('/login');
            }, 1500);

        } catch (error) {
            setFormState({
                loading: false,
                errors: {
                    submit:
                        error.response?.data?.message ||
                        "Signup failed. Try again."
                }
            });
        }
    };

    return (
        <AuthLayout>
            <h2 className='text-[1.5rem] font-bold mb-4 text-center text-bluecolor'>
                Sign Up
            </h2>

            <form onSubmit={handleSignUp}>

                {/* Names */}
                <div className='md:flex gap-4'>
                    <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={formState.errors.firstName}
                        variant='filled'
                    />

                    <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        error={formState.errors.lastName}
                        variant='filled'
                    />
                </div>

                {/* Email + Password */}
                <div className='md:flex gap-4 mt-3'>
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={formState.errors.email}
                        variant='filled'
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        error={formState.errors.password}
                        variant='filled'
                    />
                </div>
                <div className="md:flex gap-4 mt-3">
                    {/* Company */}
                    <Input
                        label="Company Name"
                        name="compName"
                        value={formData.compName}
                        onChange={handleInputChange}
                        variant='filled'
                    />

                    <Input
                        label="User Type"
                        type="select"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        variant="filled"
                        options={[
                            { label: "Select user type", value: "" },
                            { label: "Job Seeker (Professional)", value: "professional" },
                            { label: "Employer", value: "employer" },
                        ]}
                    />

                </div>

                {/* Submit error */}
                {formState.errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                        <p className="text-red-700 text-sm flex items-center">
                            <FiAlertCircle className="mr-2" />
                            {formState.errors.submit}
                        </p>
                    </div>
                )}

                {/* Button */}
                <button
                    type="submit"
                    disabled={formState.loading}
                    className="w-full mt-5 py-2 rounded-md text-white bg-[#006FA3] flex items-center justify-center gap-2"
                >
                    {formState.loading ? (
                        <>
                            <FiLoader className="animate-spin" />
                            Creating account...
                        </>
                    ) : (
                        "Sign Up"
                    )}
                </button>

                {/* Social */}
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
    );
};

export default SignUp;