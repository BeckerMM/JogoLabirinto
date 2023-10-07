import react from "react";
import Persongem from "../Personagem";
const Bloco = (props)=>{
    
    const verificar= () =>{
        if(props.cor == 1){
            return "bg-white"; 
        }else if (props.cor == 2){
            return "bg-black";
        }else if (props.cor == 3){
            return "bg-green-500";
        }
    }

    
    return(
        <div className={" h-full w-full flex justify-center items-center "+ verificar()}>
          {props.personagem && <Persongem/>}
        </div>
    )
}

export default Bloco;