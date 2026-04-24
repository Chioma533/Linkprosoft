import React, { useState, useEffect } from 'react';
import Person1 from "../../assets/images/Person1.png";
import Person2 from "../../assets/images/Person2.png";
import Person3 from "../../assets/images/Person3.png";
import Person4 from "../../assets/images/Person4.png";
import Search from "../../assets/images/search.svg";
import Filter from "../../assets/images/filter.svg";
import Trust from "../../assets/images/Trust.svg";

const phrases = [
  " Skilled Professionals.",
  " Experienced Experts.",
  " Trusted Specialists.",
  " Qualified Individuals."
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='w-full py-5 lg:py-10'>
        <div className="lg:w-[85%] xl:w-[80%] mx-auto flex flex-col md:flex-row py-3 md:py-5 lg:py-2">
          <div className='w-full md:py-5'>
            <div className='w-full px-4 sm:flex sm:flex-col sm:items-center md:py-5'>
              <div className='w-full flex items-center flex-nowrap gap-2'>
                <div className="w-full sm:w-[80%] flex justify-between sm:justify-around items-center sm:gap-[2%] px-4 sm:px-6 py-1 border border-bluecolor rounded-tl-[35px] rounded-br-[35px]">
                  <img src={Search} alt="" className="hidden sm:block mr-[2%]" width={20} />
                  <input
                    className="focus:border-transparent outline-none bg-transparent font-Inter w-full text-sm md:text-xl lg:text-lg py-3 md:py-1"
                    type="text"
                    placeholder="What skills are you looking for?"
                  />
                  <img src={Filter} className='pr-2' alt="" width={25} />
                </div>
                <a className="bg-bluecolor text-white text-sm text-center font-Inter w-auto py-4 px-4 md:py-3 md:px-5 rounded-tl-[40px] rounded-br-[40px]"
                  href="#">Search</a>
              </div>


              <div className="w-full pt-6">
                <h1 className="max-w-full font-Inter text-pretty sm:text-left text-5xl md:text-4xl lg:text-[40px] font-semibold text-bluecolor leading-[48px] lg:leading-[60px]">
                  Connecting You with the Best
                  <span className="leading-[60px] d:pl-2"> Skilled Professionals</span>
                </h1>

                <div className="hidden sm:block">
                  <p className="font-Inter text-greycolor">Your <span className="text-bluecolor font-semibold">Career</span>, Your <span className="text-bluecolor font-semibold">Future</span> - Connected.</p>
                  <p className="font-Inter text-greycolor">Bringing Job Seekers and Providers Together, Seamlessly.</p>
                </div>

                <p className="font-Inter text-[16px] text-pretty sm:text-left text-greycolor py-3">
                  Find and hire experts across various fields with ease and trust.
                </p>
              </div>

            </div>
          </div>

          <div className='w-full md:w-[70%] flex flex-col justify-between py-8 lg:py-0'>
            <div className="w-full mx-auto flex justify-center">
              <div className='flex flex-col gap-6'>
                <img src={Person1} alt="" className="w-[85%] md:w-[90%] lg:w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
                <img src={Person2} alt="" className="w-[85%] md:w-[90%] lg:w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
              </div>

              <div className='flex flex-col gap-6 mt-5'>
                <img src={Person3} alt="" className="w-[85%] md:w-[90%] lg:w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
                <img src={Person4} alt="" className="w-[85%] md:w-[90%] lg:w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
              </div>
            </div>

          </div>

        </div>
      </section>


      <style jsx>{`
        .phrase-animation {
          display: inline-block;
          animation: swipe 3s infinite;
        }

        @keyframes swipe {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;