const process = require('process');

const questions = [
  'What is 2 + 2?',
  'How many sides are there on an octagon?'
];

const correctAnswers = [
  '4',
  '8'
];

let usersAnswers = [];

function askQuestion(num) {
  process.stdout.write(`${questions[num]}`);
}

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
});

askQuestion(0);
