import React from 'react'

function ContactUs() {
  return (
    <>
    <div className='contact-us-container'>
      <h2>Contate-nos</h2>
      <form className="formulario-contato">
      <input type="text" name="nome" placeholder="Nome:" />
      <input type="email" name="email" placeholder="Email:" />
      <input type="text" name="assunto" placeholder="Assunto:" />
      <textarea name="mensagem" placeholder="Mensagem:" rows="6" cols="40" />

      <button type="submit">Enviar</button>
    </form>
    </div>
    </>
  )
}

export default ContactUs
