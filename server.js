//cd C:\Program Files\MongoDB\Server\4.4\bin
//mongod
//npm run start

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Article = require('./api/models/articleModel'),
  Comment = require('./api/models/commentModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
var mongoDB="mongodb+srv://Lorenzo:AmineWeMissYou@clustergroup1.yjp2d.mongodb.net/blogDB?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{useNewUrlParser: true , useUnifiedTopology: true}); 
var db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if (req.method === "OPTIONS") {
    return res.status(200).end();
}

  next();
});

var routes = require('./api/routes/routes'); 
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);