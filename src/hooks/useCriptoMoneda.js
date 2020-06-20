import React, {useState, Fragment} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    text-transform: uppercase;
    color: #FFF;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;
`;

const Select = styled.select`
    -webkit-appearance:none;
    font-size: 1.2rem;
    border:none;
    border-radius: 10px;
    padding:10px;
    margin-top:1rem;
    display:block; 
    width:100%;
    
`;

const useCriptoMoneda = (label, opciones) => {
    //State y fn que actualiza el state
    const [state, actualizarState] = useState('');

    
    //función que retorna la vista o sección en pantalla

    const SeleccionarCriptoMoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange = {e => actualizarState(e.target.value)}
                value={state}
            >            
                <option value=''>--Seleccione criptomoneda--</option>
                {opciones.map( opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
               
            </Select>
        </Fragment>
    )

    //retornamos el State, lo que vamos a mostrar (SeleccionarMoneda) y la fn que actualiza el state
    return [state, SeleccionarCriptoMoneda];

}
 
export default useCriptoMoneda;