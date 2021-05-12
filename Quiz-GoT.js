//how well do you know about GoT

var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score=0;
var userName = readlineSync.question("What is your name? ");

console.log(chalk.bold.yellowBright("Valar Morghulis, " + userName +".") + chalk.yellowBright("\n\n-= How well do Do you know =- \n -==  Game of Thrones?  ==-\n\nPlay this quiz and find out!\n"));

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log(chalk.greenBright("Right :)"));
    score+=1;
  } else {
    console.log(chalk.redBright("Wrong :("))
  }
  console.log(chalk.yellowBright("-===") + chalk.yellow(" current score = " + score+" ") + chalk.yellowBright("===-"));
   console.log("------------------------------");
}

var questions = [{
  question: "1. Which House does sansa belongs?:\n ",
  answer: "stark"
},
{
  question: "2. How many Kingdoms are there in Westeros?:\n ",
  answer: "7"
},
{
  question: "3. Night is dark and full of ____ ?:\n ",
  answer: "terrors"
},
{
  question: "4. What do we say to the god of death?:\n ",
  answer: "not today"
},
{
  question: "5. Is khaleesi Jon Snow's aunt?:\n ",
  answer: "yes"
}
];

for (var i=0; i<questions.length; i++)
{
  var currQue = questions[i];
  play (currQue.question, currQue.answer);
}

console.log(chalk.yellow("   -===") + chalk.bgYellow(" You Scored:"+ score+" " )+ chalk.yellow("===-"))

if(score<=3){
  console.log(chalk.bgWhite.red("\n You Know Nothing, Jon Snow!"))

}else{
  console.log(chalk.bgWhite.black("\n    You are real fan!     \nJoin the The Night's Watch"))
}

//share
//https://replit.com/@Chintan024/GoT-quiz?embed=1&output=1
//?embed=1&output=1