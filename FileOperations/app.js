 var fs = require('fs');
// fs.writeFileSync("./demo.txt"," Rupa ");



// var data = fs.appendFileSync("./demo.txt","Testing");
// // var readData = fs.readFileSync("./demo.txt",'utf8');
// // console.log(readData);

// fs.readFile("./demo.txt", 'utf8', function(err, contents) {
//     console.log(contents);
// });
var register = require('./register.js');
const http = require('http');

const hostname ='localhost'; //'127.0.0.1';
const port = 3000;
var requestListener = function(req,res){
    if(req.url=="/register"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write(fs.readFileSync("./test.htm",'utf-8'));
        res.end();
      }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
      }
}
const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});