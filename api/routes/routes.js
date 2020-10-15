
'use strict';
module.exports = function(app) {
  var articles = require('../controllers/Controller');
  
  app.route('/articles')
    .get(articles.list_all_articles)
    .post(articles.create_an_article);

  app.route('/articles/:articleId')
    .get(articles.read_an_article)
    .put(articles.update_an_article)
    .delete(articles.delete_an_article)
    .patch(articles.patch_an_article);

  app.route("/articles/:articleId/comments")
    .get(articles.get_comments_article);

  app.route('/comments')
    .get(articles.list_all_comments)
    .post(articles.create_a_comment);
};
