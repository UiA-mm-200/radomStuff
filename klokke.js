// Klokke i terminal.
/*
    Skal vise nåværende tidspunkt i terminal.
    + Hvordan finne tidspunkt?
    - Hvordan formatere et tidspunkt til lokal tid?

*/

function createProperTimeString() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    return `${h}:${m}:${s}`
}

console.log(createProperTimeString());