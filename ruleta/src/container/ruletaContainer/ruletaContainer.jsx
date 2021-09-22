import '../ruletaContainer/ruleta.css';
import { ButtonComponent } from "../../components/buttonComponent/button"
import { useState } from "react"


export const Ruleta = () =>{
    
    let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const [ruletaTotal, setRuletaTotal] = useState(numbers)
    const [apuesta, setApuesta] = useState(10)
    
    const apostar = (cantidad) =>{
        let cantidadSeleccionada = cantidad
        setApuesta(cantidadSeleccionada)
    }

    return(
        <>
        {numbers.map((el, index) =>{
            return (
                <ButtonComponent numero={index} key={index}/>
            )
        })
        }

        <div className="botonApuesta">
            <ButtonComponent numero={10} funcion={()=> apostar(10)}/>
            <ButtonComponent numero={50} funcion={()=> apostar(50)}/>
            <ButtonComponent numero={100} funcion={()=> apostar(100)}/>
        </div>
        </>
    )
}