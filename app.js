var audio=document.querySelector("#myaudio")

function playmusik(){
    audio.src="musik/musik1.mp3"
    audio.play()
}

function stopmusik(){
    audio.pause();
    audio.currentTime = 0;
}

function musik2(){
    audio.src="musik/musik2.mp3"
    audio.play()
}

function musik3(){
    audio.src="musik/musik3.mp3"
    audio.play()
}
