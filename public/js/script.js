
var jorginho = document.getElementById("jorginho");
var jorginhoBal = document.getElementById("jorginhoBal");
var popup = document.getElementById("popup");
var sui = new Audio('/sound/sui.mp3');
var crowd = document.getElementById("crowd");

var span = document.getElementsByClassName("close")[0];


const schiet = () => {
    jorginho.classList.add('schietcss');
    jorginhoBal.classList.add('balcss');
    popup.classList.add('popupcss');

    setTimeout(function(){
        sui.play();
        crowd.classList.add('snellercss');
    }, 1500)
}

jorginho.addEventListener("click", schiet);

window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
span.onclick = function() {
    popup.style.display = "none";
  }

