function apresentarDadosPokemon(){
const elementoNome = document.querySelector("#nome");
const elementoAltura = document.querySelector("#altura");
const elementoPeso = document.querySelector("#peso");
let nome = elementoNome.value;
let altura = parseFloat(elementoAltura.value);
let peso = parseFloat(elementoPeso.value);
let imc = peso / (altura * altura);
alert("Nome: " + nome + "/nIMC: " + imc)
}