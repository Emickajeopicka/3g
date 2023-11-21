
let y = Math.floor(Math.random() * 11);
let x = document.getElementById("x"); 

let guess = 1;

document.getElementById("Potvrd").onclick = function(){
    let cislo = document.getElementById("pole").value;


    if(x === y)
    {    
      nadpis.innerText = (" GRATULUJU UHODL SI TOOOO! "+ guess + "  ");
    }
    else if(x > y)
    {    
      nadpis.innerText = ("OOPS MOC VELKE CISLOOO!");
    }
    else
    {
      nadpis.innerText = ("OOOOOPS MOC MALE CISLOOOO!")
    }
}