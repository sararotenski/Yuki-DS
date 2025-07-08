import React from 'react'
import InstagramImg from '../images/footer-images/instagram.png'
import FacebookImg from '../images/footer-images/facebook.png'
import WhatsAppImg from '../images/footer-images/whatsapp.png'

function Footer() {

    const ano = new Date().getFullYear()

  return (
    <>
      <div className='footer-img-container'>
        <img className='footer-img' src = { InstagramImg } alt='logo do instagram' />
        <img className='footer-img' src = { FacebookImg } alt='logo do facebook' />
        <img className='footer-img' src = { WhatsAppImg } alt='logo do whatsapp' />
      </div>
      <div className='footer-text-container'>
        <p className='footer-text'>&copy; { ano } Yuki Sushi - Todos os Direitos Reservados</p>
      </div>
    </>
  )
}

export default Footer
