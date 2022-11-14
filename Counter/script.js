let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let clickEl = document.getElementById("click-el")
let count = 0
let records = 0

function increment(){
    count++
    records++
    countEl.innerText = count
}

function save() {
    saveEl.innerHTML += count + " - "
    clickEl.innerHTML += records + " - "
    records = 0;
} 

