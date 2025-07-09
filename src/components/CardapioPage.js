import React from 'react'
import Cardapio from '../images/menu-images/cardapio-yuki.jpg';

function CardapioPage() {
  return (
    <div>
      <div className='cardapio-container'>
      <p class='menu-text'>NOSSO MENU</p>
      <img className="cardapio" src={ Cardapio } alt="Cardápio"/>
      </div>
    </div>
  )
}

export default CardapioPage
