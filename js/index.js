window.onload = iniciar;

function iniciar() {
    var navBar = document.getElementById("nav-bar");
    var main = document.getElementsByTagName("main")[0];
    var navButton = document.getElementById("nav-button");
    var aspectBtn = document.getElementById("aspectoBtn");
    var navBar = document.getElementById("nav-bar")


    navButton.addEventListener("click", function () {
        navBar.classList.toggle("nav-bar-hidden");
        main.classList.toggle("main-full");
    })

    aspectBtn.addEventListener("click", function (){
        console.log("x")
        navBar.classList.toggle("dark");
    })
}


new Splide('.splide').mount();
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide').mount();
});

var elms = document.getElementsByClassName('splide');
for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i]).mount();
}


var sound = new Howl({
    src: ['sound/audio-1.mp3']
});

var btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener("click", function () {
    sound.play()
    btnPlay.className = "inhabilitar";
    btnPause.className = "habilitar"
});

var btnPause = document.getElementById("btnPause");
btnPause.addEventListener("click", function () {
    sound.pause()
    btnPlay.className = "habilitar";
    btnPause.className = "inhabilitar"
});



gsap.set(".logo", {
    backgroundColor: "lightblue"
})

gsap.to(".logo", {
    rotation: 360, x: 10, duration: 5, repeat: -1, yoyo: true,
    backgroundColor: "red", borderRadius: "20", border: "5px solid white",
})



var myForm = document.getElementById("myForm");

pristine = new Pristine(myForm);

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = pristine.validate();
   myForm.classList .add("was-validated");

   myForm.addEventListener('reset', function (e){
    myForm.classList .remove("was-validated");
   });
});


