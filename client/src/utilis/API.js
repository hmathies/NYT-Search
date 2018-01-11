import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3665355e36be4471abd55f1fb42c279b&query=' + query");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
