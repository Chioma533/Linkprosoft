import React from 'react'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Input = ({
    label,
    value,
    onChange,
    type,
    name,
    id,
    onFocus
}) => {
    const [showPassword, setShowPassword] = useState(false)


    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]">
                    {label}
                </label>
            )}
            <div className="flex items-center bg-[#f6f6f6] rounded-md">
                <input
                    id={id}
                    name={name}
                    type={type === "password" ? (showPassword ? "text" : "password") : type}                    value={value}
                    onChange={(e) => onChange(e)}
                    onFocus={onFocus}
                    className="w-full  text-lg lg:text-base px-2 py-1.5 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]"
                />

                {type === "password" && (
                    <div className="flex items-center pr-2 text-center justify-center py-2 ">
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className='text-base cursor-pointer'
                                onClick={() => toggleShowPassword()} />
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className='text-base cursor-pointer '
                                onClick={() => toggleShowPassword()}
                            />
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Input