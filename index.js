//document.querySelector("button").addEventListener("click",handleClick);
//query passing handClick function as an input ☝

// function handleClick(){
//   alert("I got clicked!");
// }


// document.querySelector("button").addEventListener("click", function (){
//   alert("I got clicked");
//
// }); //query that uses an anonymous function





// var buttonArray = document.querySelectorAll("button"); //button array
// buttonArray.forEach(button => {
//   button.addEventListener("click",function(){
//     alert("I got clicked!");
//   });
// }); //This code works but may not be the solution she shows


// document.querySelectorAll(".drum").forEach(button =>{
//   button.addEventListener("click", function(){
//     alert("I got clicked!");
//   });
// }); //This code also worked and is shorter then the code below, probably what Angela is going to do 🙌
// //And its 5 lines of code, counting the closing brackets and parenthesis



// //she does choose to go with a for loop implementation which is what I was trying to do earlier
// var buttonArray = document.querySelectorAll(".drum").length; //targettin all the buttons we want by adding the drum class
// for (var i = 0; i < buttonArray; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//     //alert("I got clicked");
//     var audio = new Audio('sounds/tom_1.wav'); //audio files are corrupt, need to re-download when I get home 🤔
//     // Need to figure out if the audio files I downloaded are corrupt and I just need to redownload or, could be that the files are only supported by MAC laptop
//     audio.play();
//
//   }); //query that uses an anonymous function
// } //I was so close smh 😑




//Detecting Button Press 📡

//she does choose to go with a for loop implementation which is what I was trying to do earlier
var buttonArray = document.querySelectorAll(".drum").length; //targettin all the buttons we want by adding the drum class
for (var i = 0; i < buttonArray; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //alert("I got clicked");
    //we can figure out which button triggered the event by using the keyword "this", "this" is basically the identity of the button that triggered the event listener
    //console.log(this);
    //this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    // switch (buttonInnerHTML) {
    //
    //   case "w":
    //     var snare = new Audio('sounds/snare.wav');
    //     snare.play();
    //     break;
    //   case "a":
    //     var tom1 = new Audio('sounds/tom_1.wav');
    //     tom1.play();
    //   case "s":
    //     var tom2 = new Audio('sounds/tom_2.wav');
    //     tom2.play();
    //   case "d":
    //     var tom3 = new Audio('sounds/tom_3.wav');
    //     tom3.play();
    //   case "j":
    //     var tom4 = new Audio('sounds/tom_4.wav');
    //     tom4.play();
    //   case "k":
    //     var drumKick = new Audio('sounds/drum_kick.wav');
    //     drumKick.play()
    //   case "l":
    //     var bassKick = new Audio('sounds/bass_kick.wav');
    //     bassKick.play();
    //
    //   default:
    //     console.log(buttonInnerHTML);
    //
    // }

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  }); //query that uses an anonymous function
} //I was so close smh 😑



  function makeSound(character){
    switch (character) {

      case "w":
        var snare = new Audio('sounds/snare.wav');
        snare.play();
        break;
      case "a":
        var tom1 = new Audio('sounds/tom_1.wav');
        tom1.play();
      case "s":
        var tom2 = new Audio('sounds/tom_2.wav');
        tom2.play();
      case "d":
        var tom3 = new Audio('sounds/tom_3.wav');
        tom3.play();
      case "j":
        var tom4 = new Audio('sounds/tom_4.wav');
        tom4.play();
      case "k":
        var drumKick = new Audio('sounds/drum_kick.wav');
        drumKick.play()
      case "l":
        var bassKick = new Audio('sounds/bass_kick.wav');
        bassKick.play();

      default:
        console.log(character);

    }

  }


  //Detecting Key board press ⌨

  document.addEventListener('keydown', function(event){
    //theres also the option to pass in a parameter, and we can call the parameter "event", or "e", but essentially what it allows us to do is
    //tap into the event that triggered the event listener
    //alert("key was pressed");
    //console.log(event); //so now lets console log the event and see what we get back in the browser
    makeSound(event.key);

    buttonAnimation(event.key);


  });



  function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed", 1050); //removing pressed class so the button goes back to original state
    }); //first parameter is the function we want to be executed, and we will be using an anonymous function
  }
