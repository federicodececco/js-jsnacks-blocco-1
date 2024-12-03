let uno = "ciao"
let due = "ciao"
while (isNaN(uno)) {
    uno = prompt("Primo numero")
}
while (isNaN(due)) {
    due = prompt("secondo numero")
}

if (uno > due) {
    console.log(uno)
}
else console.log(due)