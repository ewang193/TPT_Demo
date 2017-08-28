var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('.html', exphbs({
    defaultLayout: 'main'
    // extname: '.html'
}));
app.set('view engine', '.html');

app.get('/', function(req, res){
    res.render('home');    //用home.html中的内容来渲染页面
    // res.send('home');   //直接显示send后面括号里的内容
});

app.listen(5020, function(){
    console.log('Example app listening on port 5020!');
});