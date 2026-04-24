import { useNavigate } from 'react-router-dom'
import HeaderBanner from '../../components/HeaderBanner'
import { useAuth } from '../../contexts/User'

const SignUpAs = () => {
  const { handleEmployer, handleProfessional } = useAuth();
  const navigate = useNavigate();

  const handleEmployerAs = () => {
    handleEmployer('employer');
    navigate('/register');
  }

  const handleProfessionalAs = () => {
    handleProfessional('professional');
    navigate('/register')
  }

  return (
    <>
      <HeaderBanner
        bgColor="#ffffff"
        logoColor="#006FA3"
        btnColor="#006FA3"
        btnTextColor="#ffffff"
        pageHeader='Sign In'
      />

      <section className='w-full flex flex-grow flex-1 py-20'>
        <div className="w-full flex flex-col flex-1 items-center justify-center ">
          <div className='w-full text-center mb-6'>
            <p className='font-Inter text-3xl font-bold'>Create Your Account</p>
          </div>

          <div className='sm:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto sm:flex gap-4'>

            <div className='bg-white drop-shadow-lg rounded-lg w-[80%] mx-auto py-4 px-4 mb-6 sm:mb-0'>
              <h2 className="text-2xl font-bold font-Inter mb-3 text-center">Professional</h2>
              <p className='font-Inter text-[16px] pb-8 text-center'>Looking for your next gig? Be a part of Linkprosoft and leverage its opportunities.</p>
              <button onClick={handleProfessionalAs} className="inline-block text-center bg-bluecolor font-bold font-Inter text-white px py-2.5 rounded w-full mb-4 sm:mb-0">Sign Up as a Professional</button>
            </div>

            <div className='bg-white drop-shadow-lg rounded-lg w-[80%] mx-auto py-4 px-4'>
              <h2 className="text-2xl font-bold font-Inter mb-3 text-center">Employer</h2>
              <p className='font-Inter text-[16px] pb-8 text-center'>Are you an employer or business owner? Advertise your business with Linkprosoft.</p>
              <button onClick={handleEmployerAs} className="inline-block text-center bg-bluecolor font-bold font-Inter
                text-white px py-2.5 rounded w-full mb-4 sm:mb-0">Sign Up as an Employer
              </button>
            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default SignUpAs