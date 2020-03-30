/*
alert("working...");
console.log($("h1"));
*/

//array of game pattern
var gamePattern = [];

//array of clicked button patterns
var userClickedPattern = [];

var level = -1;

//sound audio object instance
//var audioColour = new Audio();

//sound colour location
var soundColour = "";

//array of colors
var buttonColours = ["red", "blue","green","yellow"];

//random number function
function nextSequence()
{

  var randomNumber = Math.floor((Math.random() * 3));

  //when game starts
  if(level >= 1)
  {
    $("h1").html("Level "+level);

  }
  else{
      $("h1").html("Press A Key to Start ");
  }

  level++;



  return randomNumber;
}

//select random button colour
var randomChosenColour = buttonColours[nextSequence()];

//display pattern
displayPattern();


/*
//select button as of randomChosenColour
//$("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
//soundColour = "sounds/" + randomChosenColour +".mp3";
// var audioColour = new Audio("sounds/blue.mp3");
// audioColour.play();
*/



// window.addEventListener("load", function(){
//    $("h1").html("Level "+level);
// } )

//detect button click

$("div[type = button]").click(btnHandler);

//display pattern
//displayPattern();


//detect keyboard pressed
var hasStarted = false;
var triggered = 0;
$(document).keypress(function(){
 //first call
  triggered++;

    if((!hasStarted) && (triggered == 1))
      {
        nextSequence();

        //console.log(triggered); //debug trigger
      }
      else
    {
      hasStarted = false;
      nextSequence();
        //$("h1").html("Game Over, Press A Key to Start ");

    }


});



//add color to game pattern array
function displayPattern()
{

  randomChosenColour = buttonColours[nextSequence()]

  gamePattern.push(randomChosenColour);

  //debug gamePattern
  console.log(gamePattern);

}

//check answer
function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel] == gamePattern.pop())
  {
     console.log("success");

     console.log("length of gamePattern-> "+gamePattern.length);

     if(gamePattern.length == 3)
    {
       setTimeout(nextSequence(), 1000);
       applyCorrect();
       // level = 0;
       //  $("h1").html("Congratulations! , Press A Key to Start ");
        startOver();
       //clear userClickedPattern


    }

    }
    else{
      wrongSound = "sounds/" + "wrong" +".mp3";
      var audio = new Audio(wrongSound);
      audio.play();
      applyWrong();
      startOver();

      //thinking space

      //console.log("wrong");
    }
      setTimeout(removeWrong,200); // remove wrong option class
      setTimeout(removeCorrect,200); //remove correct option class





}

//start game variables
function startOver(){
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  //$("h1").html("Game Over, Press A Key to Start ");

}
//apply success option style
function applyCorrect()
{
  $("body").addClass("game-success");
}
//remove success option style
function removeCorrect()
{
  $("body").removeClass("game-success");
}

//apply wrong option style
function applyWrong()
{
  $("body").addClass("game-over");
}

//remove wrong option style
function removeWrong(){
  $("body").removeClass("game-over");
}

//button handler
function btnHandler(){

  var userChosenColour;
  userChosenColour = this.id;

//  displayPattern();
  userClickedPattern.push(userChosenColour);

  //display pattern for user input


//debug clicked patterns
console.log("UserClicked");
console.log(userClickedPattern);

 playSound(userChosenColour);

  //check pattern for success or failure.
  if((userClickedPattern.length - 1) == 3 )
    checkAnswer(userClickedPattern.length - 1);


    displayPattern();
}

function playSound(name){
   var soundColour = "sounds/" + name +".mp3";
   var audioColour = new Audio(soundColour);
    audioColour.play();
  /*
  switch (name) {
    case "blue":
    $("#"+name).fadeOut("fast").fadeIn("fast");
    //play sound for corresponding buttonColour
    soundColour = "sounds/" + name +".mp3";
    var audioColour = new Audio(soundColour);
    audioColour.play();
      break;

    case "red":
    $("#"+name).fadeOut("fast").fadeIn("fast");
    //play sound for corresponding buttonColour
    soundColour = "sounds/" + name +".mp3";
     var audioColour = new Audio(soundColour);
    audioColour.play();
      break;

    case "yellow":
    $("#"+name).fadeOut("fast").fadeIn("fast");
    //play sound for corresponding buttonColour
    soundColour = "sounds/" + name +".mp3";
  var audioColour = new Audio(soundColour);
  audioColour.play();
      break;

    case "green":
    $("#"+name).fadeOut("fast").fadeIn("fast");
    //play sound for corresponding buttonColour
    soundColour = "sounds/" + name +".mp3";
   var audioColour = new Audio(soundColour);
    audioColour.play();
      break;

      default:
      console.log(name);
} */
}
