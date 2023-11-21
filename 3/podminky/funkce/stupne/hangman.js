const nadpis = document.querySelector("#nadpis"),
    text = document.querySelector("#text"),
    tlacitko = document.querySelector("#tlacitko"),
    input = document.querySelector("#input")
const seznamSlov = ("hokus", "pokus", "stuff");
let hadaneSlovo = seznamSlov (Math.floor(Math.random()* seznamSlov.length);
console.log(hadaneSlovo);
let hadaneSlovo = "jarmil"

// vytvorte array odpovedi
let odpoved = [];

for (let i = 0; i < hadaneSlovo.length; i++) {
    odpoved[i] = "_";
}

for (let i = 0; i < odpoved.length; i++) {
    text.innerText += odpoved[i];
}

tlacitko.addEventListener("click", hadani);

function hadani() {
    let pismeno = input.value
    input.value = "";

for (let i = 0; i < hadaneSlovo.length; i++) {
    if (pismeno === hadaneSlovo[i]) {
            odpoved[i] = pismeno;
            uhodnuto = true
        }
    }
    if (uhodnuto === false) {
        pocetPokusu ++
        pokusy.innerText = pocetPokusu
    }
    text.innerText = "";
    for (let i = 0; i < odpoved.length; i++) {
        text.innerText += odpoved[i];
    }
}
