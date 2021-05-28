var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"123456",
    database:"node_2"
});
connection.connect()
router.get('/', function(req, res, next) { 
  
  connection.query("select * from tab_index_my ",function(err, results){
      console.log(err);
     console.log(results);
     res.render('begin3',{data:results})
  });
});
module.exports = router;