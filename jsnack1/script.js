let uno = "ciao"
let due = "ciao"

while (isNaN(parseFloat(uno))) {
    uno = prompt("Primo numero")

}
while (isNaN(parseFloat(due))) {
    due = prompt("secondo numero")
}

if (uno > due) {
    console.log(uno)
}
else if (uno < due) {
    console.log(due)
}
else console.log(`I due numeri sono uguali, ${due} `)