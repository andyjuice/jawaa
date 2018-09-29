//initialization of readline function
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('how you doing', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});
