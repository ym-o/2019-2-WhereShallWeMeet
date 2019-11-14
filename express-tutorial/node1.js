var express = require('express'); // 웹 서버 사용
var fs = require('fs') // 파일 로드 사용

var app = express();
var port = 8080;

app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});

app.get('/', function(req, res){
    fs.readFile('index.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});
