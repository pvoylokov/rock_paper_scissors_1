console.log("Hello World");

function computerPlay() {
    x=Math.random()*10;
    if(x<2){myHand="rock";} else if (x>=2 && x<4) {myHand="scissors";} else {myHand="paper";};
return myHand;}

function playRound(playerSelection, computerSelection) {
    let myResult;
    if (playerSelection.toLowerCase()==computerSelection){myResult="Tie game!"} 
    else if (playerSelection.toLowerCase()=="rock"&&computerSelection=="paper"){myResult="You lose! ".concat(computerSelection," beats ",playerSelection,".")} 
    else if (playerSelection.toLowerCase()=="paper"&&computerSelection=="scissors"){myResult="You lose! ".concat(computerSelection," beats ",playerSelection,".")} 
    else if (playerSelection.toLowerCase()=="scissors"&&computerSelection=="rock"){myResult="You lose! ".concat(computerSelection," beats ",playerSelection,".")} 
    else if (playerSelection.toLowerCase()!="scissors"&&playerSelection.toLowerCase()!="rock"&&playerSelection.toLowerCase()!="paper") {myResult="What? No!"} 
    else  {myResult="You win! ".concat(playerSelection," beats ",computerSelection,".")}
    return myResult
}

function game() {
    for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Let's play rock, paper, scissors!");
    console.log(i);
    console.log(playRound(playerSelection, computerSelection)) }
}
game();


