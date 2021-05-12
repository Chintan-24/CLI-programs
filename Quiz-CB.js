//how well do you know Chintan

var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score=0;
var userName = readlineSync.question("What is your name? ");

console.log(chalk.bold.cyan("Hello " + userName) + chalk.underline.cyanBright("\n\n.  How well do Do you know Chintan?  .\n.    Play this quiz and find out     .\n"));

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log(chalk.greenBright("Right :)"));
    score+=1;
  } else {
    console.log(chalk.redBright("Wrong :("))
  }
  console.log(chalk.cyan.dim("---=") + chalk.cyanBright(" current score = " + score+" ") + chalk.cyan.dim("=---"));
   console.log("------------------------------");

}

var questions = [{
  question: "1. In which state do i live?: ",
  answer: "gujarat"
},
{
  question: "2. What i like the most? movies or series?: ",
  answer: "series"
},
{
  question: "3. Which series i like the most?: ",
  answer: "got"
},
{
  question: "4. Which book i like the most?: ",
  answer: "the alchemist"
},
{
  question: "5. What kind of movies i like?: ",
  answer: "action"
}
];

for (var i=0; i<questions.length; i++)
{
  var currQue = questions[i];
  play (currQue.question, currQue.answer);
}

console.log(chalk.cyan.dim("-=") + chalk.bgCyan(" NOICEEEE! You Scored:"+ score+" " )+ chalk.cyan.dim("=-"))

//share
//https://replit.com/@Chintan024/Quiz-Game?embed=1&output=1
//?embed=1&output=1