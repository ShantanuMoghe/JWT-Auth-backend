const express = require('express');
const bodyParser = require('body-parser');
const infRoutes = require('./Routes/login');


const app =  express();


app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});


app.use('/login',infRoutes);



app.listen(3000,()=>{
    console.log('server listening on port 3000')
});

