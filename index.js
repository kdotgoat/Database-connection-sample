// Importing express
var express = require("express");
// Importing mysql
var app = express();
var connection = require(`./database`);

// Home route
app.get(`/`, function(err ,res){
    let sql = "SELECT * FROM EMPLOYEE_INFO";
    connection.query(sql, function(err, result){
        if(err) throw err;
        res.send(result);   
    });
});
app.listen(3000, function(){
    console.log(`App listening on port 3000`);
    connection.connect(function(err){
        if(err) throw(err);
        console.log(`Database connected!`);
    })
});

