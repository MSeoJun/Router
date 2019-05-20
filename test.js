const express = require('express');
const rq = require('request-promise');
const serveStatic = require('serve-static');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;


app.get('/', function(req, res){

    var team = ['서준','우빈','현준'];

    res.send(team[req.query.id]);

})


app.listen(port, function(){
    console.log('연결되었습니다 : '+ port);
})