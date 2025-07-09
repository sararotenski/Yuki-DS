import React from 'react'
import PeixeImg from '../images/reserva-images/peixe-reserva.jpg'
import WhatsAppImg from '../images/reserva-images/whatsapp-reserva.png'

function ReservaSection() {
  return (
    <>
      <div className='reserva-container'>
              <div className='reserva-text'>
                  <h2>Reserva</h2>
                  <p>As reservas no Yuki <strong>não são obrigatórias</strong>, mas para uma experiência melhor e mais comodidade e conforto, recomendamos fortemente...</p>
                  <p>Para fazer sua reserva, entre em contato via nosso WhatsApp e confirme estas seguintes informações: <strong>nome, data, horários</strong> e <strong>quantidade de pessoas</strong>. Nossa equipe responderá assim que possível.</p>
                  <img src={ WhatsAppImg } alt='botão que leva ao whatsapp' />
              </div>
              <div className='reserva-img-container'>
                  <img src = { PeixeImg } alt='foto de uma parte da decoração do restaurante'/>
              </div>
            </div>
    </>
  )
}

export default ReservaSection
