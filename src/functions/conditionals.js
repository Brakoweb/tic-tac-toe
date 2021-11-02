export default function anyWinner(table, winner) {
    
    let whoWin = []

    /*----------------------------Rows-----------------------------*/

    if (table.cuadro1.flag && table.cuadro2.flag && table.cuadro3.flag) {
        switch (true) {
            case (table.cuadro1.element.innerText == "X" && table.cuadro2.element.innerText == "X" && table.cuadro3.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro1.element.innerText == "O" && table.cuadro2.element.innerText == "O" && table.cuadro3.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }
    if (table.cuadro4.flag && table.cuadro5.flag && table.cuadro6.flag) {
        switch (true) {
            case (table.cuadro4.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro6.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro4.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro6.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }
    if (table.cuadro7.flag && table.cuadro8.flag && table.cuadro9.flag) {
        switch (true) {
            case (table.cuadro7.element.innerText == "X" && table.cuadro8.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro7.element.innerText == "O" && table.cuadro8.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }

    /*----------------------------Columns-----------------------------*/

    if (table.cuadro1.flag && table.cuadro4.flag && table.cuadro7.flag) {
        switch (true) {
            case (table.cuadro1.element.innerText == "X" && table.cuadro4.element.innerText == "X" && table.cuadro7.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro1.element.innerText == "O" && table.cuadro4.element.innerText == "O" && table.cuadro7.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }
    if (table.cuadro2.flag && table.cuadro5.flag && table.cuadro8.flag) {
        switch (true) {
            case (table.cuadro2.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro8.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro2.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro8.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }
    if (table.cuadro3.flag && table.cuadro6.flag && table.cuadro9.flag) {
        switch (true) {
            case (table.cuadro3.element.innerText == "X" && table.cuadro6.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro3.element.innerText == "O" && table.cuadro6.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }

    /*----------------------------Diagonals-----------------------------*/

    if (table.cuadro1.flag && table.cuadro5.flag && table.cuadro9.flag) {
        switch (true) {
            case (table.cuadro1.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro9.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro1.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro9.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }
    if (table.cuadro3.flag && table.cuadro5.flag && table.cuadro7.flag) {
        switch (true) {
            case (table.cuadro3.element.innerText == "X" && table.cuadro5.element.innerText == "X" && table.cuadro7.element.innerText == "X"):
                winner = true;
                return whoWin = [winner, 'X'];
            case (table.cuadro3.element.innerText == "O" && table.cuadro5.element.innerText == "O" && table.cuadro7.element.innerText == "O"):
                winner = true;
                return whoWin = [winner, 'O'];
        }
    }

    /*----------------------------Draw-----------------------------*/

    if (
        table.cuadro1.flag && table.cuadro2.flag && table.cuadro3.flag &&
        table.cuadro4.flag && table.cuadro5.flag && table.cuadro6.flag &&
        table.cuadro7.flag && table.cuadro8.flag && table.cuadro9.flag &&
        !winner
    ) {
        winner = true;
        return whoWin = [winner, 'Draw'];
    }

    return whoWin = [winner, ''];
}