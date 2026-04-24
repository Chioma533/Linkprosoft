
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const PopularSkills = () => {


  return (
    <>
      <section className='w-full py-5 lg:py-10 font-Inter'>
        <div className="w-[95%] lg:w-[85%] mx-auto">
          <h1 className="text-bluecolor font-Inter font-bold text-[30px]">Popular Skills Near You:</h1>

          <div className='w-[95%] mx-auto py-4 flex flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0 lg:gap-x-4'>
            <div className='w-[48%] lg:w-full mr-[4%] lg:mr-0 bg-greybg border-2 flex items-center justify-center py-14 lg:px-3'>
              <p className='text-center font-Inter font-bold text-[14px] lg:text-[18px] text-greycolor'>Programming & Tech</p>
            </div>
            <div className='w-[48%] lg:w-full bg-greybg border-2 flex items-center justify-center py-14 lg:px-3'>
              <p className='text-center font-Inter font-bold text-[14px] lg:text-[18px] text-greycolor'>Digital Marketing</p>
            </div>
            <div className='w-[48%] lg:w-full mr-[4%] lg:mr-0 bg-greybg border-2 flex items-center justify-center py-14 lg:px-3'>
              <p className='text-center font-Inter font-bold text-[14px] lg:text-[18px] text-greycolor'>Graphics Design</p>
            </div>
            <div className='w-[48%] lg:w-full bg-greybg border-2 flex items-center justify-center py-14 lg:px-3'>
              <p className='text-center font-Inter font-bold text-[14px] lg:text-[18px] text-greycolor'>Writing & Traslation</p>
            </div>
            <div className='w-full bg-greybg border-2 flex items-center justify-center py-14 lg:px-3'>
              <p className='text-center font-Inter font-bold text-[14px] lg:text-[18px] text-greycolor'>Admin & Customer Support</p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default PopularSkills
