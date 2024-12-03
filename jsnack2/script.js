let invites = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
]
let io = prompt("Nome")
let flag = 0;
let flog = 0;
while (flag === 0 && flog <= invites.length && isNaN(io)) {
    if (io.toLowerCase == invites[flog].toLowerCase) {
        flag = 1;
        console.log("Entra pure")
    }
    flog++;
}
if (flag === 0) {
    console.log("Non puoi entrare")
}