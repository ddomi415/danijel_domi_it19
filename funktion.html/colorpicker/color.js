let colorprint = document.querySelector("#colorpicker")
let rektangel = document.querySelector("#rektangel")

rektangel.getElementsByClassName.backfround = "hotpink"
colopicker.addeventlistener("change", colorchanger())

function colorchanger(event){
    let color = event.target.value;
    console.log(color)
rektangel.getElementsByClassName.backgroundcolor = color
}