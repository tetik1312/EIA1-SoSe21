var buttonsDOMElement;
var leichtDOMElement;
var mittelDOMElement;
var schwerDOMElement;
var pointsDOMElement;
var ganzesFeld;
var playerYou = false;
var pointsComp = 0;
var pointsYou = 0;
var finalpointsComp = 0;
var finalpointsYou = 0;
var round = 0;
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
//ein array das alle freien felder enthält
var freiefelder = [];
function leichtErstellen() {
    buttonsDOMElement.innerHTML = "";
    feldlaenge = 3;
    ganzesFeld.classList.add("leichtesspielfeld");
    boardErstellen();
}
function mittelErstellen() {
    buttonsDOMElement.innerHTML = "";
    feldlaenge = 4;
    ganzesFeld.classList.add("mittleresspielfeld");
    boardErstellen();
}
function schwerErstellen() {
    buttonsDOMElement.innerHTML = "";
    feldlaenge = 5;
    ganzesFeld.classList.add("schweresspielfeld");
    boardErstellen();
}
function pointsErstellen() {
    pointsDOMElement.innerHTML = " Punkte Du: " + pointsYou + " | Punkte Computer: " + pointsComp + " | Spielrunde: " + round + "/" + feldlaenge;
}
//funktion erstellt ein leeres Spielfeld
function boardErstellen() {
    playerYou = false;
    round += 1;
    pointsErstellen();
    ganzesFeld.innerHTML = ""; //spielsteine werden 'entfernt'
    for (var index_1 = 0; index_1 < Math.pow(feldlaenge, 2); index_1++) { //eine schleife in der die felder die man ausfüllen kann erstellt werden. Menge ist abhängig vom Schwierigkeitsgrad
        var board = document.createElement("div");
        board.addEventListener("click", handleClick);
        board.innerHTML = "";
        freiefelder.push(board);
        board.classList.add("feld");
        ganzesFeld.appendChild(board);
    }
    computer();
}
//hier wird entschieden ob der user ein 'steinchen' setzten kann und setzt einen 'stein' wenn möglich 
function handleClick(_event) {
    var box = _event.currentTarget;
    if (playerYou == true && box.innerHTML == "") {
        box.innerHTML = "<i class='fas fa-times'></i>";
        freiefelder.splice(freiefelder.indexOf(box), 1); //hier werden die 'gefüllten' felder (in denen ein 'stein' liegt) aus dem array entfernt, damit es nur noch freie felder enthält  
        playerYou = false; //zug wurde vom nutzer gemacht (computer ist dran)
        checkWin();
        if (freiefelder.length > 0) {
            setTimeout(computer, 500); //der computer setzt nach einer halben sekunde seinen stein
        }
    }
}
//hier werden die 'steinchen' vom computer gesetzt
function computer() {
    if (playerYou == true) {
        return;
    }
    do {
        var randomNumber = Math.floor(Math.random() * freiefelder.length); //der computer setzt in ein zufälliges freies feld seine 'steine'
        if (freiefelder[randomNumber].innerHTML == "") {
            freiefelder[randomNumber].innerHTML = "<i class='far fa-circle'></i>";
            freiefelder.splice(randomNumber, 1); //aus dem array wird das gesetzte feld entfernt (sodass der computer nicht noch ein mal in das feld ein stein setzt)
            checkWin();
            playerYou = true;
        }
    } while (playerYou == false);
}
//hier wird überprüft ob sich drei gleiche symbole nebeneinander befinden (für einen punkt)
function checkWin() {
    pointsYou = finalpointsYou; //punkte der aktuellen runde werden auf die punkte der vorherigen runden gesetzt
    pointsComp = finalpointsComp;
    var spielbox = ganzesFeld.children;
    var counter = 0;
    for (var i_1 = 0; i_1 < feldlaenge; i_1++) {
        for (var j = 1; j < feldlaenge; j++) { //überprüfung der spalten
            if (spielbox.item(i_1 + feldlaenge * j).innerHTML == "") {
                continue;
            }
            if (spielbox.item(i_1).innerHTML == spielbox.item(i_1 + feldlaenge * j).innerHTML) {
                counter += 1;
                if (counter >= feldlaenge - 1) {
                    searchWinner(spielbox.item(i_1).innerHTML);
                }
            }
        }
        counter = 0;
        for (var j = 1; j < feldlaenge; j++) { //überprüfung der zeilen
            if (spielbox.item(i_1 * feldlaenge + 1 * j).innerHTML == "") {
                continue;
            }
            if (spielbox.item(i_1 * feldlaenge).innerHTML == spielbox.item(i_1 * feldlaenge + 1 * j).innerHTML) {
                counter += 1;
                if (counter >= feldlaenge - 1) {
                    searchWinner(spielbox.item(i_1 * feldlaenge).innerHTML);
                }
            }
        }
        counter = 0;
    }
    for (var j = 1; j < feldlaenge; j++) { //überprüfung der diagonalen (von links oben nach rechts unten)
        if (spielbox.item(j * feldlaenge + j).innerHTML == "") {
            continue;
        }
        if (spielbox.item(0).innerHTML == spielbox.item(j * feldlaenge + j).innerHTML) {
            counter += 1;
            if (counter >= feldlaenge - 1) {
                searchWinner(spielbox.item(0).innerHTML);
            }
        }
    }
    counter = 0;
    for (var j = 1; j < feldlaenge; j++) { //überprüfung der diagonalen (von rechts oben nach links unten)
        if (spielbox.item((j + 1) * (feldlaenge - 1)).innerHTML == "") {
            continue;
        }
        if (spielbox.item(feldlaenge - 1).innerHTML == spielbox.item((j + 1) * (feldlaenge - 1)).innerHTML) {
            counter += 1;
            if (counter >= feldlaenge - 1) {
                searchWinner(spielbox.item(feldlaenge - 1).innerHTML);
            }
        }
    }
    chackend();
}
//schaut ob in einer der felder ein punkt erzielt wurde (ob ein kreis oder kreuz gesetzt wurde) und gibt demenstprechend punkte
function searchWinner(_winner) {
    if (_winner.search("fas fa-times") > 0) {
        pointsYou++;
    }
    if (_winner.search("far fa-circle") > 0) {
        pointsComp++;
    }
}
//wird nach freien feldern überprüft, wenn es keine freien felder mehr gibt dann ist die runde vorbei
function chackend() {
    if (freiefelder.length <= 0) {
        finalpointsComp = pointsComp; //endpunkte werden gesetzt
        finalpointsYou = pointsYou;
        playerYou = true;
        if (round >= feldlaenge) { //wenn die maximale rundenanzahl erreicht wurde dann ist das spiel vorbei
            spielStand();
        }
        else {
            createbuttonNextRound();
            createButtonRestart();
        }
    }
    pointsErstellen();
}
//siehe funktionsname
function createbuttonNextRound() {
    var button = document.createElement("button");
    button.innerHTML = "Nächste Runde";
    button.classList.add("nextround");
    button.addEventListener("click", boardErstellen);
    ganzesFeld.appendChild(button);
}
//der gewinner des spiels wird bekannt gegeben
function spielStand() {
    var newdiv = document.createElement("div");
    newdiv.id = "winner";
    var winner;
    if (pointsYou > pointsComp) {
        winner = "Du hast gewonnen!";
    }
    else if (pointsYou < pointsComp) {
        winner = "Computer hat gewonnen!";
    }
    else {
        winner = "Es steht unentschieden!";
    }
    newdiv.innerHTML = winner;
    ganzesFeld.innerHTML = "";
    ganzesFeld.appendChild(newdiv);
    var button = document.createElement("button"); //hier wird der button nach dem spiel erstellt, mit der man zurück zur startseite kommt
    button.innerHTML = "zurück zur Startseite";
    button.classList.add("backtomenue");
    button.addEventListener("click", startseite);
    ganzesFeld.appendChild(button);
    createButtonRestart();
}
//seite wird neu geladen 
function startseite() {
    window.location.reload();
}
//punkte, rundenanzahl werden zurückgesetzt
function restartBoard() {
    round = 0;
    finalpointsComp = pointsComp = 0;
    finalpointsYou = pointsYou = 0;
    boardErstellen();
}
//siehe funktionsname
function createButtonRestart() {
    var button = document.createElement("button");
    button.innerHTML = "Neu starten";
    button.classList.add("restart");
    button.addEventListener("click", restartBoard);
    ganzesFeld.appendChild(button);
}
//# sourceMappingURL=tictactoe.js.map