import data from './data'

let grootTranslateButton = document.querySelector(".groot")
let ferbTranslateButton = document.querySelector(".ferb")
let avatarTranslateButton = document.querySelector(".avatar")
let irishTranslateButton = document.querySelector(".irish")
let britishTranslateButton = document.querySelector(".british")
let germanTranslateButton = document.querySelector(".german")

let translateButton = document.querySelector(".translate--btn")

grootTranslateButton.addEventListener("click", listenClick)
ferbTranslateButton.addEventListener("click", listenClick)
avatarTranslateButton.addEventListener("click", listenClick)
irishTranslateButton.addEventListener("click", listenClick)
britishTranslateButton.addEventListener("click", listenClick)
germanTranslateButton.addEventListener("click", listenClick)

translateButton.addEventListener("click", translateFunction)

let baseUrl = ""
let inputText = document.querySelector("#text--one")
let outputText = document.querySelector("#text--two")
let title = document.querySelector(".selected--translation")

if (baseUrl == "") {
    translateButton.disabled  = true
}

function listenClick(e) {
    let targetButton = e.target.classList[1]
    data.map((item) => {
        if (item.type === targetButton) {
            console.log("Success", item.type)
            baseUrl = item.url
            title.textContent = item.name
            translateButton.disabled  = false
        }
    })
}

function translateFunction() {
    baseUrl = baseUrl + "?text=" + inputText.value
    console.log(baseUrl)
    fetch(baseUrl)
        .then(response => response.json())
        .then(response => outputText.value = response.contents.translated)
}



