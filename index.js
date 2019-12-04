var express = require('express'); // 웹 서버 사용
var fs = require('fs'); // 파일 로드 사용

var app = express();

app.use(express.static('public'));

var port = 8080;  // port number

app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});
/*
class Category {
  Generator({category}){
    this.category = category;
  }
  selecCategory(category){
    return this.category;
  }
  bringPlacelist(places){

  }
}

class Places{

}
*/
/*
*************************************************************
버튼 사용하실 때
<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/info">START</a>
이런 식이면 href 안에 내용을 아래 중 알맞은 걸로 작성하시면 됩니다.
*/
// main.html - 메인 페이지
app.get('/', function(req, res){
    fs.readFile('main.ejs', function(error, data){
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
    fs.readFile('info.ejs', function(error, data){
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
    fs.readFile('midmap.ejs', function(error, data){
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
    fs.readFile('places.ejs', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

app.post('/place', function(req, res) {
  var body = req.body;
  for (var i = 1; i < 11; ++i) {
    if (body.nnn[i - 1]) {
      names = body.nnn[i - 1];
      console.log(names);
      var command = 'update test set place' + i + '=' + "'" + names + "'" + ' order by id DESC LIMIT 1';
      console.log(command);
      connection.query(command);
    }
  }
  res.redirect('/history');
});

// history.html - history 페이지
app.get('/history', function(req, res){
    fs.readFile('history.ejs', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

app.get('/sample', function(req, res){
    fs.readFile('sample.ejs', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});
