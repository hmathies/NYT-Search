import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("https://dog.ceo/api/breed/" + id + "/images");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("https://dog.ceo/api/breed/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("https://dog.ceo/api/breed/", articleData);
  }
};
