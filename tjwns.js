const express = require('express');
const rq = require('request-promise');
const serveStatic = require('serve-static');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
// Hello 서준
app.use(serveStatic('views'));
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(serveStatic('public'));

app.get('/', function(req,res){
    console.log('---------로그인 페이지 접속---------');
    res.redirect('/login.html');
});

app.post('/process/Login', function(req,res){    
    // req.body.ID;
    
    console.log(req.body.password);
    return;
    // return;
    
    res.send(req.body.ID,req.body.password);
    // res.send(PW);
    return;
    // res.send('/success.html',{ID:ID,PW:PW});
    console.log('아이디 : ',ID);
    console.log('비밀번호 : ',PW);
});


app.listen(port, function(){
    console.log('연결되었습니다. : '+ port);
})