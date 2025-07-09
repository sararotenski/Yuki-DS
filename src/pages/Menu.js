import React from 'react'
import Footer from '../components/Footer'
import Cardapio from '../images/menu-images/cardapio-yuki.jpg';

function Menu() {
  return (
    <div>
      <p class='menu-text'>NOSSO MENU</p>
      <img className="cardapio" src={ Cardapio } alt="Cardápio"/>
      <footer>
      <Footer />
      </footer>
    </div>
  )
}

export default Menu
