var buttonsDOMElement: HTMLElement;
var leichtDOMElement: HTMLElement;
var mittelDOMElement: HTMLElement;
var schwerDOMElement: HTMLElement;
var pointsDOMElement: HTMLElement;
var ganzesFeld: HTMLElement;
let playerYou: boolean = false;
// let playerComp: boolean = true;
let pointsComp: number = 0;
let pointsYou: number = 0;
let round: number = 1;
let zug: number = 0;
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




var spielFelder: string[] = [];

//erstellt spielfeld für schwierigkeit: leicht und entfernt alle buttons
function leichtErstellen(): void {

    buttonsDOMElement.innerHTML = "";
    feldlaenge = 3;

    pointsErstellen();

    spielFelder.push("", "", "", "", "", "", "", "", "");

    ganzesFeld.classList.add("leichtesspielfeld");


    boardErstellen();
}

//erstellt spielfeld für schwierigkeit: mittel und entfernt alle buttons
function mittelErstellen(): void {

    buttonsDOMElement.innerHTML = "";
    feldlaenge = 4;

    pointsErstellen();

    spielFelder.push("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    ganzesFeld.classList.add("mittleresspielfeld");
    boardErstellen();
}

//erstellt spielfeld für schwierigkeit: schwer und entfernt alle buttons
function schwerErstellen(): void {

    buttonsDOMElement.innerHTML = "";
    feldlaenge = 5;

    pointsErstellen();

    spielFelder.unshift("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    ganzesFeld.classList.add("schweresspielfeld");
    boardErstellen();
}

// erstellt den Punktestand und die Spielrunde
function pointsErstellen(): void {

pointsDOMElement.innerHTML = " Punkte Du: " + pointsYou + " | Punkte Computer: " + pointsComp + " | Spielrunde: " + round + "/" + feldlaenge;

console.log("punktestand und spielrunde wurde erstellt");
}

function boardErstellen(): void {
    
    ganzesFeld.innerHTML = "";
    for (let index: number = 0; index < spielFelder.length; index++) {

        let board: HTMLElement = document.createElement("div");
        board.addEventListener("click", handleClick);

        function handleClick(): void {

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
    }
    computer();
}



function computer(): void {
    if (playerYou == true) {
        return;
    }
    let spielbox: HTMLCollection = ganzesFeld.children;
    do {
        var randomIcon: number = Math.floor(Math.random() * spielFelder.length);
        if (spielbox.item(randomIcon).innerHTML == "") {
            spielbox.item(randomIcon).innerHTML = "<i class='far fa-circle'></i>";
            checkWin();
            playerYou = true;
        }
    } while (playerYou == false);
    
}

//
function checkWin(): void {
    zug++;
    let spielbox: HTMLCollection = ganzesFeld.children;
    let counter: number = 0;
    for (let i: number = 0; i < feldlaenge; i++) {
        for (let j: number = 1; j < feldlaenge; j++) {
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
        for (let j: number = 1; j < feldlaenge; j++) {
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
    for (let j: number = 1; j < feldlaenge; j++) {
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
    for (let j: number = 1; j < feldlaenge; j++) {
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

function roundCounter(_winner: string): void {
    console.log(_winner.search("fas fa-times"));
    if (_winner.search("fas fa-times") > 0) {
        pointsYou ++;
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