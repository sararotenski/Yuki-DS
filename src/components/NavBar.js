import React from 'react'
import LogoYuki from '../images/logo-yuki.jpg'

function NavBar() {
  return (
    <>
      <nav className='menu-container'>
        <nav className='header-navigation'>
        <img src= { LogoYuki } alt='logo do Yuki Sushi' />
        <ul className='navigation'>
          <li className='itens'>Home</li>
          <li className='itens'>Sobre nós</li>
          <li className='itens'>Restaurante</li>
          <li className='itens'>Menu</li>
          <li className='itens'>Reserva</li>
          <li className='itens'>Contato</li>
        </ul>
        </nav>
        <div className='banner-text-container'>
          <h1 className='banner-text'>Pensou em japa? Partiu Yuki</h1>
          <h1 className='banner-text'>Pensou em japa? Partiu Yuki</h1>
          <h1 className='banner-text'>Pensou em japa? Partiu Yuki</h1>
        </div>
      </nav>
    </>
  )
}

export default NavBar
