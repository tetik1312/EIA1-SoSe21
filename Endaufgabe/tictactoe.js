var buttonsDOMElement;
var leichtDOMElement;
var mittelDOMElement;
var schwerDOMElement;
var pointsDOMElement;
var ganzesFeld;
var playerYou = false;
// let playerComp: boolean = true;
var pointsComp = 0;
var pointsYou = 0;
var round = 1;
var zug = 0;
var feldlaenge;
buttonsDOMElement = document.querySelector("#buttons");
leichtDOMElement = document.querySelector("#leicht");
mittelDOMElement = document.querySelector("#mittel");
schwerDOMElement = document.querySelector("#schwer");
pointsDOMElement = document.querySelector("#points");
ganzesFeld = document.querySelector("#board");
leichtDOMElement.addEventListener("click", leichtErstellen);
mittelDOMElement.addEventListener("click", mittelErstellen);
schwerDOMElement.addEventListener("click", schwerErstellen);
var spielFelder = [];
//erstellt spielfeld für schwierigkeit: leicht und entfernt alle buttons
function leichtErstellen() {
    buttonsDOMElement.innerHTML = "";
    feldlaenge = 3;
    pointsErstellen();
    spielFelder.push("", "", "", "", "", "", "", "", "");
    ganzesFeld.classList.add("leichtesspielfeld");
    boardErstellen();
}
//erstellt spielfeld für schwierigkeit: mittel und entfernt alle buttons
function mittelErstellen() {
    buttonsDOMElement.innerHTML = "";
    feldlaenge = 4;
    pointsErstellen();
    spielFelder.push("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    ganzesFeld.classList.add("mittleresspielfeld");
    boardErstellen();
}
//erstellt spielfeld für schwierigkeit: schwer und entfernt alle buttons
function schwerErstellen() {
    buttonsDOMElement.innerHTML = "";
    feldlaenge = 5;
    pointsErstellen();
    spielFelder.unshift("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    ganzesFeld.classList.add("schweresspielfeld");
    boardErstellen();
}
// erstellt den Punktestand und die Spielrunde
function pointsErstellen() {
    pointsDOMElement.innerHTML = " Punkte Du: " + pointsYou + " | Punkte Computer: " + pointsComp + " | Spielrunde: " + round + "/" + feldlaenge;
    console.log("punktestand und spielrunde wurde erstellt");
}
function boardErstellen() {
    ganzesFeld.innerHTML = "";
    var _loop_1 = function (index_1) {
        var board = document.createElement("div");
        board.addEventListener("click", handleClick);
        function handleClick() {
            if (playerYou == true && board.innerHTML == "") {
                board.innerHTML = "<i class='fas fa-times'></i>";
                console.log("X gesetzt");
                playerYou = false;
                checkWin();
                if (zug < spielFelder.length) {
                    setTimeout(computer, 500);
                }
            }
        }
        board.classList.add("feld");
        ganzesFeld.appendChild(board);
    };
    for (var index_1 = 0; index_1 < spielFelder.length; index_1++) {
        _loop_1(index_1);
    }
    computer();
}
function computer() {
    if (playerYou == true) {
        return;
    }
    var spielbox = ganzesFeld.children;
    do {
        var randomIcon = Math.floor(Math.random() * spielFelder.length);
        if (spielbox.item(randomIcon).innerHTML == "") {
            spielbox.item(randomIcon).innerHTML = "<i class='far fa-circle'></i>";
            checkWin();
            playerYou = true;
        }
    } while (playerYou == false);
}
//
function checkWin() {
    zug++;
    var spielbox = ganzesFeld.children;
    var counter = 0;
    for (var i = 0; i < feldlaenge; i++) {
        for (var j = 1; j < feldlaenge; j++) {
            if (spielbox.item(i + feldlaenge * j).innerHTML == "") {
                continue;
            }
            if (spielbox.item(i).innerHTML == spielbox.item(i + feldlaenge * j).innerHTML) {
                counter += 1;
                if (counter >= feldlaenge - 1) {
                    roundCounter(spielbox.item(i).innerHTML);
                }
            }
        }
        counter = 0;
        for (var j = 1; j < feldlaenge; j++) {
            if (spielbox.item(i * feldlaenge + 1 * j).innerHTML == "") {
                continue;
            }
            if (spielbox.item(i * feldlaenge).innerHTML == spielbox.item(i * feldlaenge + 1 * j).innerHTML) {
                counter += 1;
                if (counter >= feldlaenge - 1) {
                    roundCounter(spielbox.item(i * feldlaenge).innerHTML);
                }
            }
        }
        counter = 0;
    }
    for (var j = 1; j < feldlaenge; j++) {
        if (spielbox.item(j * feldlaenge + j).innerHTML == "") {
            continue;
        }
        if (spielbox.item(0).innerHTML == spielbox.item(j * feldlaenge + j).innerHTML) {
            counter += 1;
            if (counter >= feldlaenge - 1) {
                roundCounter(spielbox.item(0).innerHTML);
            }
        }
    }
    counter = 0;
    for (var j = 1; j < feldlaenge; j++) {
        if (spielbox.item(j * feldlaenge - j).innerHTML == "") {
            continue;
        }
        if (spielbox.item(feldlaenge - 1).innerHTML == spielbox.item(j * feldlaenge - j).innerHTML) {
            counter += 1;
            if (counter >= feldlaenge - 1) {
                roundCounter(spielbox.item(feldlaenge - 1).innerHTML);
            }
        }
    }
    pointsYou = 0;
    pointsComp = 0;
}
function roundCounter(_winner) {
    console.log(_winner.search("fas fa-times"));
    if (_winner.search("fas fa-times") > 0) {
        pointsYou++;
    }
    console.log(_winner.search("far fa-circle"));
    if (_winner.search("far fa-circle") > 0) {
        pointsComp++;
    }
    console.log(_winner);
    if (zug >= spielFelder.length) {
        round += 1;
        boardErstellen();
    }
    pointsErstellen();
}
// function spielStand(): void {
//     ganzesFeld.innerHTML = "";
//     pointsDOMElement.innerHTML = "";
//
//     let winner: string;
//     if (pointsYou > pointsComp) {
//         winner = "Du hast gewonnen!";
//         if (playerComp == true) {
//             winner = "Computer hat gewonnen!";
//         }
//         else {
//             winner = "Es steht unentschieden!";
//         }
//     }
// }
//# sourceMappingURL=tictactoe.js.map