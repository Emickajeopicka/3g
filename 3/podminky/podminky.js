let cislo = 10 

// pro porovnavani piseme 3x =
if (cislo === 10) {
    //pokud se ciuslo rovna 10 proved tuto operaci
    console.log("cislo je 10")

} else if (cislo === 5) {
    console.log("cislo je 5")
}
// v ostatnich pripadech tento prikaz

else {
    console.log("cislo neni ani 5 ani 10")
}

let input = prompt("Zadej cislo")
input = parseInt(input)
console.log(input)