var Aufgabe8;
(function (Aufgabe8) {
    function playSample(sounds) {
        var sound = new Audio(sounds);
        sound.play();
    }
    var beats = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];
    var index = 0;
    document.querySelector(".button1").addEventListener("click", function () { playSample("assets/A.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("assets/C.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("assets/F.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("assets/G.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { playSample("assets/kick.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { playSample("assets/snare.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector(".playButton").addEventListener("click", function () {
        var interval = setInterval(function () {
            var beat = new Audio(beats[index]);
            beat.play();
            index = index + 1;
            if (index == 3) {
                index = 0;
            }
        }, 500);
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//variablen angelegt
var myPlay = document.getElementById("play");
var myPause = document.getElementById("pause");
//wenn auf play geklickt wird, wird die funktion toggleicons aufgerufen
myPlay.addEventListener("click", function () {
    toggleIcons(this, myPause);
});
//wenn auf pause geklickt wird, wird die funktion toggleicons aufgerufen
myPause.addEventListener("click", function () {
    toggleIcons(this, myPlay);
});
//uebergebe zwei elemente, mit dem ersten element wird die klasse 'is-hidden' geaddet und ist nich mehr sichtbar
//beim zweiten element wird die klasse 'is-hidden' removed und ist wieder sichtbar
function toggleIcons(firstHTMLElement, secondHTMLElement) {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}
function remix(remix) {
    //var remix: number = Math.floor((Math.random() * 3) + 1).toString;
    //var remix: string[] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];
}
//# sourceMappingURL=drumpad2.js.map