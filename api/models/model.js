'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String
  },
  featured:{
    type: Boolean,
    default: false
  },
  draft:{
    type: Boolean,
    default: false
  },
  img: { data: Buffer, 
    contentType: String 
  },
  comments:[{
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }]
});

var CommentSchema = new Schema({
  author: {
    type:String,
    default: "Unknown"
  },
  body: {
    type:String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Articles"
  }
})

module.exports = mongoose.model('Articles', ArticleSchema);
module.exports = mongoose.model('Comments', CommentSchema);