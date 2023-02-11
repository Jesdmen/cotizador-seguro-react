import {createContext, useState} from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../Helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        
        //Una base
        let resultado = 2000;

        //Obtener diferencia de años
       const diferencia = obtenerDiferenciaYear(datos.year)
    

        //Hay que sumar el 2% por cada año
        resultado += ((diferencia * 2) * resultado) / 100 

        //Se aumentan los siguientes porcentajes de acuerdo al seguro escogido
        //Europeo 15%
        //Americano 10%
        //Asiatico 5%

        resultado *= calcularMarca(datos.marca)

        //Basico 10%
        //Completo 30%

        resultado *= calcularPlan(datos.plan)
        
        //Usar toFixed para dejar solo los últimos dos decimales del resultado
        resultado = resultado.toFixed(2)

        //Formatear a estilo de currency USD
        resultado = formatearDinero(resultado);

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)
        
       
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error, 
                setError,
                cotizarSeguro, 
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext