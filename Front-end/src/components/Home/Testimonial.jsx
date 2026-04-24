
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Person6 from "../../assets/images/Person6.png";


const testimonials = [
  {
    id: 1,
    name: "John, D",
    position: "CEO, Tech Innovators Inc.",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, FutureTech",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 3,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 4,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 5,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 6,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 7,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
];

const WhatUsersSay = () => {
  const [numSlidesPerView, setNumSlidesPerView] = useState(null);
  const [numSpaceBetween, setNumSpaceBetween] = useState(null);

  useEffect(() => {
    function handleScreenChange() {
      if (window.innerWidth < 640) {
        setNumSlidesPerView(1.1);
        setNumSpaceBetween(15)
      } else if (window.innerWidth < 768) {
        setNumSlidesPerView(2.1);
        setNumSpaceBetween(15)
      } else if (window.innerWidth < 1024) {
        setNumSlidesPerView(2.5);
        setNumSpaceBetween(15)
      } else if (window.innerWidth < 1280) {
        setNumSlidesPerView(2.5)
        setNumSpaceBetween(15)
      } else {
        setNumSlidesPerView(3)
        setNumSpaceBetween(15)
      }
    }

    handleScreenChange();

    window.addEventListener("resize", handleScreenChange);

    return () => {
      window.removeEventListener('resize', handleScreenChange);
    }
  }, [])
  return (
    <>
      <section className="w-full">
        <div className="w-[95%] lg:w-[85%] mx-auto py-8">
          <h1 className="text-bluecolor pb-[10px] font-Inter font-bold text-[30px]">
            What Our Users Say
          </h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={numSlidesPerView}
            spaceBetween={numSpaceBetween}
            coverflowEffect={{
              rotate: -10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="w-[100%]">
                <div className="w-full mx-auto bg-orangecolor py-8 rounded-[20px]">
                  <div className="">
                    <div className="py-3 mb-5">
                      <p className="text-[16px] max-w-[80%] sm:max-w-[90%] mx-auto text-center font-[400] font-Inter">{testimonial.text}</p>
                    </div>

                    <div className="flex justify-center gap-2 items-center">
                      <div className="w-[20%]">
                        <img src={testimonial.image} alt="" />
                      </div>
                      <div>
                        <h2 className="font-bold">{testimonial.name}</h2>
                        <h4 className="font-semibold">{testimonial.position}</h4>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default WhatUsersSay;
