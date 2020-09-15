var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('login',{
        title:'login'
    });
    
}).post('/',function(req,res,next){
    console.log(req.body);
    res.send("Successfully logged in ");
})

module.exports = router;