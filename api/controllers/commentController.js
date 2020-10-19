var mongoose = require('mongoose'),
    Comment = mongoose.model('Comments');

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