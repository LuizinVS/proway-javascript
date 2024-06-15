var express = require('express');
var app = express();
const dsCabecalho = '<p><a href="home">Home</a> | <a href="/contato">Contato</a> | <a href="/form">Formulario</a></p>';



app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send(dsCabecalho + '<h1>Home</h1> <p>Roger</p>')
});

app.get('/home', function(req, res) {
    res.send(dsCabecalho + '<h1>Home</h1> <p>Roger</p>')
});


app.get('/contato', function(req, res) {
    res.send('<h1>Home</h1> <p>Roger</p>')
    res.render('../views/contato')
});


app.get('/produto/:produto', function(req, res){
    let dsProduto = req.params.produto;
    if(dsProduto){
    res.send(dsCabecalho + `<h1>Produto: ${dsProduto}</h1> <p>Descrição do produto : ${dsProduto}.</p>`);
    }else{
        res.send(dsCabecalho + `<h1>Produto Não Encontrado</h1> <p>Procure Novamente</p>`)
    }
})

app.get('cadastro/:DSnome/:nrIdade', function (req, res){
    let dsNome = res.params.dsNome;
    let  nrIdade = req.params.nrIdade;

    res.send(dsCabecalho + `<h1> Bem vindo, ${dsNome}</h1> <p>Sua idade é: ${nrIdade}.</p>`)
})

app.get('/form', function(req, res) {
    res.render('../views/formulario');  
});

app.get('/formAction', function(req, res){
    let dsNome = req.query['dsNome'];
    let dsEmail = req.query['dsEmail'];
    let ieNota = parseInt(req.query['ieNota']);
    let ieNotaBoolean = false;
    let dsTexto = dsCabecalho;
    
    if(dsNome) {
        dsTexto += `<h2>Obrigado pelo seu feedback, ${dsNome}</h2>`;
    } 
    if(dsEmail) {
        dsTexto += `<p>Em caso de dúvida, te responderemos através do seu email ${dsEmail}</p>`;
    } 
    if(ieNota) {
        switch (ieNota) {
            case 1:
                 dsTexto += `<p>Vimos que sua nota foi ótimo, que bom que gostou!`;
                 break;

            case 2:
                dsTexto += `<p>Vimos que sua nota foi muito bom, que bom que gostou!`;
                 break;

            case 3: 
                dsTexto += `<p>Vimos que sua nota foi bom, vamos tentar melhorar!`;
                 break;

            case 4:
                dsTexto += `<p>Vimos que sua nota foi precisa melhorar, tentaremos melhorar!`;
                 break;
            default: 
                dsTexto += 'Não foi encontrada a nota!';
            
        }
    } 

    
    if (!(dsNome) && !(dsEmail) && !(ieNotaBoolean)) {
        dsTexto += '<h2>Não foram encontrados dados preenchidos. </h2>';
    } 

    res.send(dsTexto);
});


app.listen(3000, function(req, res) {
    console.log('Executando em http://localhost:3000/');
});
