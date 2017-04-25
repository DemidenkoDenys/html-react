// Получение данных из БД и сохранение их в JSON файл
// node src/DB-JSON.js
// запустить в браузере http://localhost:3000

var express    = require("express");
var mysql      = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '',
 database : 'html'
});
var app = express();

connection.connect(function(err){
if(!err) {
   console.log("Database is connected ... \n\n");
} else {
   console.log("Error connecting database ... \n\n");
}
});

app.get("/",function(req,res){
connection.query('SELECT * from tag', function(err, rows, fields) {
connection.end();
 if (!err){
   fs.writeFile('src/tags.json', JSON.stringify(rows), function (err) {
      if (err) throw err;
      res.send('File saved successfuly!');
    });
 }
 else
   console.log('Error while performing Query.');
 });
});

app.listen(3000);
