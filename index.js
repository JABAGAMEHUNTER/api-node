var express = require('express');
var body = require('body-parser');

var app = express();
app.use(body())

app.get("/",(req,res)=>{
    res.send('hello world');
});

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send('recebido')
})

app.listen(3000,()=>{
    console.log('server on');
});