var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser')

  app.use(bodyParser.json())

  mongoose.connect('mongodb://localhost/billsplit', function(err) {
    if(err) return console.log(err)
    console.log("Connected to MongoDB")
  })

  app.get('/', function(req, res){
    res.json({receipt1: "example.png"})
  })

  app.listen(3000, function(){
    console.log("Server running on 3000")
  })
