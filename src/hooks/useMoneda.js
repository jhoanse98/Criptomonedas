import React, {useState, Fragment} from 'react'

const useMoneda = (label, opciones) => {
    //State y fn que actualiza el state
    const [state, actualizarState] = useState('');

    //función que retorna la vista o sección en pantalla

    const SeleccionarMoneda = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange = {e => actualizarState(e.target.value)}
                value={state}
            >            
                <option value=''>--Seleccione Moneda--</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    )

    //retornamos el State, lo que vamos a mostrar (SeleccionarMoneda) y la fn que actualiza el state
    return [state, SeleccionarMoneda, actualizarState];

}
 
export default useMoneda;