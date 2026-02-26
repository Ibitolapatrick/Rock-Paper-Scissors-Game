//***FIRST ATTEMPT:****

// var imageRock= "rock"+randomNumber1+"left.png";
// var imageSourceRock1= "./images/"+imageRock;

// var finalHand= document.querySelectorAll("img")[0];
// finalHand.setAttribute("src",imageSourceRock1)

// //PAPER

// var imagePaper= "paper"+randomNumber1+"left.png";
// var imageSourcePaper1= "./images/"+imagePaper;

// var finalHand= document.querySelectorAll("img")[0];
// finalHand.setAttribute("src",imageSourcePaper1)

// //SCISSORS

// var imageScissors= "scissors"+randomNumber1+"left.png";
// var imageSourceScissors1= "./images/"+imageScissors;

// var finalHand= document.querySelectorAll("img")[0];
// finalHand.setAttribute("src",imageSourceScissors1)

//******************************************************************************************* */
//It wasn't working so I took another approaxh to it:

var randomNumber1= Math.floor(Math.random()*3)+1;
if (randomNumber1===1){
    var finalHand= document.querySelectorAll("img")[0];
    finalHand.setAttribute("src","./images/rock1left.png")

}else if (randomNumber1===2){
    var finalHand= document.querySelectorAll("img")[0];
    finalHand.setAttribute("src","./images/paper2left.png")
}else if(randomNumber1===3){
    var finalHand= document.querySelectorAll("img")[0];
    finalHand.setAttribute("src","./images/scissors3left.png")
}
//////////////////////////////////////////////////////////////////////////////////////

var randomNumber2= Math.floor(Math.random()*3)+1;
if (randomNumber2===1){
    var finalHand= document.querySelectorAll("img")[1];
    finalHand.setAttribute("src","./images/rock1right.png")

}else if (randomNumber2===2){
    var finalHand= document.querySelectorAll("img")[1];
    finalHand.setAttribute("src","./images/paper2right.png")
}else if(randomNumber2==3){
    var finalHand= document.querySelectorAll("img")[1];
    finalHand.setAttribute("src","./images/scissors3right.png")
}

//////////////////////////////////////////////////////////////////////////////////

if (randomNumber1===1 && randomNumber2===2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}else if (randomNumber1===1 && randomNumber2===3){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}else if (randomNumber1===2 && randomNumber2===1){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}else if (randomNumber1===3 && randomNumber2===1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}else if (randomNumber1===3 && randomNumber2===2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}else if (randomNumber1===2 && randomNumber2===3){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="It's a tie!"
}
