var express = require('express'); // 웹 서버 사용
var fs = require('fs') // 파일 로드 사용

var app = express();

app.use(express.static('public'));

var port = 8080;

app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});

// main.html - 메인 페이지
app.get('/', function(req, res){
    fs.readFile('main.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// info.html - 참석자 정보 입력 페이지
app.get('/info', function(req, res){
    fs.readFile('info.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// midmap.html - 중간 지점 표시 페이지
app.get('/mid', function(req, res){
    fs.readFile('midmap.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// places.html - 장소 및 활동 추천 페이지
app.get('/place', function(req, res){
    fs.readFile('places.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// history.html - history 페이지
app.get('/history', function(req, res){
    fs.readFile('history.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});
