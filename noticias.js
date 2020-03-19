var http = require('http');

var server = http.createServer( function(req,res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de tecnologia</body></html>");
    } else if (categoria == '/hardware') {
        res.end("<html><body>Noticias de hardware</body></html>");
    } else if (categoria == '/software') {
        res.end("<html><body>Noticias de software</body></html>");
    }
    else{
    res.end("<html><body>Portal de noticias</body></html>");
    }
})

server.listen(3000);