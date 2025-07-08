import React from 'react'
import DonosPicture from '../images/about-us-images/donos-picture.jpg'

function AboutUsSection() {
  return (
    <>
      <div className='about-us-container'>
        <div className='about-us-text'>
            <h2>Conheça a equipe Yuki:</h2>
            <p>A equipe Yuki Sushi é formada por três talentos únicos que combinam tradição, criatividade e paixão pela culinária oriental:
                <br></br><br></br>

Arthur, o sushiman de bigode, é o mestre das lâminas e da precisão. Com mãos firmes e olhar atento, ele transforma ingredientes frescos em verdadeiras obras de arte, sempre com aquele toque clássico que honra os mestres japoneses.
<br></br><br></br>
Maria Balbis traz elegância e delicadeza aos pratos. Seu domínio nas montagens e seu senso estético impecável tornam cada criação uma experiência visual e saborosa. Ela é o coração refinado da cozinha.
<br></br><br></br>
Sara é pura energia e inovação. Com um sorriso no rosto e muita técnica, ela une tradição e ousadia, criando combinações surpreendentes que encantam os clientes. Sara representa o espírito jovem e moderno do Yuki Sushi.
<br></br><br></br>
Juntos, eles formam a alma do Yuki Sushi, onde cada prato conta uma história feita com respeito, sabor e muito talento.</p>
        </div>
        <div className='about-us-img-container'>
            <img src = { DonosPicture } alt='foto dos três donos do Yuki Sushi'/>
        </div>
      </div>
    </>
  )
}

export default AboutUsSection
