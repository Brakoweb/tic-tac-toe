/*
const LEFT_ARROW = 37
const UP_ARROW = 38
const RIGHT_ARROW = 39
const DOWN_ARROW = 40


const ENTER = 13
*/
// player's turn
let turn = false;

//Each board square
const cuadro1 = { element: document.getElementById('cuadro1'), flag: false };
const cuadro2 = { element: document.getElementById('cuadro2'), flag: false };
const cuadro3 = { element: document.getElementById('cuadro3'), flag: false };

const cuadro4 = { element: document.getElementById('cuadro4'), flag: false };
const cuadro5 = { element: document.getElementById('cuadro5'), flag: false };
const cuadro6 = { element: document.getElementById('cuadro6'), flag: false };

const cuadro7 = { element: document.getElementById('cuadro7'), flag: false };
const cuadro8 = { element: document.getElementById('cuadro8'), flag: false };
const cuadro9 = { element: document.getElementById('cuadro9'), flag: false };

let table = { cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8, cuadro9 };
let winner = false;

window.addEventListener('click', onClickTable);

function onClickTable(ev) {
    if (ev.target.className == 'cuadro') {
        switch (ev.target.id) {
            case 'cuadro1':
                if (!table.cuadro1.flag) {
                    if (turn) {
                        table.cuadro1.element.innerText = "O";
                    } else {
                        table.cuadro1.element.innerText = "X";
                    }
                    table.cuadro1.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro2':
                if (!table.cuadro2.flag) {
                    if (turn) {
                        table.cuadro2.element.innerText = "O";
                    } else {
                        table.cuadro2.element.innerText = "X";
                    }
                    table.cuadro2.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro3':
                if (!table.cuadro3.flag) {
                    if (turn) {
                        table.cuadro3.element.innerText = "O";
                    } else {
                        table.cuadro3.element.innerText = "X";
                    }
                    table.cuadro3.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro4':
                if (!table.cuadro4.flag) {
                    if (turn) {
                        table.cuadro4.element.innerText = "O";
                    } else {
                        table.cuadro4.element.innerText = "X";
                    }
                    table.cuadro4.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro5':
                if (!table.cuadro5.flag) {
                    if (turn) {
                        table.cuadro5.element.innerText = "O";
                    } else {
                        table.cuadro5.element.innerText = "X";
                    }
                    table.cuadro5.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro6':
                if (!table.cuadro6.flag) {
                    if (turn) {
                        table.cuadro6.element.innerText = "O";
                    } else {
                        table.cuadro6.element.innerText = "X";
                    }
                    table.cuadro6.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro7':
                if (!table.cuadro7.flag) {
                    if (turn) {
                        table.cuadro7.element.innerText = "O";
                    } else {
                        table.cuadro7.element.innerText = "X";
                    }
                    table.cuadro7.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro8':
                if (!table.cuadro8.flag) {
                    if (turn) {
                        table.cuadro8.element.innerText = "O";
                    } else {
                        table.cuadro8.element.innerText = "X";
                    }
                    table.cuadro8.flag = true;
                    turn = !turn;
                }
                break;
            case 'cuadro9':
                if (!table.cuadro9.flag) {
                    if (turn) {
                        table.cuadro9.element.innerText = "O";
                    } else {
                        table.cuadro9.element.innerText = "X";
                    }
                    table.cuadro9.flag = true;
                    turn = !turn;
                }
                break;
        }   //end swich

        if (table.cuadro1.flag && table.cuadro2.flag && table.cuadro3.flag) {
            switch (true) {
                case (table.cuadro1.element.innerText == "X" && table.cuadro2.element.innerText == "X" && table.cuadro3.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro1.element.innerText == "O" && table.cuadro2.element.innerText == "O" && table.cuadro3.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }
        if (table.cuadro4.flag && table.cuadro5.flag && table.cuadro6.flag) {
            switch (true) {
                case (table.cuadro4.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro6.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro4.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro6.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }
        if (table.cuadro7.flag && table.cuadro8.flag && table.cuadro9.flag) {
            switch (true) {
                case (table.cuadro7.element.innerText == "X" && table.cuadro8.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro7.element.innerText == "O" && table.cuadro8.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }

        /*----------------------------Columns-----------------------------*/

        if (table.cuadro1.flag && table.cuadro4.flag && table.cuadro7.flag) {
            switch (true) {
                case (table.cuadro1.element.innerText == "X" && table.cuadro4.element.innerText == "X" && table.cuadro7.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro1.element.innerText == "O" && table.cuadro4.element.innerText == "O" && table.cuadro7.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }
        if (table.cuadro2.flag && table.cuadro5.flag && table.cuadro8.flag) {
            switch (true) {
                case (table.cuadro2.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro8.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro2.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro8.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }
        if (table.cuadro3.flag && table.cuadro6.flag && table.cuadro9.flag) {
            switch (true) {
                case (table.cuadro3.element.innerText == "X" && table.cuadro6.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro3.element.innerText == "O" && table.cuadro6.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }

        /*----------------------------Diagonals-----------------------------*/

        if (table.cuadro1.flag && table.cuadro5.flag && table.cuadro9.flag) {
            switch (true) {
                case (table.cuadro1.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro1.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }
        if (table.cuadro3.flag && table.cuadro5.flag && table.cuadro7.flag) {
            switch (true) {
                case (table.cuadro3.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro7.element.innerText == "X"):
                    setTimeout(() => {
                        alert("Player X Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
                case (table.cuadro3.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro7.element.innerText == "O"):
                    setTimeout(() => {
                        alert("Player O Win");
                    }, 300);
                    window.removeEventListener('click', onClickTable);
                    winner = true;
                    break;
            }
        }

        if(
            table.cuadro1.flag && table.cuadro2.flag && table.cuadro3.flag &&
            table.cuadro4.flag && table.cuadro5.flag && table.cuadro6.flag &&
            table.cuadro7.flag && table.cuadro8.flag && table.cuadro9.flag &&
            !winner
        ){
            setTimeout(() => {
                alert("Draw");
            }, 300);
            window.removeEventListener('click', onClickTable);
        }

    }
}