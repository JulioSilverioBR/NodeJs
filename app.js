var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<htm><body>Portal de Noticias</body></html>");
});

app.get('/tecnologia', function(req, res){
    res.send("<htm><body>Noticias de Tecnologia</body></html>");
});

app.listen(3000,function(){
    console.log("Servidor Rodando com Express");
});