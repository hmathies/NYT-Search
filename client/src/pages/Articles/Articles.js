import  React, { Component } from 'react';
import API from '../../utilis/API';
import { Col, Row, Container} from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';
import { Input, FormBtn } from '../../components/Form';

class Articles extends Component {
  state= {
    articles: [],
    savedArticles: [],
    topic: "",
    startYear: "",
    endYear: ""
  }


  ComponentDidMount(){
    this.loadArticles();
  };

  handleInputChange = event => {
   this.setState({ topic: event.target.value, startYear: event.target.value, endYear: event.target.value });
 };

  loadArticles = () =>{
    API.getArticles()
      .then(res => this.setState({articles: res.data}))
      .catch(error => console.log(error));
  };

  //api call
  searchArticles = query =>  {
  fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3665355e36be4471abd55f1fb42c279b&query=' + query)
  .then(results => {
    return results.json()
  })
  .then(data => {
    console.log(data.response.docs)
    this.setState({ articles: data.response.docs })
  })
  .catch(error => console.log(error))
}


  render () {
    return (
      <Container fluid>
        <Row>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Search for Articles</h3>
            <form style={{textAlign:'center'}}>
              <div style={{margin: 10}}>
                <label htmlFor="topic">Topic</label>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder=" Obama"
                />
              </div>
              <div style={{margin: 10}}>
                <label htmlFor="start-year">Start Year</label>
                <Input
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  name="start-year"
                  placeholder=" 2012"
                  />
              </div>
              <div style={{margin: 10}}>
                <label htmlFor="end-year">End Year</label>
                <Input
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  name="end-year"
                  placeholder=" 2018"
                />
              </div>
              <FormBtn>Search</FormBtn>
            </form>
            </Jumbotron>
          </Col>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Search Results</h3>
            </Jumbotron>
          </Col>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Saved Articles</h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

    )
  }
}
export default Articles;
