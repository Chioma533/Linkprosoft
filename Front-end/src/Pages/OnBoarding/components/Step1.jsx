import React from 'react'
import Input from '../../../components/input/input'

const Step1 = () => {
    return (
        <section className='w-full'>
            <div className='w-full mx-auto py-10'>
                <div>
                    <p className='font-Inter text-[25px] md:text-4xl font-medium'>Let's get you <span className='text-blue-500'>started</span>,</p>
                    <p className='font-Inter text-2xl md:text-4xl font-medium'>Where are you <span className='text-blue-500'>located</span></p>
                </div>

                <form className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-10'>
                    <div className='font-Inter'>
                        <label
                            htmlFor='city'
                            className='text-[#1C2B33] md:text-xl font-bold'
                        >
                            City, State *
                        </label>
                        <input
                            type="text"
                            placeholder='Port Harcourt'
                            id='city'
                            name='city'
                            className='w-full border outline-none py-2 px-3 border-blue-500 rounded-md md:rounded-sm mt-1 placeholder-gray-400'
                        />
                        <Input
                            type="text"
                            placeholder="Port Harcourt"
                            id="city"
                            name="city"
                            label="City, State *"
                            onChange={(e) => setCity(e.target.value)}
                            variant='bordered'
                        />

                    </div>
                    <div className='font-Inter'>
                        <label
                            htmlFor='country'
                            className='text-[#1C2B33] md:text-xl font-bold'
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            placeholder='Nigeria'
                            id='country'
                            name='country'
                            className='w-full border outline-none py-2 px-3 border-blue-500 rounded-md md:rounded-sm mt-1 placeholder-gray-400'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Step1
