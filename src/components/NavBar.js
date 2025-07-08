import React from 'react'
import LogoYuki from '../images/logo-yuki.png'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <>
      <nav className='menu-container'>
        <nav className='header-navigation'>
        <img className='yuki-logo' src= { LogoYuki } alt='logo do Yuki Sushi' />
        <Navbar className='navigation'>
          <Nav.Link href="#" className='itens'><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#" className='itens'><Link to="/sobre-nos">Sobre nós</Link></Nav.Link>
          <Nav.Link href="#" className='itens'><Link to="/restaurante">Restaurante</Link></Nav.Link>
          <Nav.Link href="#" className='itens'><Link to="/menu">Menu</Link></Nav.Link>
          <Nav.Link href="#" className='itens'><Link to="/reserva">Reserva</Link></Nav.Link>
          <Nav.Link href="#" className='itens'><Link to="/contato">Contato</Link></Nav.Link>
        </Navbar>
        </nav>
        <div className='banner-text-container'>
          <h1 className='banner-text' id='banner-text-opacity'>Pensou em japa? Partiu Yuki</h1>
          <h1 className='banner-text'>Pensou em japa? Partiu Yuki</h1>
          <h1 className='banner-text' id='banner-text-opacity'>Pensou em japa? Partiu Yuki</h1>
        </div>
      </nav>
    </>
  )
}

export default NavBar
