import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Badge from '../components/LandingPage/Badge'
import Category from '../components/LandingPage/Category'
import MainContent from '../components/LandingPage/MainContent'
import SecondContent from '../components/LandingPage/SecondContent'
import ThirdContent from '../components/LandingPage/ThirdContent'

const Home = () => {
  return (
    <>
        <Header/>
        <MainContent/>
        <Category/>
        <Badge/>
        <SecondContent/>
        <ThirdContent/>
        <Footer/>
    </>
  )
}

export default Home
