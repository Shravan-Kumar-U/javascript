let game = Math.floor(Math.random()*100)+1;
console.log(game);
var time=1;
alert("Welcome to Game ... It is a simple game in which you have to enter a random number b/t 1 to 100 ... You have to guess the same number as the computer..");
let user = prompt("Guess the number between 1 to 100");
while(user != game){
    if(user>game){
        user =prompt("Guess the lower number please...");
    }else if(user<game){
        user = prompt("Guess the higher number please...");
    }
    time ++;
}
alert("Congratulations !!! You guessed in "+time+" times...");