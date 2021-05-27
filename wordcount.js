let textarea =document.querySelector("#textarea")
let countword8tn = document.querySelector.apply("countword8tn")

let p_displaywords = document.querySelector("#displaywords")

countword8tn.addEventlistener("click", countwords)

function countwords(){
console.log("kör funktionen countwords")
let text = textarea.value
console.log(text)
}