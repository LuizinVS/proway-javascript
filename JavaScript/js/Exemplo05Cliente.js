const campoTipoPF = document.getElementById("tipo-fisica");
const campoTipoPJ = document.getElementById("tipo-juridica");
const cadastrar = document.getElementById("cadastrar");

function apresentarCamposPj(){
    apresentarCampos("campos-pj");
    removerCampos("campos-pf");
}

function apresentarCamposPf(){
    apresentarCampos("campos-pf");
    removerCampos("campos-pj")
}

function apresentarCampos(tipoPessoa){
    const divs = document.getElementsByClassName(tipoPessoa);
    let i = 0;
    // Percorrer cad uma das divs com a classe campo-pj
    while (i < divs.length){
        // Pegar a div que está sendo iterada da lista de divs
        let div = divs[i];
        // Remover a class inactive da div, para que seja apresentada
        div.classList.remove("inactive");
        // Incrementar a variável indice para ir para a próxima div
        i = i + 1;   
    }
}

function removerCampos(tipoPessoa){
    const divs = document.getElementsByClassName(tipoPessoa);
    let i = 0;
    while (i < divs.length){
        let div = divs[i];
        div.classList.add("inactive");
        i = i + 1;
    }
}

function salvarCliente(){
    debugger;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const apelido = document.getElementById("apelido").value;
    const razaoSocial = document.getElementById("razaoSocial").value;
    const cnpj = document.getElementById("cnpj").value;

    const novaLinha = document.createElement("tr");
    const novaCelulaCodigo = document.createElement("td");
    novaCelulaCodigo.innerHTML = "2";

    const novaCelulaNome = document.createElement("td");
    novaCelulaNome.innerHTML = nome;

    novaLinha.appendiChild(novaCelulaCodigo);
    novaLinha.appendChild(novaCelulaNome);

    const tabela = document.getElementsByClassName("table")[0];
    tabela.appendChild(novaLinha);
}

campoTipoPJ.onclick = apresentarCamposPj;
campoTipoPF.onclick = apresentarCamposPf;
cadastrar.onclick = salvarCliente;