var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


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
