import React from 'react'
import AboutUsImgUm from '../images/about-us-images/sobre-nos-img-um.jpg'
import AboutUsImgDois from '../images/about-us-images/sobre-nos-img-dois.jpg'
import AboutUsImgTres from '../images/about-us-images/sobre-nos-img-tres.jpg'

function AboutUsPics() {
  return (
    <div className='pratos-container'>
      <img className='pratos-fotos' src={ AboutUsImgUm } alt='primeira imagem' />
      <img className='pratos-fotos' src={ AboutUsImgDois } alt='segunda imagem' />
      <img className='pratos-fotos' src={ AboutUsImgTres } alt='terceira imagem' />
    </div>
  )
}

export default AboutUsPics
