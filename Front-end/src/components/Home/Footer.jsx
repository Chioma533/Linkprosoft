import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { categories, about, support, resources, industries } from "../../data/FooterData.js"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-bluecolor">
        <div className="w-[95%] lg:w-[85%] mx-auto py-6 lg:flex justify-center">

          <div className="w-full lg:w-[40%] mx-auto flex flex-col items-center justify-center gap-2">
            <h1 className="font-Inter text-white text-[30px] font-bold">Linkprosoft.</h1>
            <p className="font-bold text-white font-Inter text-17px mb-2">Follow Us</p>
            <div className="flex gap-3 ">
              <Link>
                <FaLinkedin className="text-white text-[25px]" />
              </Link>
              <Link>
                <FaXTwitter className="text-white text-[25px]" />
              </Link>
              <Link>
                <FaFacebook className="text-[25px]" />
              </Link>
            </div>
          </div>

          <div className="w-[85%] lg:w-full mx-auto flex justify-between sm:justify-center gap-5 py-8 sm:py-6">
            <div className="flex flex-col sm:flex-row gap-5">
              <div>
                <h1 className="font-semibold text-white list-disc font-Inter text-[13px] mb-2">Categories</h1>
                <ul className="text-white pl-6 lg:pl-8 list-disc font-Inter text-[12px] flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <li key={index}><Link>{category}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-white list-disc font-Inter text-[13px] mb-2">About</h1>
                <ul className="text-white pl-6 lg:pl-8 list-disc font-Inter text-[12px] flex flex-col gap-2">
                  {about.map((about, index) => (
                    <li key={index}><Link>{about}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div>
                <h1 className="font-semibold text-white list-disc font-Inter text-[13px] mb-2">Industries</h1>
                <ul className="text-white pl-6 lg:pl-8 list-disc font-Inter text-[12px] flex flex-col gap-2">
                  {support.map((industries, index) => (
                    <li key={index}><Link>{industries}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-white list-disc font-Inter text-[13px] mb-2">Support</h1>
                <ul className="text-white pl-6 lg:pl-8 list-disc font-Inter text-[12px] flex flex-col gap-2">
                  {support.map((support, index) => (
                    <li key={index}><Link>{support}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-white list-disc font-Inter text-[13px] mb-2">Resources</h1>
                <ul className="text-white pl-6 lg:pl-8 list-disc font-Inter text-[12px] flex flex-col gap-2">
                  {resources.map((resource, index) => (
                    <li key={index}><Link>{resource}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </>
  )
}

export default Footer