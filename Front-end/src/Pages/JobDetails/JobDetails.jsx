import PrevNext from './components/PrevNext'
import Feed from './components/Feed'
import Navbar from './components/Navbar2'
import Suggested from './components/Suggested'
import Newsletter from '../../components/Home/Newsletter'
import { feedData } from "../../data/feedData2"
import Footer from '../../components/Home/Footer'


const JobDetails = () => {
  const feedDataLength = feedData.length;
  return (
    <>
      <Navbar />
      <Suggested />
      <Feed />
      <PrevNext feedDataLength={feedDataLength} />
      <Newsletter />
      <Footer />
    </>
  )
}

export default JobDetails