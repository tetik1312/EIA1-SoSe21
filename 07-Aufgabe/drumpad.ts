function playSample(sounds:string) {
    var sound:HTMLAudioElement = new Audio(sounds); sound.play();
}

document.querySelector('.button1').addEventListener('click', function() { playSample("assets/A.mp3")});
document.querySelector('.button2').addEventListener('click', function() { playSample("assets/C.mp3")});
document.querySelector('.button3').addEventListener('click', function() { playSample("assets/F.mp3")});
document.querySelector('.button4').addEventListener('click', function() { playSample("assets/G.mp3")});
document.querySelector('.button5').addEventListener('click', function() { playSample("assets/hihat.mp3")});
document.querySelector('.button6').addEventListener('click', function() { playSample("assets/kick.mp3")});
document.querySelector('.button7').addEventListener('click', function() { playSample("assets/snare.mp3")});
document.querySelector('.button8').addEventListener('click', function() { playSample("assets/laugh-1.mp3")});
document.querySelector('.button9').addEventListener('click', function() { playSample("assets/laugh-2.mp3")});
document.querySelector('.playButton').addEventListener('click', function(){setInterval("assets/hihat.mp3")});

var beats: string[]  = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"];

var index = 0;

setInterval(function(beats:string) { 
    var beat:HTMLAudioElement = new Audio(beats[index]); beat.play();

    index = index + 1;

    //if(index == 3){
        //index = 0;
    //}

}, 500);
