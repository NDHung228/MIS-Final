import Navbar from '../components/Navbar'
import HeroCarousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <div
        className={`block h-[42rem] bg-[url('/carousel-img/banner.png')] bg-cover bg-center bg-no-repeat`}
      />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home
