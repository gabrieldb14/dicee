var randomNumber1;
var randomNumber2;
var dice1 = document.getElementById("img1");
var dice2 = document.getElementById("img2");
var title = document.getElementById("title");

function randomNumber(){
    randomNumber1 = "images/dice"+(Math.floor(Math.random()*6) + 1)+".png";
    console.log(randomNumber1);
    randomNumber2 = "images/dice"+(Math.floor(Math.random()*6) + 1)+".png";
    console.log(randomNumber2);
}

function changeDice(){
    dice1.setAttribute("src", randomNumber1);
    dice2.setAttribute("src", randomNumber2);
}

function diceWinner(){
    if (randomNumber1 > randomNumber2){
        title.innerText = "Jogador 1 Venceu!";
    }else if(randomNumber1 < randomNumber2){
        title.innerText = "Jogador 2 Venceu!";
    }else{
        title.innerText = "Empate!";
    }
}

randomNumber();
changeDice();
diceWinner();
