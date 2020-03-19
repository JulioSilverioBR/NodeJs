var express = require('express'); // Chamando o express
var app = express(); // usando o metodo

app.set('view engine', 'ejs'); // Mostrar express que  o EJS é o editor de view

app.get('/tecnologia', function(req, res){ // Trazendo resposta no servidor
    res.render("sessao/tecnologia");
});

app.get('/formulario_inclusao_noticias', function(req, res){ // Trazendo resposta no servidor
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){ // Trazendo resposta no servidor
    res.render("noticias/noticias");
});

app.get('/', function(req, res){
    res.render("home/index");
});

app.listen(3000,function(){ // Chamar servidor na porta 3000
    console.log("Servidor Rodando com Express");
});