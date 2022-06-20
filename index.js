

// document.firstElementChild.lastElementChild.querySelector("button").addEventListener("click", handleclick);
//
// function handleclick() {
//   var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// }
/*--------------ANTOHER WAY TO WRITE THE ABOVE CODE --------------------------*/

// document.firstElementChild.lastElementChild.querySelector("button").addEventListener("click", function handleclick() {
//   alert("ouch! You clicked Me :-) AGAIN");
// });
/*------------------------setting click for the second string --------------------------------------------------------------------------*/

// document.firstElementChild.lastElementChild.querySelectorAll("button")[1].addEventListener("click", function handlethat(){
//     alert('ouu you pressed me! you are naughty');
// });
//
// /*---------------------------creating the click for the third string --------------------------------*/
// document.firstElementChild.lastElementChild.querySelectorAll('button')[2].addEventListener ("click", handleclick);
//
// /*--------------------------next string at index 3--------------------------------------------------*/
// document.firstElementChild.lastElementChild.querySelectorAll('button')[3].addEventListener("click", handlemylightweight);
// function handlemylightweight(){
//   alert('Crooky! you have strucken again!');
// }
// /*----------------------------------next string at index4-------------------------------------------------*/
// document.firstElementChild.lastElementChild.querySelectorAll("button")[4].addEventListener("click", function standingtaller(){
//     alert("I am to Sexy for myself");
// });
// /*-------------------------------------next string at index 5---------------------------------------------------*/
// document.firstElementChild.lastElementChild.querySelectorAll('button')[5].addEventListener("click", handleclick);
// /*--------------------------------------------last string at index 6------------------------------------------------------*/
// document.firstElementChild.lastElementChild.querySelectorAll('button')[6].addEventListener("click", handlemylightweight);

/*--------------------------------------Easier loop Solutions----------------------------------------*/
/*--------------Detecting Button press-------------------*/


var numberOfDrusButtons= document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrusButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{

  var buttonInnerHTML=this.innerHTML;

  playsound(buttonInnerHTML);

  // switch (buttonInnerHTML) {
  //   case "w":
  //     var audio = new Audio('sounds/tom-1.mp3');
  //     audio.play();
  //     break;
  //
  //     case "a":
  //     var audio = new Audio('sounds/tom-2.mp3');
  //     audio.play();
  //     break;
  //
  //     case "s":
  //     var audio = new Audio('sounds/tom-3.mp3');
  //     audio.play();
  //
  //     break;
  //
  //     case "d":
  //     var audio = new Audio('sounds/tom-4.mp3');
  //     audio.play();
  //     break;
  //
  //     case"j":
  //     var audio = new Audio('sounds/snare.mp3');
  //     audio.play();
  //     break;
  //
  //     case"k":
  //     var audio = new Audio('sounds/kick-bass.mp3');
  //     audio.play();
  //     break;
  //     case"l":
  //     var audio = new Audio('sounds/crash.mp3');
  //     audio.play();
  //
  //
  //   default: console.log(buttonInnerHTML);
  //
  // }


});

}
/*------------------make the code respond to Keyboard press--------------------*/
document.addEventListener("keypress", function (event){

  playsound(event.key);

  buttonAnimation(buttonInnerHTML);
  buttonAnimation(event.key);
});

function playsound(key){
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

      case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

      case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();

      break;

      case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

      case"j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

      case"k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
      case"l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;


    default: console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey){
var activeButton =  document.querySelector("." + currentKey);
activeButton.classList.add(".pressed");

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// /*------------------------while loop ---------------------------*/
