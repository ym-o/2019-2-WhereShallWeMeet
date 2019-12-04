var express = require('express'); // 웹 서버 사용
var fs = require('fs'); // 파일 로드 사용
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = 8080;

//DATABASE SETTING
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "whereshallwemeet-db.cxotycrbhaji.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  user: "jisoo449",
  password: "rea!choc5",
  database: "users"
});

//connection.connect(function(err) {
//  if (err) {
//    throw err;
//  } else {
//    connection.query("SELECT * FROM user1", function(err, rows, fields) {
//      console.log(rows);
//    });
//  }
//});

app.listen(port, function() {
  console.log('Server Start, Port : ' + port);
});

// main.html - 메인 페이지
app.get('/', function(req, res) {
  fs.readFile('main.ejs', function(error, data) {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
  //클라이언트 ip 받아오기
  //var ip = (req.headers['x-forwarded-for'] ||
  //  req.connection.remoteAddress ||
  //  req.socket.remoteAddress ||
  //  req.connection.socket.remoteAddress).split(",")[0];
});

// info.html - 참석자 정보 입력 페이지
app.get('/info', function(req, res) {
  fs.readFile('info.ejs', function(error, data) {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
});

// info에서 모임 정보를 데이터베이스로 넘기기
app.post('/info', function(req, res) {
  var body = req.body;
  var names = body.name[0];
  for (var i = 1; i < 8; ++i) {
    if (!body.name[i]){
      names += " *";
      break;
    }
    names += " | " + body.name[i];
  }
  console.log(names);
  connection.query('insert into test(meeting,day,attendees) values(?,?,?)', [body.meet, body.date, names],
    function(error, result) {
      if (error) {
        console.log('insert error : ', error);
      } else {
        res.redirect('/mid');
      }
    });
});

// midmap.html - 중간 지점 표시 페이지
app.get('/mid', function(req, res) {
  fs.readFile('midmap.ejs', function(error, data) {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
});

// places.html - 장소 및 활동 추천 페이지
app.get('/place', function(req, res) {
  fs.readFile('places.ejs', function(error, data) {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
});

app.post('/place', function(req, res) {
  var body = req.body;
  for (var i = 1; i < 11; ++i) {
    if (body.selectPlace[i - 1]) {
      names = body.selectPlace[i - 1];
      console.log(names);
      var command = 'update test set place' + i + '=' + "'" + names + "'" + ' order by id DESC LIMIT 1';
      console.log(command);
      connection.query(command);
    }
  }
  res.redirect('/history');
});

// history.html - history 페이지
app.set('view engine','ejs');

app.get('/history', function(req, res) {
  var sql = 'SELECT * FROM test';
  connection.query(sql,function(err,rows,fields){
    if (err) {
      console.log(err);
    }else{
      console.log(rows);
      res.render('history.ejs',{rows: rows});
    }
  });
});