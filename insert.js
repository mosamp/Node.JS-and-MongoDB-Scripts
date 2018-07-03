var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");

  var myobj = [{"allRoundData":[{"name":"Animals","timeLimitInSeconds":20,"pointsAddedForCorrectAnswer":10,"questions":[{"questionText":"Lions are carnivores: true or false?","answers":[{"answerText":"True","isCorrect":true},{"answerText":"False","isCorrect":false}]},{"questionText":"What do frogs eat?","answers":[{"answerText":"Pizza","isCorrect":false},{"answerText":"Flies","isCorrect":true}]},{"questionText":"Where do mice live?","answers":[{"answerText":"In the sea","isCorrect":false},{"answerText":"On the moon","isCorrect":false},{"answerText":"On land","isCorrect":true},{"answerText":"In a tree","isCorrect":false}]}]}]}];

  /*var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];*/
  dbo.collection("datar").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});