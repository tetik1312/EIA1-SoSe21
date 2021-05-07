function playSample(sounds) {
    var sound = new Audio(sounds);
    sound.play();
}
var beats = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];
var index = 0;
document.querySelector('.button1').addEventListener('click', function () { playSample("assets/A.mp3"); });
document.querySelector('.button2').addEventListener('click', function () { playSample("assets/C.mp3"); });
document.querySelector('.button3').addEventListener('click', function () { playSample("assets/F.mp3"); });
document.querySelector('.button4').addEventListener('click', function () { playSample("assets/G.mp3"); });
document.querySelector('.button5').addEventListener('click', function () { playSample("assets/hihat.mp3"); });
document.querySelector('.button6').addEventListener('click', function () { playSample("assets/kick.mp3"); });
document.querySelector('.button7').addEventListener('click', function () { playSample("assets/snare.mp3"); });
document.querySelector('.button8').addEventListener('click', function () { playSample("assets/laugh-1.mp3"); });
document.querySelector('.button9').addEventListener('click', function () { playSample("assets/laugh-2.mp3"); });
document.querySelector('.playButton').addEventListener('click', function () {
    var interval = setInterval(function () {
        var beat = new Audio(beats[index]);
        beat.play();
        index = index + 1;
        if (index == 3) {
            index = 0;
        }
    }, 500);
});
//# sourceMappingURL=drumpad.js.map