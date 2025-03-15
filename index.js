//alert("Hello");

//document.querySelector("button").addEventListener("click",ButtonClicked);

var len1 = document.querySelectorAll(".drum").length;
for (var i = 0; i < len1; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    var s1 = this.innerHTML;
    keyPressed(s1);
    ButtonAnimation(s1);
  });
}
//keyboard events
document.addEventListener("keydown", function (e) {
  //alert("Key pressed");
  console.log(e);
  keyPressed(e.key);
  ButtonAnimation(e.key);
});

function keyPressed(s) {
  switch (s) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(s);
  }
}

function ButtonAnimation(CurrentKey) {
  var activeButton = document.querySelector("." + CurrentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
