import Verified from "../../assets/images/Verified.png"
import Notify from "../../assets/images/Notification.png"
import Payment from "../../assets/images/Payment.png"
import Review from "../../assets/images/Review.png"
import Person5 from "../../assets/images/Person5.png"

const WhychooseUs = () => {
  return (
    <section className="w-full">
      <div className="w-[95%] lg:w-[85%] mx-auto py-8">
        <h1 className="text-bluecolor py-[10px] font-Inter font-bold text-[30px]">Why Choose Linkprosoft?</h1>
        <div className="block lg:flex gap-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full flex flex-col gap-4 ">
              <div className="w-full border-[2px] py-[30px] text-center leading-[35px] bg-[#FC8E084D] lg:bg-transparent">
                <img src={Verified} alt="" className="mx-auto pb-[10px]" />
                <h1 className="font-Inter text-[20px] font-bold  text-greycolor">Verified Proffesionals</h1>
                <p className="font-Inter font-semibold text-[13px] text-greycolor leading-4">All professionals are vetted for quality.</p>
              </div>

              <div className="border-[2px] py-[30px] text-center leading-[35px] bg-[#FC8E084D] lg:bg-transparent">
                <img src={Notify} alt="" className="mx-auto pb-[10px]" />
                <h1 className="font-Inter text-center text-[20px] font-bold  text-greycolor">Real-Time Updates</h1>
                <p className="font-Inter leading-4 font-semibold text-[13px] text-greycolor">Stay updated with real-time notifications and tracking</p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4 lg:mt-8">
              <div className="border-[2px] py-[30px] text-center leading-[35px] bg-[#FC8E084D] lg:bg-transparent">
                <img src={Payment} alt="" className="mx-auto pb-[10px]" />
                <h1 className="font-Inter text-[20px] font-bold  text-greycolor">Secure Payments</h1>
                <p className="font-Inter font-semibold text-[13px] text-greycolor leading-4">Hassle-free and secure payment gateway.</p>
              </div>

              <div className="border-[2px] py-[30px] text-center leading-[35px] bg-[#FC8E084D] lg:bg-transparent">
                <img src={Review} alt="" className="mx-auto pb-[10px]" />
                <h1 className="font-Inter text-[20px] font-bold  text-greycolor">User Reviews</h1>
                <p className="font-Inter font-semibold text-[12px] text-greycolor leading-4">Check reviews and ratings from other users.</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img src={Person5} alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhychooseUs
