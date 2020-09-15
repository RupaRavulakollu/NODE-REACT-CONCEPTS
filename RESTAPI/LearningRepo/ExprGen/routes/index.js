var express = require('express');
var router = express.Router();
var app = express();
//var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  let userData = [{
    name: 'ABC',
    email: 'abc@gmail',
    age: '23',
    salary: 20000
  },
  {
    name: 'XYZ',
    email: 'xyz@gmail',
    age: '34',
    salary: 23000
  }]
  res.render('index', { 
    title: 'Express',
    myName:"Rupa",
    userData:userData 
  });
});


// router.use(bodyParser.urlencoded({extended:false}))
// router.use(bodyParser.json())

// router.get('/login',(request,response)=>{
//   console.log(loginPage);
//   response.render("../views/login");
// })

module.exports = router;
