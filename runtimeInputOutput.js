// Spm: Hvordan få inputt fra bruker når programmet alleredde kjører?

// Presenter deg selv (program)
// Spill gjett mitt tall.

//process.stderr
//process.stdout
//process.stdin -> Her kan vi hente info underveis.

const readline = require('readline');
const max = 100;
const min = 1;
const myNumber = Math.round(Math.random() * (max - min)) + 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    rl.question(question, answer => {
        evaluateAnswer(answer);
    })
}

function evaluateAnswer(answer) {
    if ((answer * 1) === myNumber) {
        rl.write("Yay correct")
        rl.close()
    } else {
        let dir = myNumber > answer ? "My number is larger" : "My number is smaler";
        readline.clearScreenDown();
        rl.write("Wrong\n")
        askQuestion(`${dir}. Guess again\n`);
    }
}

askQuestion(`Guess my number. it is between ${min} and ${max}\n`)