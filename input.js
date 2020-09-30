// Ting som kommer fra komandolinja

// process er et objekt som inneholder alt om "miljøet" og prossesen som vi kjører programmet vårt i.
// process.argv er en array med alle ting som blir sendt til prossessen på oppstart.

// process.argv[0] er altid hvor node er på maskina di.
// process.argv[1] er altid ditt program.

// Alt påfølgende er ting brukeren sender inn.

// Problem det tar mye kode å sjekke parametere osv.

class Commander {

    constructor(commands) {
        this.commands = commands || {};
        this.triggered = [];
    }

    parse(argv) {
        if (argv.length > 2) {
            for (const param of argv) {
                if (this.commands[param] != undefined) {
                    this.triggered.push(param)
                }
            }
        }
    }
}

let commander = new Commander({
    "v": "version",
    "t": "time"
})

commander.parse(process.argv);

if (commander.triggered.includes("v")) {
    console.log("v 1.0.0")
}
if (commander.triggered.includes("t")) {
    console.log(new Date().toLocaleString("no"));
}