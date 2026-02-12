const mongoose = require("mongoose");

const Article = mongoose.model('Article', {uid: String, title: String, author: String, desc: String, ImgPath: String  }, "articles");

module.exports = Article;