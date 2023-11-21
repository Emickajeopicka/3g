let first = parseInt(prompt("Prvni cislo"))
let second = parseInt(prompt("Druhe cislo"))

if (first === second) {
    console.log("Cisla se rovnaji")
} 
else if  (second >= first) {
    console.log ("Druhe cislo je vesti nez prvni")
} 
else {
    console.log ("cislo je mensi")
}