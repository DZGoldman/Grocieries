var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Grocery = require('./models/grocery.js')


    // let's get some good logging in the console
app.use(morgan('combined'));

// serve static files from the public directory
app.use(  express.static(__dirname+'/public'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/groceries-app', (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log('connection successfull');
   }
});


// listen on a port
app.listen(3000, function(){
  console.info('Listening on  port 3000...')
})

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html')
});

app.post('/new', function (req, res) {
  var newGrocery = new Grocery({
    foodItem: req.body.data1
  })
  newGrocery.save(function (err) {
    if (err) {
      throw err
    }
  })
})

app.get('/index', function (req, res) {
  Grocery.find({}, function (err, groceries) {
    res.send(groceries)
  })
});

app.delete('/destroy', function (req, res) {
  Grocery.remove({foodItem: req.body.data1}, function (error, grocery) {
    if (error) {
      throw err
    }else {
      console.log('deleted!');
    }
  })
})
