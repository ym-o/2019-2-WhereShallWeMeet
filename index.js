var express = require('express'); // 웹 서버 사용
var fs = require('fs'); // 파일 로드 사용

var app = express();

app.use(express.static('public'));

var port = 8080;  // port number

app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});


/*
*************************************************************
버튼 사용하실 때
<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/info">START</a>
이런 식이면 href 안에 내용을 아래 중 알맞은 걸로 작성하시면 됩니다.
*/
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

app.get('/mapimg', function(req, res){ // 지도 불러오기 - 임시로 이미지
    fs.readFile('exmap.jpg', function(error, data){
        if(error){
            console.log(error);
        }else{
            //res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});
