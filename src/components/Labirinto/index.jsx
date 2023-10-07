import Bloco from "../Bloco";
import React, { useEffect, useState } from "react";
const labirinto = () => {

    const [labirinto, setLabirinto] = useState([]);

    let x = 0;
    let y = 0;

    useEffect(() => {
        document.body.addEventListener("keydown", (event) => {
            if (event.key == "s") {
                if (!verificarPosicao(x + 1, y) && x+1 < 8) {
                    x++;
                }

            } else if (event.key == "w") {
                if (!verificarPosicao(x - 1, y) && x-1 >= 0) {
                    x--;
                }
            } else if (event.key == "a") {
                if (!verificarPosicao(x, y - 1) && y-1 >= 0) {
                    y--;
                }
            } else if (event.key == "d") {
                if (!verificarPosicao(x, y + 1) && y+1 < 8) {
                    y++;
                }
            }
            criarLabirinto()
        });
        criarLabirinto()
    }, [])

    const criarLabirinto = () => {
        const matrix = [];
        console.log(y)
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i == x && j == y) {
                    matrix.push(<Bloco cor={1} key={(j * 8) + i} personagem />);
                } else if (verificarPosicao(i, j)) {
                    matrix.push(<Bloco cor={2} key={(j * 8) + i} />);
                }
                else if (i == 7 && j == 7) {
                    matrix.push(<Bloco cor={3} key={(j * 8) + i} />);
                } else {
                    matrix.push(<Bloco cor={1} key={(j * 8) + i} />);
                }

            }
        }
        setLabirinto(matrix);

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


    return (
        <>
            <div className="  w-full h-full flex justify-center items-center ">

                <div className="grid grid-cols-8 gap-0 h-5/6 w-4/6 border-4  border-black  ">
                    {labirinto.map((bloco) => {
                        return bloco;
                    })}
                </div>
            </div>

        </>
    )
}

export default labirinto;