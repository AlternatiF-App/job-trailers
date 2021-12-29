import Header from '../components/Header/Header'
import Badge from '../components/LandingPage/Badge'
import Category from '../components/LandingPage/Category'
import MainContent from '../components/LandingPage/MainContent'
import SecondContent from '../components/LandingPage/SecondContent'

const Home = () => {
  return (
    <>
        <Header/>
        <MainContent/>
        <Category/>
        <Badge/>
        <SecondContent/>
    </>
  )
}

export default Home
