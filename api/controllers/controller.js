'use strict';

var mongoose = require('mongoose'),
  Article = mongoose.model('Articles'),
  Comment = mongoose.model('Comments');

/*
exports.list_all_articles = function(req, res) {
  Article.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};
*/

exports.list_all_articles = function(req,res) {
  var query = req.query;
  query.draft=false;
  Article.find(query,null,{sort: {'featured': -1}},function(err,article){
    if (err)
      res.send(err);
    res.json(article);
  });
};


exports.create_an_article = function(req, res) {
  var new_article = new Article(req.body);
  new_article.save(function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.read_an_article = function(req, res) {
  Article.findById(req.params.articleId, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.update_an_article = function(req, res) {
  Article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.patch_an_article = function(req,res){
  Article.findOneAndUpdate({_id: req.params.articleId}, {$set: req.body}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.delete_an_article = function(req, res) {
  Article.remove({
    _id: req.params.articleId
  }, function(err, article) {
    if (err)
      res.send(err);
    res.json({ message: 'Article successfully deleted' });
  });
};

//INIZIO CONTROLLER COMMENTI

exports.list_all_comments = function(req, res) {
  Comment.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.create_a_comment = function(req, res) {
  var new_comment = new Comment(req.body);
  new_comment.save(function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.get_comments_article = async function(req,res){
  let foundArticle = await Article.findOne({_id:req.params.articleId}).populate("comments");
  res.json(foundArticle);
}


