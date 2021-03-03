var ship4num = 1;
var ship3num = 2;
var ship2num = 3;
var ship1num = 4;
var pogodak = new Audio('battleship-assets/bomb.wav');
var potopljen = new Audio('battleship-assets/potopljen.wav');
var promasaj = new Audio('battleship-assets/miss.wav');
var firstTime = true;
var firstPlayer = true;
var pressed = 0;
var released = 0;
let player1name = "";
let player2name = "";
var rez1 = 20;
var rez2 = 20;
var player1table = [];
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player1table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);

var player2table = [];
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);
player2table.push(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']);

function mouseDown(b) {
    pressed = b;
}
function mouseUp(b) {

    released = b;
    var drugia = pressed % 10;
    var prvia = Math.floor(pressed / 10);
    var drugib = b % 10;
    var prvib = Math.floor(b / 10);


    if ((pressed - released) == 3 && ship4num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
                if (player1table[prvia - 1][drugia - 1] == '1' || player1table[prvia + 1][drugia - 1] == '1' || player1table[prvia][drugia] == '1' || player1table[prvia][drugia - 2] == '1') return;
                if (player1table[prvia - 1][drugia - 2] == '1' || player1table[prvia + 1][drugia - 2] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia - 3] == '1') return;
                if (player1table[prvia - 1][drugia - 3] == '1' || player1table[prvia + 1][drugia - 3] == '1' || player1table[prvia][drugia - 2] == '1' || player1table[prvia][drugia - 4] == '1') return;
                if (player1table[prvia][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia - 2] == '1' || player1table[prvia][drugia - 3] == '1') return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia - 1] == 1 || player2table[prvia + 1][drugia - 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia][drugia - 2] == 1) return;
                if (player2table[prvia - 1][drugia - 2] == 1 || player2table[prvia + 1][drugia - 2] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia - 3] == 1) return;
                if (player2table[prvia - 1][drugia - 3] == 1 || player2table[prvia + 1][drugia - 3] == 1 || player2table[prvia][drugia - 2] == 1 || player2table[prvia][drugia - 4] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia - 2] == 1 || player2table[prvia][drugia - 3] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b + 1).style.border = "dotted green";
        document.getElementById(b + 2).style.border = "dotted green";
        document.getElementById(b + 3).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia][drugia - 1] = '1';
            player1table[prvia][drugia - 2] = '1';
            player1table[prvia][drugia - 3] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia][drugia - 1] = '1';
            player2table[prvia][drugia - 2] = '1';
            player2table[prvia][drugia - 3] = '1';
        }
        ship4num--;
        createTable();
    }
    if ((pressed - released) == -3 && ship4num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia + 1] == 1 || player1table[prvia + 1][drugia + 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia][drugia + 2] == 1) return;
                if (player1table[prvia - 1][drugia + 2] == 1 || player1table[prvia + 1][drugia + 2] == 1 || player1table[prvia][drugia + 1] == 1 || player1table[prvia][drugia + 3] == 1) return;
                if (player1table[prvia - 1][drugia + 3] == 1 || player1table[prvia + 1][drugia + 3] == 1 || player1table[prvia][drugia + 2] == 1 || player1table[prvia][drugia + 4] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia][drugia + 1] == 1 || player1table[prvia][drugia + 2] == 1 || player1table[prvia][drugia + 3] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia + 1] == 1 || player2table[prvia + 1][drugia + 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia][drugia + 2] == 1) return;
                if (player2table[prvia - 1][drugia + 2] == 1 || player2table[prvia + 1][drugia + 2] == 1 || player2table[prvia][drugia + 1] == 1 || player2table[prvia][drugia + 3] == 1) return;
                if (player2table[prvia - 1][drugia + 3] == 1 || player2table[prvia + 1][drugia + 3] == 1 || player2table[prvia][drugia + 2] == 1 || player2table[prvia][drugia + 4] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia][drugia + 1] == 1 || player2table[prvia][drugia + 2] == 1 || player2table[prvia][drugia + 3] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b - 1).style.border = "dotted green";
        document.getElementById(b - 2).style.border = "dotted green";
        document.getElementById(b - 3).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia][drugia + 1] = '1';
            player1table[prvia][drugia + 2] = '1';
            player1table[prvia][drugia + 3] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia][drugia + 1] = '1';
            player2table[prvia][drugia + 2] = '1';
            player2table[prvia][drugia + 3] = '1';
        }
        ship4num--;
        createTable();
    }
    if ((pressed - released) == 2 && ship3num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia - 1] == 1 || player1table[prvia + 1][drugia - 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia][drugia - 2] == 1) return;
                if (player1table[prvia - 1][drugia - 2] == 1 || player1table[prvia + 1][drugia - 2] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia - 3] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia - 2] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia - 1] == 1 || player2table[prvia + 1][drugia - 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia][drugia - 2] == 1) return;
                if (player2table[prvia - 1][drugia - 2] == 1 || player2table[prvia + 1][drugia - 2] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia - 3] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia - 2] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b + 1).style.border = "dotted green";
        document.getElementById(b + 2).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia][drugia - 1] = '1';
            player1table[prvia][drugia - 2] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia][drugia - 1] = '1';
            player2table[prvia][drugia - 2] = '1';
        }
        ship3num--;
        createTable();
    }

    if ((pressed - released) == -2 && ship3num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia + 1] == 1 || player1table[prvia + 1][drugia + 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia][drugia + 2] == 1) return;
                if (player1table[prvia - 1][drugia + 2] == 1 || player1table[prvia + 1][drugia + 2] == 1 || player1table[prvia][drugia + 1] == 1 || player1table[prvia][drugia + 3] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia][drugia + 1] == 1 || player1table[prvia][drugia + 2] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia + 1] == 1 || player2table[prvia + 1][drugia + 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia][drugia + 2] == 1) return;
                if (player2table[prvia - 1][drugia + 2] == 1 || player2table[prvia + 1][drugia + 2] == 1 || player2table[prvia][drugia + 1] == 1 || player2table[prvia][drugia + 3] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia][drugia + 1] == 1 || player2table[prvia][drugia + 2] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b - 1).style.border = "dotted green";
        document.getElementById(b - 2).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia][drugia + 1] = '1';
            player1table[prvia][drugia + 2] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia][drugia + 1] = '1';
            player2table[prvia][drugia + 2] = '1';
        }
        ship3num--;
        createTable();
    }
    if ((pressed - released) == 1 && ship2num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia - 1] == 1 || player1table[prvia + 1][drugia - 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia][drugia - 2] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia][drugia - 1] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia - 1] == 1 || player2table[prvia + 1][drugia - 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia][drugia - 2] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia][drugia - 1] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b + 1).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia][drugia - 1] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia][drugia - 1] = '1';
        }
        ship2num--;
        createTable();
    }

    if ((pressed - released) == -1 && ship2num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia + 1] == 1 || player1table[prvia + 1][drugia + 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia][drugia + 2] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia][drugia + 1] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia + 1] == 1 || player2table[prvia + 1][drugia + 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia][drugia + 2] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia][drugia + 1] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b - 1).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia][drugia + 1] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia][drugia + 1] = '1';
        }
        ship2num--;
        createTable();
    }
    if ((pressed - released) == 30 && ship4num != 0) {
        if (firstTime) {
            if (prvia == 3) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia - 1] == 1 || player1table[prvia - 1][drugia + 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia - 2][drugia] == 1) return;
                if (player1table[prvia - 2][drugia - 1] == 1 || player1table[prvia - 2][drugia + 1] == 1 || player1table[prvia - 1][drugia] == 1 || player1table[prvia - 3][drugia] == 1) return;
                if (player1table[prvia - 3][drugia - 1] == 1 || player1table[prvia - 3][drugia + 1] == 1 || player1table[prvia - 2][drugia] == 1 || player1table[prvia - 4][drugia] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia - 1][drugia] == 1 || player1table[prvia - 2][drugia] == 1 || player1table[prvia - 3][drugia] == 1) return;
            }
        }
        else {
            if (prvia == 3) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia - 1] == 1 || player2table[prvia - 1][drugia + 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia - 2][drugia] == 1) return;
                if (player2table[prvia - 2][drugia - 1] == 1 || player2table[prvia - 2][drugia + 1] == 1 || player2table[prvia - 1][drugia] == 1 || player2table[prvia - 3][drugia] == 1) return;
                if (player2table[prvia - 3][drugia - 1] == 1 || player2table[prvia - 3][drugia + 1] == 1 || player2table[prvia - 2][drugia] == 1 || player2table[prvia - 4][drugia] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia - 1][drugia] == 1 || player2table[prvia - 2][drugia] == 1 || player2table[prvia - 3][drugia] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b + 10).style.border = "dotted green";
        document.getElementById(b + 20).style.border = "dotted green";
        document.getElementById(b + 30).style.border = "dotted green";
        ship4num--;
        createTable();

        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia - 1][drugia] = '1';
            player1table[prvia - 2][drugia] = '1';
            player1table[prvia - 3][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia - 1][drugia] = '1';
            player2table[prvia - 2][drugia] = '1';
            player2table[prvia - 3][drugia] = '1';
        }
    }
    if ((pressed - released) == -30 && ship4num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 6) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia + 1][drugia - 1] == 1 || player1table[prvia + 1][drugia + 1] == 1 || player1table[prvia + 2][drugia] == 1 || player1table[prvia][drugia] == 1) return;
                if (player1table[prvia + 2][drugia - 1] == 1 || player1table[prvia + 2][drugia + 1] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia + 3][drugia] == 1) return;
                if (player1table[prvia + 3][drugia - 1] == 1 || player1table[prvia + 3][drugia + 1] == 1 || player1table[prvia + 2][drugia] == 1 || player1table[prvia + 4][drugia] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia + 2][drugia] == 1 || player1table[prvia + 3][drugia] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 6) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia + 1][drugia - 1] == 1 || player2table[prvia + 1][drugia + 1] == 1 || player2table[prvia + 2][drugia] == 1 || player2table[prvia][drugia] == 1) return;
                if (player2table[prvia + 2][drugia - 1] == 1 || player2table[prvia + 2][drugia + 1] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia + 3][drugia] == 1) return;
                if (player2table[prvia + 3][drugia - 1] == 1 || player2table[prvia + 3][drugia + 1] == 1 || player2table[prvia + 2][drugia] == 1 || player2table[prvia + 4][drugia] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia + 2][drugia] == 1 || player2table[prvia + 3][drugia] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b - 10).style.border = "dotted green";
        document.getElementById(b - 20).style.border = "dotted green";
        document.getElementById(b - 30).style.border = "dotted green";
        ship4num--;
        createTable();

        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia + 1][drugia] = '1';
            player1table[prvia + 2][drugia] = '1';
            player1table[prvia + 3][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia + 1][drugia] = '1';
            player2table[prvia + 2][drugia] = '1';
            player2table[prvia + 3][drugia] = '1';
        }

    }
    if ((pressed - released) == 20 && ship3num != 0) {
        if (firstTime) {
            if (prvia == 2) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia - 1] == 1 || player1table[prvia - 1][drugia + 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia - 2][drugia] == 1) return;
                if (player1table[prvia - 2][drugia - 1] == 1 || player1table[prvia - 2][drugia + 1] == 1 || player1table[prvia - 1][drugia] == 1 || player1table[prvia - 3][drugia] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia - 1][drugia] == 1 || player1table[prvia - 2][drugia] == 1) return;
            }
        }
        else {

            if (prvia == 2) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia - 1] == 1 || player2table[prvia - 1][drugia + 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia - 2][drugia] == 1) return;
                if (player2table[prvia - 2][drugia - 1] == 1 || player2table[prvia - 2][drugia + 1] == 1 || player2table[prvia - 1][drugia] == 1 || player2table[prvia - 3][drugia] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia - 1][drugia] == 1 || player2table[prvia - 2][drugia] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b + 10).style.border = "dotted green";
        document.getElementById(b + 20).style.border = "dotted green";
        ship3num--;
        createTable();

        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia - 1][drugia] = '1';
            player1table[prvia - 2][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia - 1][drugia] = '1';
            player2table[prvia - 2][drugia] = '1';
        }

    }

    if ((pressed - released) == -20 && ship3num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 7) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia + 1][drugia - 1] == 1 || player1table[prvia + 1][drugia + 1] == 1 || player1table[prvia + 2][drugia] == 1 || player1table[prvia][drugia] == 1) return;
                if (player1table[prvia + 2][drugia - 1] == 1 || player1table[prvia + 2][drugia + 1] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia + 3][drugia] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia + 2][drugia] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 7) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia + 1][drugia - 1] == 1 || player2table[prvia + 1][drugia + 1] == 1 || player2table[prvia + 2][drugia] == 1 || player2table[prvia][drugia] == 1) return;
                if (player2table[prvia + 2][drugia - 1] == 1 || player2table[prvia + 2][drugia + 1] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia + 3][drugia] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia + 2][drugia] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b - 10).style.border = "dotted green";
        document.getElementById(b - 20).style.border = "dotted green";
        ship3num--;
        createTable();

        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia + 1][drugia] = '1';
            player1table[prvia + 2][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia + 1][drugia] = '1';
            player2table[prvia + 2][drugia] = '1';
        }

    }
    if ((pressed - released) == 10 && ship2num != 0) {
        if (firstTime) {
            if (prvia == 1) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia - 1][drugia - 1] == 1 || player1table[prvia - 1][drugia + 1] == 1 || player1table[prvia][drugia] == 1 || player1table[prvia - 2][drugia] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia - 1][drugia] == 1) return;
            }
        }
        else {
            if (prvia == 1) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia - 1][drugia - 1] == 1 || player2table[prvia - 1][drugia + 1] == 1 || player2table[prvia][drugia] == 1 || player2table[prvia - 2][drugia] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia - 1][drugia] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b + 10).style.border = "dotted green";
        ship2num--;
        createTable();

        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia - 1][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia - 1][drugia] = '1';
        }
    }

    if ((pressed - released) == -10 && ship2num != 0) {
        if (firstTime) {
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 8) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == 1 || player1table[prvia + 1][drugia] == 1 || player1table[prvia][drugia - 1] == 1 || player1table[prvia][drugia + 1] == 1) return;
                if (player1table[prvia + 1][drugia - 1] == 1 || player1table[prvia + 1][drugia + 1] == 1 || player1table[prvia + 2][drugia] == 1 || player1table[prvia][drugia] == 1) return;
                if (player1table[prvia][drugia] == 1 || player1table[prvia + 1][drugia] == 1) return;
            }
        }
        else {
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 8) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == 1 || player2table[prvia + 1][drugia] == 1 || player2table[prvia][drugia - 1] == 1 || player2table[prvia][drugia + 1] == 1) return;
                if (player2table[prvia + 1][drugia - 1] == 1 || player2table[prvia + 1][drugia + 1] == 1 || player2table[prvia + 2][drugia] == 1 || player2table[prvia][drugia] == 1) return;
                if (player2table[prvia][drugia] == 1 || player2table[prvia + 1][drugia] == 1) return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        document.getElementById(b - 10).style.border = "dotted green";
        ship2num--;
        createTable();

        if (firstTime) {
            player1table[prvia][drugia] = '1';
            player1table[prvia + 1][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
            player2table[prvia + 1][drugia] = '1';
        }
    }
    if ((pressed - released) == 0 && ship1num != 0) {
        if (firstTime) {
            if (player1table[prvia][drugia] == '1') return;
            if (prvia == 0) {
                if (player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player1table[prvia - 1][drugia] == '1' || player1table[prvia + 1][drugia] == '1' || player1table[prvia][drugia - 1] == '1' || player1table[prvia][drugia + 1] == '1') return;
            }
        }
        else {
            if (player2table[prvia][drugia] == '1') return;
            if (prvia == 0) {
                if (player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else if (prvia == 9) {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
            else {
                if (player2table[prvia - 1][drugia] == '1' || player2table[prvia + 1][drugia] == '1' || player2table[prvia][drugia - 1] == '1' || player2table[prvia][drugia + 1] == '1') return;
            }
        }
        document.getElementById(b).style.border = "dotted green";
        if (firstTime) {
            player1table[prvia][drugia] = '1';
        }
        else {
            player2table[prvia][drugia] = '1';
        }
        ship1num--;
        createTable();
    }
    if (ship1num == 0 && ship2num == 0 && ship3num == 0 && ship4num == 0)
        if (firstTime) {
            firstTime = false;
            setTimeout(novi(), 1200);
            //   alert(JSON.stringify(player1table));
            localStorage.setItem('tableone', JSON.stringify(player1table));

        }
        else {
            localStorage.setItem('tabletwo', JSON.stringify(player2table));
            setInterval(prebaci, 3000);
        }
}
function prebaci() {
    document.location.href = "battleship-game.html";
}
function novi() {

    ship1num = 4;
    ship2num = 3;
    ship3num = 2;
    ship4num = 1;
    for (var i = 0; i < 100; i++)
        document.getElementById(i).style.removeProperty('border');
    createTable();

}
function loadGame() {
    player1name = localStorage.getItem('nameone');
    player2name = localStorage.getItem('nametwo');
    player1table = JSON.parse(localStorage.getItem('tableone'));
    player2table = JSON.parse(localStorage.getItem('tabletwo'));

    igraj();
}
function igraj() {
    if (rez1 == 0 || rez2 == 0) {
        if (rez1 == 0) {
            alert("Pobednik je " + player1name + "\nPreostali broj segmenata: " + rez2);
        }
        else if (rez2 == 0) {
            alert("Pobednik je " + player2name + "\nPreostali broj segmenata: " + rez1);
        }
        rez1 = 20;
        rez2 = 20;
        localStorage.clear();
        setInterval(newGame, 4000);
    }

    if (firstPlayer) {
        var pomoc = 0;
        player2table.forEach(element => {
            element.forEach(elementic => {
                document.getElementById(pomoc).style.removeProperty('border');
                var el = document.getElementById(pomoc);
                el.innerHTML = "";
                if (elementic == '2') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/sea.png\">";
                }
                if (elementic == '3') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/bomb.png\">";
                }
                pomoc++;
            });
        });

        var pomoc = 100;
        player1table.forEach(element => {
            element.forEach(elementic => {
                document.getElementById(pomoc).style.removeProperty('border');
                var el = document.getElementById(pomoc);
                el.innerHTML = "";
                if (elementic == '1') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/brod.png\">";
                }
                if (elementic == '2') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/sea.png\">";
                }
                if (elementic == '3') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/bomb.png\">";
                }
                pomoc++;
            });
        });

        document.getElementsByClassName("attacking")[0].innerHTML = player1name + ' is attacking...';
        document.getElementsByClassName("onturn")[0].innerHTML = player2name + '\'s table';
        document.getElementsByClassName("onturn")[2].innerHTML = player1name + '\'s table';
    }
    else {
        var pomoc = 0;
        player1table.forEach(element => {
            element.forEach(elementic => {
                document.getElementById(pomoc).style.removeProperty('border');
                var el = document.getElementById(pomoc);
                el.innerHTML = "";
                if (elementic == '2') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/sea.png\">";
                }
                if (elementic == '3') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/bomb.png\">";
                }
                pomoc++;
            });
        });

        var pomoc = 100;
        player2table.forEach(element => {
            element.forEach(elementic => {
                document.getElementById(pomoc).style.removeProperty('border');
                var el = document.getElementById(pomoc);
                el.innerHTML = "";
                if (elementic == '1') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/brod.png\">";
                }
                if (elementic == '2') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/sea.png\">";
                }
                if (elementic == '3') {
                    var el = document.getElementById(pomoc);
                    el.innerHTML = "<img src=\"battleship-assets/bomb.png\">";
                }
                pomoc++;
            });
        });
        document.getElementsByClassName("attacking")[0].innerHTML = player2name + ' is attacking...';
        document.getElementsByClassName("onturn")[2].innerHTML = player2name + '\'s table';
        document.getElementsByClassName("onturn")[0].innerHTML = player1name + '\'s table';

    }
}
function proverisve(pom11, pom22) {
    var okej1 = false;
    var okej2 = false;
    var okej3 = false;
    var okej4 = false;
    var pom1;
    var pom2;

    pom1 = pom11;
    pom2 = pom22;


    while (pom1 >= 0) {

        if (pom1 == 0) {
            okej1 = true;
            break;
        }
        pom1--;
        if (firstPlayer) {
            if (player2table[pom1][pom2] == '1') {
                okej1 = false; break;
            }
            if (player2table[pom1][pom2] == '0' || player2table[pom1][pom2] == '2') {
                okej1 = true; break;
            }
        }
        else {
            if (player1table[pom1][pom2] == '1') {
                okej1 = false; break;
            }
            if (player1table[pom1][pom2] == '0' || player1table[pom1][pom2] == '2') {
                okej1 = true; break;
            }
        }
        //    alert(pom1);
    }
    pom1 = pom11;
    pom2 = pom22;

    while (pom1 <= 9) {
        if (pom1 == 9) {
            okej2 = true;
            break;
        }
        pom1++;

        if (firstPlayer) {
            if (player2table[pom1][pom2] == '1') {
                okej2 = false; break;
            }
            if (player2table[pom1][pom2] == '0' || player2table[pom1][pom2] == '2') {
                okej2 = true; break;
            }
        }
        else {
            if (player1table[pom1][pom2] == '1') {
                okej2 = false; break;
            }
            if (player1table[pom1][pom2] == '0' || player1table[pom1][pom2] == '2') {
                okej2 = true; break;
            }
        }
    }

    pom1 = pom11;
    pom2 = pom22;


    while (pom2 >= 0) {

        if (pom2 == 0) {
            okej3 = true;
            break;
        }
        pom2--;

        if (firstPlayer) {
            if (player2table[pom1][pom2] == '1') {
                okej3 = false; break;
            }
            if (player2table[pom1][pom2] == '0' || player2table[pom1][pom2] == '2') {
                okej3 = true; break;
            }
        }
        else {
            if (player1table[pom1][pom2] == '1') {
                okej3 = false; break;
            }
            if (player1table[pom1][pom2] == '0' || player1table[pom1][pom2] == '2') {
                okej3 = true; break;
            }
        }
    }

    pom1 = pom11;
    pom2 = pom22;

    while (pom2 <= 9) {
        if (pom2 == 9) {
            okej4 = true;
            break;
        }
        pom2++;

        if (firstPlayer) {
            if (player2table[pom1][pom2] == '1') {
                okej4 = false; break;
            }
            if (player2table[pom1][pom2] == '0' || player2table[pom1][pom2] == '2') {
                okej4 = true; break;
            }
        }
        else {
            if (player1table[pom1][pom2] == '1') {
                okej4 = false; break;
            }
            if (player1table[pom1][pom2] == '0' || player1table[pom1][pom2] == '2') {
                okej4 = true; break;
            }
        }
    }

    if (okej1 && okej2 && okej3 && okej4) return true;
    else return false;
}
function check(b) {

    var j = b % 10;
    var i = Math.floor(b / 10);
    document.getElementsByClassName("potopi")[0].innerHTML = "";
    if (firstPlayer) {
        if (player2table[i][j] == '1') {
            rez1--;
            pogodak.play();
            player2table[i][j] = '3';
            var pom1 = i;
            var okej = false;
            var pom2 = j;
            okej = proverisve(pom1, pom2);
            if (okej) document.getElementsByClassName("potopi")[0].innerHTML = "Ovim potezom brod je potopljen!";
            setInterval(igraj, 1200);
        }
        else {
            if (player2table[i][j] == '2') { }
            else if (player2table[i][j] == '3') { }
            else {
                promasaj.play();
                firstPlayer = false;
                player2table[i][j] = '2';
                document.getElementById(i * 10 + j).style.border = "dotted red";
                setInterval(igraj, 1200);
            }
        }
    }
    else {
        if (player1table[i][j] == '1') {
            rez2--;
            player1table[i][j] = '3';
            pogodak.play();
            var pom1 = i;
            var okej = false;
            var pom2 = j;
            okej = proverisve(pom1, pom2);
            if (okej) document.getElementsByClassName("potopi")[0].innerHTML = "Ovim potezom brod je potopljen!";
            setInterval(igraj, 1200);
        }
        else {
            if (player1table[i][j] == '2') { }
            else if (player1table[i][j] == '3') { }
            else {
                promasaj.play();
                firstPlayer = true;
                player1table[i][j] = '2';
                document.getElementById(i * 10 + j).style.border = "dotted red";
                setInterval(igraj, 1200);
            }
        }
    }
}
function newGame() {
    document.location.href = "battleship-welcome.html";
}
function createTable() {
    if (!firstTime) document.getElementsByClassName("igraci")[0].innerHTML = localStorage.getItem('nametwo') + ' on turn';
    else document.getElementsByClassName("igraci")[0].innerHTML = localStorage.getItem('nameone') + ' on turn';
    document.getElementsByClassName("ships")[0].innerHTML = ship4num;
    document.getElementsByClassName("ships")[1].innerHTML = ship3num;
    document.getElementsByClassName("ships")[2].innerHTML = ship2num;
    document.getElementsByClassName("ships")[3].innerHTML = ship1num;
}
function StartingGame() {


    player1name = document.lilform.player1.value;
    player2name = document.lilform.player2.value;

    if (player1name == 0) {
        alert("Polje player1 je obavezno");
        exit();
    }

    if (player2name == 0) {
        alert("Polje player2 je obavezno");
        exit();
    }

    if (player1name === player2name) {
        alert("Igraci imaju isti nick");
        exit();
    }


    let z = /^\w{3,15}$/;

    localStorage.setItem('nameone', player1name);
    localStorage.setItem('nametwo', player2name);

    if (player1name.match(z)) {
        if (player2name.match(z)) document.location.href = "battleship-setup.html";
        else alert("Player 2 nije u dobrom formatu!");
    }
    else alert("Player 1 nije u dobrom formatu!");
}