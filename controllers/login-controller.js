//save it in DATABase
const secretKey = '157DC26EBCE909DE580413D8A55728E403CDAF299255E7D3F1EBCC2610E34FA1';
const jwt = require('jsonwebtoken');
const { use } = require('../Routes/login');

var verify=0;

var username='op';
var password = '123';

exports.login = (req, res) => {
    const user = req.body.username;
    const password = req.body.password;
    console.log('inside controller');
       if( username===user && password===password){
        res.status(200).json({login:"Success"}); 
       }
       else {
        res.json({login:"login_failure"});
    }
};