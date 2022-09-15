let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let deleteEl = document.getElementById("delete-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function reset(){
    location.reload() ;
 }
console.log("Let's count people on the subway!")
