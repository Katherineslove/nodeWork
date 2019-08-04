const process = require('process');

const questions = [
  'What os 2 + 2?',
  'How many sides are there on an octagon?'
];

const correctAnswers = [
  '4',
  '8'
];

let usersAnswers = [];

process.stdout.write(questions);
process.stdin.on('data', function(answer) {
  console.log(answer.toString().trim());
  let inputAnswer = answer.toString().trim();
  if (inputAnswer === correctAnswers) {
    process.exit();
  } else {
    process.stdout.write(`\n ${inputAnswer} is the wrong answer, please try again\n`);
  }
})

process.on('exit', function(){
    process.stdout.write(`\n that was the correct answer, well done\n`);
})
