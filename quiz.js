const process = require('process');

const questions = [
  'What is 2 + 2?',
  'How many sides are there on an octagon?'
];

const correctAnswers = [
  '4',
  '8'
];
//
// let usersAnswers = [];

const ask = (i = 0) => {
  process.stdout.write(`\n ${questions[i]}`);
}

ask();

const answers = [];
process.stdin.on('data', function(answer){
  console.log(data.toString().trim());
  amswers.push(data.toString().trim());
    process.exit();
  if (answers.length < questions.length) {
    ask(questions.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  const [number, octagon] = answers;

})
