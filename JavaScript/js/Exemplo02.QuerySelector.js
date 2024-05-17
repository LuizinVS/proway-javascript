const elementoH1 = document.querySelector("h1");

// document.querySelector é utilizado para encontrar o primeiro elemento que contenha o seletor
// document.querySelector("seletor");
//Exemplos de seletores
// document.querySelection("#idDoElemento"); Selecionar o eleento que contenha o id
// document.querySelector(".nomeClasseDoElemento")
// document.querySelector("input"); Selecionar o elemento que contenha a tag

function apresentarNomeCompleto(){

const elementoNome = document.querySelector("#nome");
const elementoSobrenome = document.querySelector("#sobrenome");

//obter o valor digitado no campo que contem o id nome
let nome = elementoNome.value;
let sobrenome = elementoSobrenome.value;
let nomeCompleto = nome + " " + sobrenome;
alert("Nome completo: " + nomeCompleto);

}

