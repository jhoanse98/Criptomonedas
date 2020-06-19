import React, {useState, Fragment} from 'react'

const useMoneda = () => {
    //State y fn que actualiza el state
    const [state, actualizarState] = useState('');

    //función que retorna la vista o sección en pantalla

    const SeleccionarMoneda = () => (
        <Fragment>
            <label>Tipo de Moneda</label>
            <select>
                <option value="CO">Colombia</option>
            </select>
        </Fragment>
    )

    //retornamos el State, lo que vamos a mostrar (SeleccionarMoneda) y la fn que actualiza el state
    return [state, SeleccionarMoneda, actualizarState];

}
 
export default useMoneda;