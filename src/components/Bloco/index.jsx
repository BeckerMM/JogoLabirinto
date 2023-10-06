import react from "react";

const Bloco = (props)=>{
    
    const verificar= () =>{
        console.log(props.cor);
        if(props.cor == 1){
            return "bg-white"; 
        }else if (props.cor == 2){
            return "bg-black";
        }else if (props.cor == 3){
            return "bg-green-500";
        }
    }

    
    return(
        <div className={" h-full w-full "+ verificar()}>
          
        </div>
    )
}

export default Bloco;