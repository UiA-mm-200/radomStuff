const {
    exec
} = require("child_process");
console.log(`My pid is: ${process.pid}, please do not kill me`);

if (process.argv.length <= 2) {
    exec("nohup node forever.js kill &", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    process.exit()
}


let counter = 0;
let interval = setInterval((evt) => {
    console.log(++counter);

    if (counter > 60) {
        process.exit();
    }

}, 1000)