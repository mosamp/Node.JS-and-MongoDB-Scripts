var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("datar");


fs.readFile('data.json',

    function(err, data) {        
          
        var jsonData = data;
 
        
        var jsonParsed = JSON.parse(jsonData);
 
        
        console.log(jsonParsed.allRoundData[0].name + "'s office phone number is " + jsonParsed.allRoundData[0].name);
        console.log(jsonParsed.allRoundData[1].name + " is from " + jsonParsed.allRoundData[0].name);
    });
