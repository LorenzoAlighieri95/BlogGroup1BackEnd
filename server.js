//cd C:\Program Files\MongoDB\Server\4.4\bin
//mongod
//npm run start

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var mongoDB="mongodb+srv://Lorenzo:AmineWeMissYou@clustergroup1.yjp2d.mongodb.net/blogDB?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{useNewUrlParser: true , useUnifiedTopology: true}); 
var db= mongoose.connection;
console.log(db);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if (req.method === "OPTIONS") {
    return res.status(200).end();
}
  // Pass to next layer of middleware
  next();
});

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);

