var keysPressed = [];
var keyCode = {1: "x", 2: "o"}

$(document).keydown(function(e) {
  if(e.keyCode === 1 || e.keyCode === 2) {
    console.log("You pressed: " + keyCode[e.keyCode]);
  }
});

$(document).ready(function(){
    window.addEventListener("keypress", myEventHandler, false);
});

function myEventHandler(e){
    var keyCode = e.keyCode;
    if(keyCode == 88){
        console.log("You pressed W!");
        alert("You pressed W!");
    }
};
