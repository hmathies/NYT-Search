import  React, { Component } from 'react';
import API from '../../utilis/API';


class Articles extends Component {
  state= {
    articles: []
  }


  ComponentDidMount(){
    this.loadArticles();
  }

  loadArticles = () =>{
    API.getArticles()
      .then(res => this.setState({articles: res.data}))
      .catch(error => console.log(error));
  };

  render () {
    return (
      <h3>hi</h3>
    )
  }
}
export default Articles;
