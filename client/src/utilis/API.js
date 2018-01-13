import axios from "axios";

export default {
  // Gets all articles from the database
  getArticles: function() {
    return axios.get("/api/articles");
  },

  searchArticles: function(begin_date, end_date, query) {
    console.log('HI');
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3665355e36be4471abd55f1fb42c279b&begin_date="
                      + begin_date + "&end_date=" + end_date + "&q=" + query);

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
