import checkTable from './functions/bot.js';

// player's turn
let turn = false;

// each space inside the board
let count = [];

// boolean if somebody win
let winner = false;

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

// the board's game
let table = { cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8, cuadro9 };

window.addEventListener('click', onClickTable);

// the HTMLElement that user clicked
let target = undefined;

function onClickTable(ev) {
    target = ev.target.id;
    if (ev.target.className == 'cuadro') {
        switch (target) {
            case 'cuadro1':
                if (!table.cuadro1.flag) {
                    if (turn) {
                        table.cuadro1.element.innerText = "O";
                    } else {
                        table.cuadro1.element.innerText = "X";
                    }
                    table.cuadro1.flag = true;
                    count.push(1);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    } 
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
                    count.push(2);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(3);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(4);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(5);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(6);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(7);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(8);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
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
                    count.push(9);
                    turn = !turn;
                    if(turn && !anyWinner(table, winner)){
                        ev.target.id = checkTable(table, ev, count);
                        onClickTable(ev);
                    }
                }
                break;
        }   //end swich

    }
}

function anyWinner(table, winner) {

    /*----------------------------Rows-----------------------------*/

    if (table.cuadro1.flag && table.cuadro2.flag && table.cuadro3.flag) {
        switch (true) {
            case (table.cuadro1.element.innerText == "X" && table.cuadro2.element.innerText == "X" && table.cuadro3.element.innerText == "X"):
                setTimeout(() => {
                    alert("Player X Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
            case (table.cuadro1.element.innerText == "O" && table.cuadro2.element.innerText == "O" && table.cuadro3.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
        }
    }
    if (table.cuadro4.flag && table.cuadro5.flag && table.cuadro6.flag) {
        switch (true) {
            case (table.cuadro4.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro6.element.innerText == "X"):
                setTimeout(() => {
                    alert("Player X Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
            case (table.cuadro4.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro6.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
        }
    }
    if (table.cuadro7.flag && table.cuadro8.flag && table.cuadro9.flag) {
        switch (true) {
            case (table.cuadro7.element.innerText == "X" && table.cuadro8.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                setTimeout(() => {
                    alert("Player X Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
            case (table.cuadro7.element.innerText == "O" && table.cuadro8.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
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
                return winner = true;
            case (table.cuadro1.element.innerText == "O" && table.cuadro4.element.innerText == "O" && table.cuadro7.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
        }
    }
    if (table.cuadro2.flag && table.cuadro5.flag && table.cuadro8.flag) {
        switch (true) {
            case (table.cuadro2.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro8.element.innerText == "X"):
                setTimeout(() => {
                    alert("Player X Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
            case (table.cuadro2.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro8.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
        }
    }
    if (table.cuadro3.flag && table.cuadro6.flag && table.cuadro9.flag) {
        switch (true) {
            case (table.cuadro3.element.innerText == "X" && table.cuadro6.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                setTimeout(() => {
                    alert("Player X Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
            case (table.cuadro3.element.innerText == "O" && table.cuadro6.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
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
                return winner = true;
            case (table.cuadro1.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
        }
    }
    if (table.cuadro3.flag && table.cuadro5.flag && table.cuadro7.flag) {
        switch (true) {
            case (table.cuadro3.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro7.element.innerText == "X"):
                setTimeout(() => {
                    alert("Player X Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
            case (table.cuadro3.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro7.element.innerText == "O"):
                setTimeout(() => {
                    alert("Player O Win");
                }, 300);
                window.removeEventListener('click', onClickTable);
                return winner = true;
        }
    }

    /*----------------------------Draw-----------------------------*/

    if (
        table.cuadro1.flag && table.cuadro2.flag && table.cuadro3.flag &&
        table.cuadro4.flag && table.cuadro5.flag && table.cuadro6.flag &&
        table.cuadro7.flag && table.cuadro8.flag && table.cuadro9.flag &&
        !winner
    ) {
        setTimeout(() => {
            alert("Draw");
        }, 300);
        window.removeEventListener('click', onClickTable);
        return winner = true;
    }
}