function plusminus(n) {
    if (n > 0) {
        console.log("+")
    }
    if (n < 0) {
        console.log("-")
    }
    if (n === "0") {
        console.log("nic")
    }
}

plusminus(8)
plusminus(-5)

function plusJedna (x) {
    console.log(x, "plus jedna je", x + 1 )
}