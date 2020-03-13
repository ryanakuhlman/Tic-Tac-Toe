var choice  = document.getElementsByClassName("squares")[0].id;
var squares = document.getElementsByClassName("squares");

function downClick() {
  // this isn't called
  var x = document.getElementsByClassName("squares");
  x[0].style.backgroundColor = "red";
}

function userAnswer() {

}

function clickTest() {
  for(x = 0; x < squares.length; x++) {
    var user = document.getElementsByClassName("squares")[x].id;
  }
  var i = document.getElementById(user)
  console.log("You clicked " + i + " square");
}
