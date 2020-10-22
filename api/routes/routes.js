
'use strict';
module.exports = function(app) {
  var articles = require('../controllers/articleController');
  var comments = require('../controllers/commentController');
  
  app.route('/articles')
    .get(articles.list_all_articles)
    .post(articles.create_an_article);

  app.route('/articles/:articleId')
    .get(articles.read_an_article)
    .put(articles.update_an_article)
    .delete(articles.delete_an_article)
    .patch(articles.patch_an_article);

  app.route("/articles/:articleId/comments")
    .get(comments.get_comments_article);

  app.route('/comments')
    .get(comments.list_all_comments)
    .post(comments.create_a_comment);

  app.route('/comments/:commentId')
    .patch(comments.patch_a_comment)
    .delete(comments.delete_a_comment);
};