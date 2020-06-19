import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';


const Boton = styled.input`
font-weight:bold;
font-size: 20px;
margin-top: 20px;
padding: 10px;
background-color: #66A2FE;
border: none;
width:100%;
border-radius: 10px;
color: #FFF;
transition: background-color 0.3s ease;

&:hover {
    background-color: #326AC0; 
    cursor:pointer;
};



`
const Formulario = () => {

    const opciones =[
        {codigo: 'USD', nombre: 'Dólar Estadounidense'},
        {codigo: 'COP', nombre: 'Peso Colombiano'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'DOP', nombre: 'Peso Dominicano'},
        {codigo: 'CLP', nombre: 'Peso Chileno'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];

    //destructuring lo que retorna useMoneda

    const [moneda, SeleccionMoneda] = useMoneda("Tipo de Moneda", opciones);

    //y usamos SeleccionMoneda como componente a usar
    return ( 
        <form>


            <SeleccionMoneda />
            <Boton 
                type= "submit"
                value="Calcular"
            />

        </form>
     );
}
 
export default Formulario;