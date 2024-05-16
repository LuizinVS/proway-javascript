// obter o primeiro elemento que contenha o id "idioma-ingles"
const botaoIngles = document.querySelector("#idioma-ingles");
// obter o elemento que contenha o id "idioma-portugues"
const botaoPortugues = document.getElementById("idioma-portugues");
// obter o elemento que contenha o id "idioma-portugues"
const botaoEspanhol = document.querySelector("#idioma-espanhol");
//obter os elementos da tag h1
const elementosH1 = document.getElementsByTagName("h1");
//obter a primeira tag h1s
const h1 = elementosH1[0];

function removerClasses(){
    h1.classList.remove("titulo-ingles");
    h1.classList.remove("titulo-espanhol");
    h1.classList.remove("titulo-portugues");

}

function alterarIdiomaIngles(){
    h1.innerHTML = "Hello World";
    removerClasses();
    h1.classList.add("titulo-ingles")
}

function alterarIdiomaPortugues(){
    h1.innerHTML = "Olá Mundo";
    removerClasses();
    h1.classList.add("titulo-portugues")
}

function alterarIdiomaEspanhol(){
    h1.innerHTML = "Hola Mundo";
    removerClasses();
    h1.classList.add("titulo-espanhol")
}

botaoIngles.onclick = alterarIdiomaIngles;
botaoPortugues.onclick = alterarIdiomaPortugues;
botaoEspanhol.onclick = alterarIdiomaEspanhol;