
import Navbar from "../components/Home/Navbar"
import Hero from "../components/Home/Hero"
import HowitWorks from "../components/Home/HowitWorks"
import PopularSkills from "../components/Home/PopularSkills"
import WhychooseUs from "../components/Home/WhychooseUs"
import Testimonial from "../components/Home/Testimonial"
import CallToAction from "../components/Home/CallToAction"
import Footer from "../components/Home/Footer"
import Newsletter from "../components/Home/Newsletter"
import Copyright from "../components/Copyright"

const Home = () => {
  return (
    <>

      <Navbar />
      <Hero />
      <PopularSkills />
      <HowitWorks />
      <WhychooseUs />
      <Testimonial />
      <CallToAction />
      <Newsletter />
      <Footer />
      <Copyright />
    </>
  )
}

export default Home