'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('Comments', CommentSchema);