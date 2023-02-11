
import useCotizador from '../Hooks/useCotizador'
import { marcas, PLANES } from '../constants';
import { useMemo, useCallback, useRef } from 'react';

const Resultado = () => {

    const {resultado, datos} = useCotizador();
    const {marca, plan, year} = datos;

    const yearRef = useRef(year)

    //Con el hook useCallback evitamos que al momento de cambiar el año, el plan o la marca la app haga u-render inmediato
    //Y solo haga el cambio cuando varie el resultado, por eso se pone entre corchetes [resultado]

    const [nombreMarca] = useCallback( marcas.filter(m => m.id === Number(marca)), [resultado]);
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado]);

    if(resultado === 0) return null;

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-2xl'>Resumen</h2>
        <p className='my-2'> 
            <span className='font-bold'>Marca: </span>
            {nombreMarca.nombre}
        </p>

        <p className='my-2'> 
            <span className='font-bold'>Plan: </span>
            {nombrePlan.nombre}
        </p>

        <p className='my-2'> 
            <span className='font-bold'>Año del vehiculo: </span>
            {yearRef.current}
        </p>

        <p className='my-2 text-2xl'> 
            <span className='font-bold'>Total cotización: </span>
            {`$ ${resultado}`}
        </p>
    </div>
  )
}

export default Resultado