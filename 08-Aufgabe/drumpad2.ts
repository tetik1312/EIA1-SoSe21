namespace Aufgabe8 {
    function playSample(sounds: string): void {
        var sound: HTMLAudioElement = new Audio(sounds);
        sound.play();
    }


    var beats: string[] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];

    var index: number = 0;

    document.querySelector(".button1").addEventListener("click", function (): void { playSample("assets/A.mp3"); });
    document.querySelector(".button2").addEventListener("click", function (): void { playSample("assets/C.mp3"); });
    document.querySelector(".button3").addEventListener("click", function (): void { playSample("assets/F.mp3"); });
    document.querySelector(".button4").addEventListener("click", function (): void { playSample("assets/G.mp3"); });
    document.querySelector(".button5").addEventListener("click", function (): void { playSample("assets/hihat.mp3"); });
    document.querySelector(".button6").addEventListener("click", function (): void { playSample("assets/kick.mp3"); });
    document.querySelector(".button7").addEventListener("click", function (): void { playSample("assets/snare.mp3"); });
    document.querySelector(".button8").addEventListener("click", function (): void { playSample("assets/laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function (): void { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", function (): void {

        var interval: number = setInterval(function (): void {
            var beat: HTMLAudioElement = new Audio(beats[index]);
            beat.play();

            index = index + 1;

            if (index == 3) {
                index = 0;
            }

        },                                 500);
    });
}

//variablen angelegt
var myPlay: HTMLElement = document.getElementById("play");
var myPause: HTMLElement = document.getElementById("pause");

//wenn auf play geklickt wird, wird die funktion toggleicons aufgerufen
myPlay.addEventListener("click", function (): void {
    toggleIcons(this, myPause);
});
//wenn auf pause geklickt wird, wird die funktion toggleicons aufgerufen
myPause.addEventListener("click", function (): void {
    toggleIcons(this, myPlay);
});

//uebergebe zwei elemente, mit dem ersten element wird die klasse 'is-hidden' geaddet und ist nich mehr sichtbar
//beim zweiten element wird die klasse 'is-hidden' removed und ist wieder sichtbar
function toggleIcons(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}


//deleteButton.addEventListener("click", function(): void {

//});

function remix (remix: string): void {
//var remix: number = Math.floor((Math.random() * 3) + 1).toString;
//var remix: string[] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];

}