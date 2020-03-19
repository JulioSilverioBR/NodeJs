var express = require('express'); // Chamando o express
var app = express(); // usando o metodo

app.set('view engine', 'ejs'); // Mostrar express que  o EJS é o editor de view

app.get('/tecnologia', function(req, res){ // Trazendo resposta no servidor
    res.render("sessao/tecnologia");
});

app.get('/', function(req, res){
    res.send("<htm><body>Noticias Gerais</body></html>");
});

app.listen(3000,function(){ // Chamar servidor na porta 3000
    console.log("Servidor Rodando com Express");
});