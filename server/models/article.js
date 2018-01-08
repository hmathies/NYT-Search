import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
   title: {type: String, required: true},
   url: {type: String, required: true},
   date: {type: Date, required: true}
});

const Article = mongoose.model'Article', ArticleSchema);

module.exports = Article;
