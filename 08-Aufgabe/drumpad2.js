var Aufgabe8;
(function (Aufgabe8) {
    function playSample(sounds) {
        var sound = new Audio(sounds);
        sound.play();
    }
    var beats = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];
    var index = 0;
    var interval;
    document.querySelector(".button1").addEventListener("click", function () { playSample("assets/A.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("assets/C.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("assets/F.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("assets/G.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { playSample("assets/kick.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { playSample("assets/snare.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", function () {
        interval = setInterval(function () {
            playSample(beats[index]);
            index = index + 1;
            if (index == beats.length) {
                index = 0;
            }
        }, 500);
    });
    var sounds = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    document.querySelector("#remix").addEventListener("click", function () { remixPlay(); });
    function remixPlay() {
        deleteButton();
        for (var index_1 = 0; index_1 <= 4; index_1++) {
            var random = Math.floor(Math.random() * 8);
            beats[index_1] = sounds[random];
            console.log(random);
        }
        interval = setInterval(function () {
            playSample(beats[index]);
            index = index + 1;
            if (index == beats.length) {
                index = 0;
            }
        }, 500);
    }
    document.querySelector("#delete").addEventListener("click", function () { deleteButton(); });
    function deleteButton() {
        beats.length = 0;
        myStopFunction();
    }
    document.querySelector("#pause").addEventListener("click", myStopFunction);
    function myStopFunction() {
        clearInterval(interval);
    }
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
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=drumpad2.js.map