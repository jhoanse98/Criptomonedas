import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';



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

    //state para guardar la consulta de las criptomonedas

    const [criptoMonedaApi, GuardarCriptoMoneda] = useState([]);

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

    //destructuring lo que retorna useCriptoMoneda

    const [criptoMoneda, SeleccionCriptoMoneda] = useCriptoMoneda("Criptomoneda", criptoMonedaApi);


    //useEffect para la consulta a la Api con axios
    useEffect(()=>{
        const consultarAPI = async () => {
            const url= 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            GuardarCriptoMoneda(resultado.data.Data);

        }
        consultarAPI();
    }, []);
    //y usamos SeleccionMoneda como componente a usar y SeleccionCriptoMoneda
    return ( 
        <form>


            <SeleccionMoneda />
            <SeleccionCriptoMoneda />
            <Boton 
                type= "submit"
                value="Calcular"
            />

        </form>
     );
}
 
export default Formulario;