import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import criptomonedas from './cryptomonedas.png';

import Formulario from './components/Formulario';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 5px;
    background-color: #66A2FE;
    display: block;
  };
`;

const Imagen = styled.img`
  width: 100%;
  margin-top: 5rem;
`;


function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptoMoneda, guardarCriptoMoneda] = useState('');

  useEffect(() => {
    //evitamos la ejecución de primera vez
    if(moneda === '') return;
  }, [moneda, criptoMoneda])

  return (
      <Contenedor>
        <div>
          <Imagen src={criptomonedas} alt="Criptomonedas" />  
        </div>
        <div>
          <Heading>Criptomonedas</Heading>
          <Formulario
            guardarMoneda={guardarMoneda}
            guardarCriptoMoneda={guardarCriptoMoneda}
          />
        </div>
        
      </Contenedor>
  );
}

export default App;
