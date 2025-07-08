import React from 'react';
import CombinadoUm from '../images/home-images/combinado-um.jpg';
import CombinadoDois from '../images/home-images/combinado-dois.jpg';
import CombinadoTres from '../images/home-images/combinado-tres.jpg';

function CombosSection() {
  return (
    <>
    <h2 className="combos-title">Alguns de nossos combinados:</h2>
    <div className="combos-container">
        <div className="combo-item">
        <img className='combinado-um' src= { CombinadoUm } alt='combinado-um-yuki' />
          <div className="combo-text">
            <h1>Combinado Sushi Experience - <strong>18 peças</strong></h1>
            <p>
            2 Nigiri salmão brulee e gengibre 2 Nigiri anchova negra e sweet chilli 4 Uramaki sumoku shake 4 Uramaki brie parma 2 Dyo de salmão com gema de ovo de codorna selado, salsa trufada, massago, cebolete e flor de sal 2 Dyo peixe branco, polvo e pesto 2 Dyo de salmão com vieira trufada e raspas de limão
            </p>
          </div>
        </div>
        <div className="combo-item">
        <img className='combinado-dois' src= { CombinadoDois } alt='combinado-dois-yuki' />
          <div className="combo-text">
            <h1>Combinado Tuna Shake - <strong>22 peças</strong></h1>
            <p>
            03 sashimi de atum 03 sashimi de salmão 05 uramaki filadélfia atum 05 filadélfia salmão 04 shake maki, 02 dyo atum alho poró
            </p>
          </div>
        </div>
        <div className="combo-item">
        <img className='combinado-tres' src= { CombinadoTres } alt='combinado-tres-yuki' />
          <div className="combo-text">
            <h1>Combinado Selection - <strong>30 peças</strong></h1>
            <p>
            05 uramakis sumoko, 05 uramakis filadélfia salmão com alho poró, 06 sashimis atum ama-missô, 06 sashimis shake toro, 02 nigiris shake toro, 02 nigiris atum, 04 dyo salmão com amêndoas
            </p>
          </div>
        </div>
      </div>
    </>

    )
}

  export default CombosSection