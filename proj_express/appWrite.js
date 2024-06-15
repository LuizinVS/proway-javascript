var http = require ('http');
const dsCabecalho = '<p><a href="home">Home</a> | <a href="/contato">Contato</a></p>';

var server = http.createServer(function (req, res) {
    
    if(req.url == '/' || req.url == '/home'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(dsCabecalho + '<h1>Home</h1> <p> Lorem ipsum dolor sit amet consectur</p>')
    }else if (req.url == '/contato') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(dsCabecalho + '<h1>Contato - Write</h1> <p> Lorem ipsum dolor sit amet consectur</p>')
    }else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(dsCabecalho + '<h1>Página Não Encontrada</h1>');
    }

    //res.end
});

server.listen(3005);
console.log('Executando na porta http://localhost:3005/')