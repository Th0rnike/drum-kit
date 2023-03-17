window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const k = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return "not such tone";
    audio.currentTime=0;
    audio.play();
    k.classList.add("playing");
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return false;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));