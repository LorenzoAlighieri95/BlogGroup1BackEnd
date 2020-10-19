var mongoose = require('mongoose'),
    Comment = mongoose.model('Comments');

exports.list_all_comments = function(req, res) {
  Comment.find({}, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
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

exports.patch_a_comment = function(req,res){
  Comment.findOneAndUpdate({_id: req.params.commentId}, {$set: req.body}, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.delete_a_comment = function(req, res) {
  Comment.remove({
    _id: req.params.commentId
  }, function(err, comment) {
    if (err)
      res.send(err);
    res.json({ message: 'Comment successfully deleted' });
  });
};