
var jorginho = document.getElementById("jorginho");
var jorginhoBal = document.getElementById("jorginhoBal");
var popup = document.getElementById("popup");
var sui = new Audio('/sound/sui.mp3');
var crowdsound = new Audio('/sound/crowd.mp3');
var crowd = document.getElementById("crowd");
var mbappeboard = document.getElementById("mbappeboard");
let math = Math.random() * 100;
var ronaldo = document.getElementById("ronaldo");
var span = document.getElementsByClassName("close")[0];
var keepertje = document.getElementById("keepertje");

const schiet = () => {
    jorginho.classList.add('schietcss');
    jorginhoBal.classList.add('balcss');
    popup.classList.add('popupcss');
    
    setTimeout(function(){
        crowdsound.play();

        crowd.classList.add('snellercss');

        if (math < 25)
        mbappeboard.classList.add('bijcss');
        
        else if (math < 50)
        mbappeboard.classList.add('ronaldocss');

        else if (math < 75) 
        mbappeboard.classList.add('mbappecss');

        else{
            setTimeout(function(){
                sui.play();
            }, 600)
            ronaldo.classList.add('ronaldoanimatie');
            mbappeboard.classList.add('ronaldosuicss');
        }
    }, 1500)
    setTimeout(function(){
        keepertje.classList.add('keepertjeani');
    }, 900)
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

