import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Input = ({
    label,
    value,
    onChange,
    type = "text",
    name,
    id,
    placeholder,
    onFocus,
    variant = "bordered",
    options = [], 
}) => {

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    // Base style
    const baseStyle =
        "w-full px-3 py-2 text-base rounded-md outline-none transition";

    // Variants
    const variants = {
        bordered:
            "border border-blue-500 bg-white focus:ring-2 focus:ring-[#0A66C2]",

        filled:
            "bg-[#f6f6f6] border-none focus:ring-2 focus:ring-[#0A66C2]",

        minimal:
            "border border-blue-500 bg-transparent rounded-none focus:ring-0",
    };

    return (
        <div className="w-full">

            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]"
                >
                    {label}
                </label>
            )}

            {/* SELECT FIELD */}
            {type === "select" ? (
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    className={`${baseStyle} ${variants[variant]}`}
                >
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : (

                /* INPUT FIELD */
                <div className="flex items-center bg-[#f6f6f6] rounded-md">

                    <input
                        id={id}
                        name={name}
                        type={
                            type === "password"
                                ? (showPassword ? "text" : "password")
                                : type
                        }
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        placeholder={placeholder || ""}
                        className={`${baseStyle} ${variants[variant]}`}
                    />

                    {/* PASSWORD TOGGLE */}
                    {type === "password" && (
                        <div className="flex items-center pr-2 justify-center">
                            {showPassword ? (
                                <FaRegEye
                                    size={20}
                                    className='cursor-pointer'
                                    onClick={toggleShowPassword}
                                />
                            ) : (
                                <FaRegEyeSlash
                                    size={20}
                                    className='cursor-pointer'
                                    onClick={toggleShowPassword}
                                />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Input