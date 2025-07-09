import React from 'react'
import YukiRestaurante from '../images/restaurante-images/pink-restaurant.jpg'

function RestaurantSection() {
  return (
    <div>
      <div className='restaurante-components'>
             <img className="restaurante-img" src={ YukiRestaurante } alt="Imagem do Restaurante"/>
            <p class='restaurante-text'> No Yuki Sushi, tradição e criatividade se encontram para proporcionar uma experiência gastronômica única. Inspirado pela culinária japonesa autêntica e pelas nuances contemporâneas da cozinha asiática, o cardápio é elaborado com ingredientes frescos, cortes precisos e uma apresentação que encanta todos os sentidos.
      O ambiente foi cuidadosamente pensado para acolher, relaxar e transportar os clientes ao Japão moderno, com uma atmosfera elegante, minimalista e aconchegante. Seja para um jantar a dois, uma reunião entre amigos ou uma ocasião especial, o Yuki Sushi é o destino ideal para quem valoriza qualidade, sabor e atenção aos detalhes.
      A equipe de sushimen é apaixonada pelo que faz — e isso se reflete em cada prato servido.
      <br></br>
      <br></br>
      <br></br>
      Yuki Sushi - mais do que um restaurante, um momento de contemplação. </p>
      </div>
    </div>
  )
}

export default RestaurantSection
