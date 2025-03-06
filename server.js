const express = require('express');
const app = express();

app.get('/ping',(req,res)=>{
    res.send('pong')
})

app.get('/get',(req,res)=>{
    res.send('get')
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
    })