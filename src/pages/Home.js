import React from 'react'
import CombosSection from '../components/CombosSection'
import Mapa from '../components/Mapa'
import SushiPicture from '../images/home-images/sushi-picture.png';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home'>
      <img className="sushi-picture" src={ SushiPicture } alt="Sushi voando"/>
      <CombosSection />
      <Mapa />
      <footer>
      <Footer />
      </footer>
    </div>
  )
}

export default Home
