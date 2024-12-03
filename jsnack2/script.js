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
for (let i = 0; i < invites.length; i++) {

    if (io === invites[i]) {
        console.log("Entra pure")
    }
}