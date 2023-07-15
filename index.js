// // Randomly change the dice images on left dice
// var random_Number_1 = Math.random();                               //  0 - 0.999999...
// random_Number_1 = Math.floor(random_Number_1 * 6);                    //  Math.floor((0 - 0.99999)*6)  =  Math.floor(0 - 0.5999)  =   0 - 5
// random_Number_1 = random_Number_1 + 1;                             //  1 - 6 
 
// var random_image_1 = "./images/dice" + random_Number_1 + ".png";  

// document.querySelector(".img1").setAttribute("src",random_image_1);


// // Randomly change the dice images on right dice
// var random_Number_2 = Math.random();                               //  0 - 0.999999...
// random_Number_2 = Math.floor(random_Number_2 * 6);                 //  Math.floor((0 - 0.99999)*6)  =  Math.floor(0 - 0.5999)  =   0 - 5
// random_Number_2 = random_Number_2 + 1;                             //  1 - 6 
 
// var random_image_2 = "./images/dice" + random_Number_2 + ".png";

// document.querySelector(".img2").setAttribute("src",random_image_2);


// //if value of Player1 is greater than player2 then player1 wins , else if value of Player1 is smaller than player2 then player2 wins , else it is a draw.

// if(random_Number_1 > random_Number_2){
//     document.querySelector("h1").textContent = "Player 1 Wins!";
// }

// else if(random_Number_1 < random_Number_2){
//     document.querySelector("h1").textContent = "Player 2 Wins!";
// }

// else{
//     document.querySelector("h1").textContent = "Draw!";
// }




// OR



var Player1 = prompt("Enter the name of Player 1");
var Player2 = prompt("Enter the name of Player 2");

document.querySelector(".player1").textContent = Player1;
document.querySelector(".player2").textContent = Player2;


function Random_dice_number(){

    var random_Number = Math.random();                              
    random_Number = Math.floor(random_Number * 6);                 
    random_Number = random_Number + 1;                             
    return random_Number;
}

function set_dice_image(dice_number_1,dice_number_2){

    var dice_image_1 = "./images/dice" + dice_number_1 + ".png";  
    var dice_image_2 = "./images/dice" + dice_number_2 + ".png";

    document.querySelector(".img1").setAttribute("src",dice_image_1);
    document.querySelector(".img2").setAttribute("src",dice_image_2);
}

function Declare_winner(dice_number_1,dice_number_2){

    if(dice_number_1 > dice_number_2){
        document.querySelector("h1").textContent = Player1 + " Wins!";
    }

    else if(dice_number_1 < dice_number_2){
        document.querySelector("h1").textContent = Player2 + " Wins!";
    }

    else{
        document.querySelector("h1").textContent = "Draw!";
    }      
}

function Roll_Dice(){

    var dice_1 = Random_dice_number();
    var dice_2 = Random_dice_number();

    set_dice_image(dice_1,dice_2);
    Declare_winner(dice_1,dice_2);
}

// document.querySelector(".play").addEventListener("click",Roll_Dice);

document.querySelector(".play").onclick = function(){
    Roll_Dice()
};