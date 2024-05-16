const botaoNumeroPositivo = document.getElementById("numeroPositivo");
const botaoNumero8000 = document.getElementById("numeroMaior8000");
const botaoNumeroPar = document.getElementById("numeroPar");
const textareaResultado = document.getElementById("resultado");
const inputNumero1 = document.getElementById("numero1");
const imagem = document.getElementsByTagName("img")[0];

function verificarNumeroPositivo(){
    const numero1 = parseInt(inputNumero1.value);
    // se número1 for maior que 0 então apresentará o alert de número positivo
    if (numero1 > 0) {
        textareaResultado.value = textareaResultado.value + numero1 + " Número é positivo\n"
        // senão se número for menor que 0 apresentará o número é negativo
    } else if (numero1 < 0){
        textareaResultado.value = textareaResultado.value + numero1 + " Número não é positivo\n"
    } else{
        textareaResultado.value = textareaResultado.value + numero1 + " Número neutro\n"
    }
}

function verificarNumero8(){
    if (numero1 > 8000) {
        textareaResultado.value = textareaResultado.value + " Número é maior que 8000\n"
    } else if (numero1 === 8000){
        textareaResultado.value = textareaResultado.value + " Número = 8000\n"
    } else{
        textareaResultado.value = textareaResultado.value + " Número menor que 8000\n"
    }
}

function verificarNumeroPar(){
    if (numero1 % 2 === 0){
        textareaResultado.value = textareaResultado.value + "Número é par\n"
    }else{
        textareaResultado.value = textareaResultado.value + "Número Impar"
    }
}

function resetButtonNumeroMaior8000(){
    const numero1 = parseInt(inputNumero1.value);
    if (numero1 !==8001){
        botaoNumeroMaior8000.style.display = "inline-block"
        imagem.setAttribute("src", "")
    }
}

inputNumero1.onkeyup = resetButtonNumeroMaior8000

botaoNumeroPositivo.onclick = verificarNumeroPositivo;
botaoNumero8000.onclick = verificarNumero8;
botaoNumeroPar.onclick = verificarNumeroPar;

//Verificar se número é par, verificar se o resto da divisão é igual a zero
// if (numero % 2 ===0){
// número é par
//}
//Operadores relacionais
// === Igual
// < Menor 
// > Maior 
// >= maior ou igual 
// <= menor ou igual 
// diferente

