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
for (let i = 0; i < invites.length; i++) {

    if (io.toLocaleLowerCase === invites[i].toLocaleLowerCase) {
        console.log("Entra pure")
        flag = 1
    }

}
if (flag === 0) {
    console.log("Non puoi entrare")
}