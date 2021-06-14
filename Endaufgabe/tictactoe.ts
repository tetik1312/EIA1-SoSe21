var board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];



var leichtDOMElement: HTMLElement;
var mittelDOMElement: HTMLElement;
var schwerDOMElement: HTMLElement;
var pointsDOMElement: HTMLElement;
var roundDOMElement: HTMLElement;

leichtDOMElement = document.querySelector("#leicht");
mittelDOMElement = document.querySelector("#mittel");
schwerDOMElement = document.querySelector("#schwer");
pointsDOMElement = document.querySelector("#points");
roundDOMElement = document.querySelector("#round");

leichtDOMElement.addEventListener("click", leichtErstellen);
mittelDOMElement.addEventListener("click", mittelErstellen);
schwerDOMElement.addEventListener("click", schwerErstellen);


//erstellt spielfeld für schwierigkeit: leicht und entfernt alle buttons
function leichtErstellen(): void {

    leichtDOMElement.innerHTML = "";

    let leicht: HTMLElement = document.createElement("div");
    leicht.classList.add("board");
    


    pointsErstellen();
    roundErstellen();

    document.querySelector("#leicht").remove();
    document.querySelector("#mittel").remove();
    document.querySelector("#schwer").remove();
}

//erstellt spielfeld für schwierigkeit: mittel und entfernt alle buttons
function mittelErstellen(): void {

    mittelDOMElement.innerHTML = "";

    let mittel: HTMLElement = document.createElement("div");
    mittel.classList.add("feld");


    pointsErstellen();
    roundErstellen();

    document.querySelector("#leicht").remove();
    document.querySelector("#mittel").remove();
    document.querySelector("#schwer").remove();
}

//erstellt spielfeld für schwierigkeit: schwer und entfernt alle buttons
function schwerErstellen(): void {

    schwerDOMElement.innerHTML = "";

    let schwer: HTMLElement = document.createElement("div");
    schwer.classList.add("feld");


    pointsErstellen();
    roundErstellen();

    document.querySelector("#leicht").remove();
    document.querySelector("#mittel").remove();
    document.querySelector("#schwer").remove();
}

//erstellt den Punktestand
function pointsErstellen(): void {
    var points: number = 0;


    pointsDOMElement.innerHTML = " Punktestand: " + points;
    console.log("punktestand hat geklappt");
}
//erstellt den stand der Spielrunde
function roundErstellen(): void {
    var round: number = 0;


    roundDOMElement.innerHTML = " Spielrunde: " + round;
    console.log("spielrunde hat geklappt");
}



// var myKreis: HTMLElement = document.getElementById("kreis");
// var myKreuz: HTMLElement = document.getElementById("kreuz");

// //wenn auf play geklickt wird, wird die funktion toggleicons aufgerufen
// myKreis.addEventListener("click", function (): void {
//     toggleIcons(this, myKreuz);
// });
// //wenn auf pause geklickt wird, wird die funktion toggleicons aufgerufen
// myKreuz.addEventListener("click", function (): void {
//     toggleIcons(this, myKreis);
// });

// //uebergebe zwei elemente, mit dem ersten element wird die klasse 'is-hidden' geaddet und ist nich mehr sichtbar
// //beim zweiten element wird die klasse 'is-hidden' removed und ist wieder sichtbar
// function toggleIcons(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
//     firstHTMLElement.classList.add("is-hidden");
//     secondHTMLElement.classList.remove("is-hidden");
// }



//toggle mit 'leichtbutton'
// var myLeichtbutton: HTMLElement = document.getElementById("leicht");
// var myLeichtspielfeld: HTMLElement = document.getElementById("board");

// myLeichtbutton.addEventListener("click", function (): void {
//     toggleLeicht(this, myLeichtbutton);
// });

// myLeichtspielfeld.addEventListener("click", function (): void {
//     toggleLeicht(this, myLeichtspielfeld);
// });

// function toggleLeicht(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
//     firstHTMLElement.classList.remove("is-hidden");
//     secondHTMLElement.classList.add("is-hidden");
// }

