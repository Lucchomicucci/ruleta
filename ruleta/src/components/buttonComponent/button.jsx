import '../buttonComponent/button.css';

export const ButtonComponent = (props) =>{
    
    return(
        <button className="numbers" onClick={props.funcion}>{props.numero}</button>
    )
}