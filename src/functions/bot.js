
export default function checkTable(table, ev, count) {
    let random = (Math.floor(Math.random() * 9)) + 1; // returns a random integer from 1 to 9

    if (count.length < 9) {
        while (count?.includes(random)) {
            random = (Math.floor(Math.random() * 9)) + 1;
        }
    }

    switch (random) {
        case 1:
            if (!table.cuadro1.flag) {
                return ev.target.id = 'cuadro1';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 2:
            if (!table.cuadro2.flag) {
                return ev.target.id = 'cuadro2';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 3:
            if (!table.cuadro3.flag) {
                return ev.target.id = 'cuadro3';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 4:
            if (!table.cuadro4.flag) {
                return ev.target.id = 'cuadro4';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 5:
            if (!table.cuadro5.flag) {
                return ev.target.id = 'cuadro5';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 6:
            if (!table.cuadro6.flag) {
                return ev.target.id = 'cuadro6';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 7:
            if (!table.cuadro7.flag) {
                return ev.target.id = 'cuadro7';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 8:
            if (!table.cuadro8.flag) {
                return ev.target.id = 'cuadro8';
            } else {
                checkTable(table, ev, count);
            }
            break;
        case 9:
            if (!table.cuadro9.flag) {
                return ev.target.id = 'cuadro9';
            } else {
                checkTable(table, ev, count);
            }
            break;
    }

    return ev.target.id = checkTable(table, ev, count);

}