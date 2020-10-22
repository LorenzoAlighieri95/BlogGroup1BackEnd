'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  subtitle: {
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
  author: {
    type: String
  },
  tags:  [String],
  comments:[{
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }]
});

module.exports = mongoose.model('Articles', ArticleSchema);