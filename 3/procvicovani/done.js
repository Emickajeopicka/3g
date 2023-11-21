let holidays = document.querySelecto(".holidays")
let school = document.querySelector(".school")
let buttonSun = document.querySelector("#button-sun")
let buttonBooks = document.querySelector("#button-books")

buttonSun.addEventListener("click", backToSchoool)
buttonBooks.addEventListener("click", goToHolidays)

function goToHolidays() {
    holidays.style.display = "none"
    school.style.display = "block"

}

function backToSchoool () {
    holidays.style.display = "block"
    school.style.display = "none"
 }

