var buttonsDOMElement: HTMLElement;
var leichtDOMElement: HTMLElement;
var mittelDOMElement: HTMLElement;
var schwerDOMElement: HTMLElement;
var pointsDOMElement: HTMLElement;
var ganzesFeld: HTMLElement;
let playerYou: boolean = false;
let pointsComp: number = 0;
let pointsYou: number = 0;
let finalpointsComp: number = 0;
let finalpointsYou: number = 0;
let round: number = 0;
let feldlaenge: number;

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
var freiefelder: HTMLDivElement[] = [];


function leichtErstellen(): void {

    buttonsDOMElement.innerHTML = "";
    feldlaenge = 3;
    ganzesFeld.classList.add("leichtesspielfeld");
    boardErstellen();
}


function mittelErstellen(): void {

    buttonsDOMElement.innerHTML = "";
    feldlaenge = 4;
    ganzesFeld.classList.add("mittleresspielfeld");
    boardErstellen();
}


function schwerErstellen(): void {

    buttonsDOMElement.innerHTML = "";
    feldlaenge = 5;
    ganzesFeld.classList.add("schweresspielfeld");
    boardErstellen();
}


function pointsErstellen(): void {

    pointsDOMElement.innerHTML = " Punkte Du: " + pointsYou + " | Punkte Computer: " + pointsComp + " | Spielrunde: " + round + "/" + feldlaenge;

}
//funktion erstellt ein leeres Spielfeld
function boardErstellen(): void {
    playerYou = false;
    round += 1;
    pointsErstellen();
    ganzesFeld.innerHTML = ""; //spielsteine werden 'entfernt'
    for (let index: number = 0; index < Math.pow(feldlaenge, 2); index++) { //eine schleife in der die felder die man ausfüllen kann erstellt werden. Menge ist abhängig vom Schwierigkeitsgrad

        let board: HTMLDivElement = document.createElement("div");
        board.addEventListener("click", handleClick); 
        board.innerHTML = "";
        freiefelder.push(board);
        board.classList.add("feld");
        ganzesFeld.appendChild(board);
    }
    computer();
}
//hier wird entschieden ob der user ein 'steinchen' setzten kann und setzt einen 'stein' wenn möglich 
function handleClick(_event: Event): void {
    let box: HTMLDivElement = <HTMLDivElement>_event.currentTarget; 
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
function computer(): void {
    if (playerYou == true) {
        return;
    }
    do {
        var randomNumber: number = Math.floor(Math.random() * freiefelder.length); //der computer setzt in ein zufälliges freies feld seine 'steine'
        if (freiefelder[randomNumber].innerHTML == "") {
            freiefelder[randomNumber].innerHTML = "<i class='far fa-circle'></i>";
            freiefelder.splice(randomNumber, 1); //aus dem array wird das gesetzte feld entfernt (sodass der computer nicht noch ein mal in das feld ein stein setzt)
            checkWin();
            playerYou = true;
        }
    } while (playerYou == false); 

}

//hier wird überprüft ob sich drei gleiche symbole nebeneinander befinden (für einen punkt)
function checkWin(): void {

    pointsYou = finalpointsYou; //punkte der aktuellen runde werden auf die punkte der vorherigen runden gesetzt
    pointsComp = finalpointsComp;

    let spielbox: HTMLCollection = ganzesFeld.children;
    let counter: number = 0;
    for (let i: number = 0; i < feldlaenge; i++) {
        for (let j: number = 1; j < feldlaenge; j++) { //überprüfung der spalten
            if (spielbox.item(i + feldlaenge * j).innerHTML == "") {
                continue;
            }
            if (spielbox.item(i).innerHTML == spielbox.item(i + feldlaenge * j).innerHTML) { 
                counter += 1;
                if (counter >= feldlaenge - 1) {
                    searchWinner(spielbox.item(i).innerHTML);
                }
            }
        }

        counter = 0;
        for (let j: number = 1; j < feldlaenge; j++) { //überprüfung der zeilen
            if (spielbox.item(i * feldlaenge + 1 * j).innerHTML == "") {
                continue;
            }
            if (spielbox.item(i * feldlaenge).innerHTML == spielbox.item(i * feldlaenge + 1 * j).innerHTML) {
                counter += 1;
                if (counter >= feldlaenge - 1) {
                    searchWinner(spielbox.item(i * feldlaenge).innerHTML);
                }
            }
        }

        counter = 0;

    }
    for (let j: number = 1; j < feldlaenge; j++) { //überprüfung der diagonalen (von links oben nach rechts unten)
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
    for (let j: number = 1; j < feldlaenge; j++) { //überprüfung der diagonalen (von rechts oben nach links unten)
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
function searchWinner(_winner: string): void {

    if (_winner.search("fas fa-times") > 0) {
        pointsYou++;
    }

    if (_winner.search("far fa-circle") > 0) {

        pointsComp++;
    }

}
//wird nach freien feldern überprüft, wenn es keine freien felder mehr gibt dann ist die runde vorbei
function chackend(): void {
    if (freiefelder.length <= 0) {
        finalpointsComp = pointsComp; //endpunkte werden gesetzt
        finalpointsYou = pointsYou;
        playerYou = true;
        if (round >= feldlaenge) { //wenn die maximale rundenanzahl erreicht wurde dann ist das spiel vorbei
            spielStand();

        } else {
            createbuttonNextRound();
            createButtonRestart();
        }
    }
    pointsErstellen();
}
//siehe funktionsname
function createbuttonNextRound(): void {
    let button: HTMLButtonElement = document.createElement("button");
    button.innerHTML = "Nächste Runde";
    button.classList.add("nextround");
    button.addEventListener("click", boardErstellen);
    ganzesFeld.appendChild(button);
}
//der gewinner des spiels wird bekannt gegeben
function spielStand(): void {
    let newdiv: HTMLDivElement = document.createElement("div");
    newdiv.id = "winner";
    let winner: string;
    if (pointsYou > pointsComp) {
        winner = "Du hast gewonnen!";
    } else if (pointsYou < pointsComp) {
        winner = "Computer hat gewonnen!";
    }
    else {
        winner = "Es steht unentschieden!";
    }
    newdiv.innerHTML = winner;
    ganzesFeld.innerHTML = "";
    ganzesFeld.appendChild(newdiv);

    let button: HTMLButtonElement = document.createElement("button"); //hier wird der button nach dem spiel erstellt, mit der man zurück zur startseite kommt
    button.innerHTML = "zurück zur Startseite";
    button.classList.add("backtomenue");
    button.addEventListener("click", startseite);
    ganzesFeld.appendChild(button); 
    createButtonRestart();
}
//seite wird neu geladen 
function startseite(): void {
    window.location.reload();
}
//punkte, rundenanzahl werden zurückgesetzt
function restartBoard(): void {
    round = 0;
    finalpointsComp = pointsComp = 0;
    finalpointsYou = pointsYou = 0;
    boardErstellen();
}
//siehe funktionsname
function createButtonRestart(): void {
    let button: HTMLButtonElement = document.createElement("button");
    button.innerHTML = "Neu starten";
    button.classList.add("restart");
    button.addEventListener("click", restartBoard);
    ganzesFeld.appendChild(button);
}