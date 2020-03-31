/*
alert("working...");
console.log($("h1"));
*/

//prompt for mobile user
var input = prompt("Mobile User\n Enter 1 or Cancel");

//array of game pattern
var gamePattern = [];
var limit  = 4;
//array of clicked button patterns
var userClickedPattern = [];

var level = 1;

var hasStarted = false;



//array of colors
var buttonColours = ["red", "blue","green","yellow"];




/*
//select button as of randomChosenColour
//$("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
//soundColour = "sounds/" + randomChosenColour +".mp3";
// var audioColour = new Audio("sounds/blue.mp3");
// audioColour.play();
*/





//detect keyboard pressed for large screens
$(document).keypress(function(){
 //first call
 if (!hasStarted) {
   $("#level-title").text("Level " + level);
   nextSequence();
   hasStarted = true;
 }
  /*triggered++;

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

    }*/


});

//for mobile user
if(input === 1)
{

  if (!hasStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    hasStarted = true;
  }
}else{
  //detect button click
  $("div[type = button]").click(btnHandler);
}
//$("div[type = button]").click(btnHandler);



//random number function
function nextSequence()
{
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor((Math.random() * 3));
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   //// DEBUG:
   console.log("GamePattern");
   console.log(gamePattern);

   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  //when game starts
/*  if(level >= 1)
  {
    $("h1").html("Level "+level);

  }
  else{
      $("h1").html("Press A Key to Start ");
  }

  level++;
  */



  //return randomNumber;
}


//check answer
function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
  {
     console.log("success");

     console.log("length of gamePattern-> "+gamePattern.length);

     if(gamePattern.length === userClickedPattern.length )
    {
      console.log("length of userClickedPattern->"+userClickedPattern.length);
      if(limit == userClickedPattern.length)
      {
        playSound("yeehaw");
        $("#level-title").text("Congratulations 🙌");
        animateFlash();
        applyCorrect();
        setTimeout(removeCorrect,200); //remove correct option class
      //  startOver();
        //startOver();
      }
       setTimeout(nextSequence(), 1000);


       // level = 0;
       //  $("h1").html("Congratulations! , Press A Key to Start ");
        //startOver();
       //clear userClickedPattern


    }

    }
    else{
      playSound("wrong");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      applyWrong();
      setTimeout(removeWrong,200); // remove wrong option class

      startOver();
      //thinking space

      //console.log("wrong");
    }






}

//start game variables
function startOver(){
  //userClickedPattern = [];
  gamePattern = [];
  level = 0;
  hasStarted = false;
//  limit = 0;
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



userClickedPattern.push(userChosenColour);




//debug clicked patterns
console.log("UserClicked");
console.log(userClickedPattern);

 playSound(userChosenColour);
 animateFlash(userChosenColour);

  //check pattern for success or failure.
  //if((userClickedPattern.length - 1) == 3 )
  checkAnswer(userClickedPattern.length - 1);


  //  displayPattern();
}

//playsound effect
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

//animate flash effect
function animateFlash(name)
{
     $("#"+name).fadeOut("fast").fadeIn("fast");
}
