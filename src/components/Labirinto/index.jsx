import Bloco from "../Bloco";

const labirinto = () => {

   

    const criarLabirinto = () => {
        const matrix = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j <8; j++) {
               if(verificarPosicao(i,j)){
                matrix.push(<Bloco cor={2} />); 
               }else if (i == 7 && j == 7){
                matrix.push(<Bloco cor={3} />);
               }
               else{
                matrix.push(<Bloco cor={1}/>);
               }
               

            }
        }
        return matrix
    }

    const verificarPosicao = (i, j) => {
        if (i == 0) {
            if (j == 1 || j == 2 || j == 3 || j == 4) {
                return true
            }
        } else if (i == 1) {
            if (j == 1 || j == 4 || j == 6) {
                return true
            }
        }
        else if (i == 2) {
            if (j == 1 || j == 3 || j == 4 || j == 6) {
                return true
            }
        }
        else if (i == 3) {
            if (j == 3 || j == 4 || j == 6) {
                return true
            }
        }
        else if (i == 4) {
            if (j == 1 || j == 6) {
                return true
            }
        }
        else if (i == 5) {
            if (j == 1 || j == 3 || j == 5) {
                return true
            }
        }
        else if (i == 6) {
            if (j == 1 || j == 2 || j == 3 || j == 5 || j == 7) {
                return true
            }
        } else if (i == 7) {
            if (j == 3 || j == 5) {
                return true
            }
        }
        return false;

    }

    const labirintoFeito = criarLabirinto();

    return (
        <>
            <div className="  w-full h-full flex justify-center items-center ">
              
                <div className="grid grid-cols-8 gap-0 h-5/6 w-4/6 border-4  border-black  ">
                    {labirintoFeito.map((bloco) => {
                        return bloco;
                    })}
                    </div>
            </div>

        </>
    )
}

export default labirinto;