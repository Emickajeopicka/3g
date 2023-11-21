let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.getElementById("nadpis")

let input = document.querySelector("#input")

tlacitko.addEventListener("click", zmenNadpis)

function zmenNadpis() {
    if (input.value === "otazka") {
        console.log ("41")  
    }
    else  {
        console.log (zmenNadpis)
        let textInputu = input.value
        nadpis.style.color = "red"
        nadpis.style.fontSize = "150px"
        nadpis.innerText = "zmena"
    }
  }
 