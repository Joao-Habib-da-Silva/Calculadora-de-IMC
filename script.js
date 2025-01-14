var nome = window.document.getElementById("name")
var height = window.document.getElementById("height")
var weight = window.document.getElementById("weight")
var info = window.document.getElementById("informations") 
var other = window.document.getElementById("otherinformations")  
function Click() {
var hei = Number(height.value)
var wei = Number(weight.value)
var imc = wei / hei
info.innerHTML = `Olá ${nome.value}, com o tamanho ${hei} e com o peso de ${wei} temos o IMC de ${wei/hei}`

if (imc <= 18,5) {
    other.innerHTML = `Você está abaixo do peso`}
if (imc > 18,5 && imc <=24,9) {
    other.innerHTML = `Você ${nome.value} está com peso normal!`


}
if (imc > 24,5 && imc <= 29,9) {
    other.innerHTML = `Você ${nome.value} você está sobre o peso`
}
if (imc > 30 && imc <34,9) {
    other.innerHTML = `Você está com obesidade`
}}
