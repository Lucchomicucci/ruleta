import '../buttonComponent/button.css';

export const ButtonComponent = (props) =>{
    
    return(
        <button onClick={props.funcion}>{props.numero}</button>
    )
}