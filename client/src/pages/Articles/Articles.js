import  React, { Component } from 'react';
import API from '../../utilis/API';
import { Col, Row, Container} from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';

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
      <Container fluid>
        <Row>
          <Col size="md-offset-3 md-6">
            <Jumbotron>
              <h1>Search Form</h1>

            <form>
              <div>
                <label htmlfor="topic">Topic</label>
                <input name="topic" placeholder="Obama"></input>
              </div>
              <div>
                <label htmlfor="start-year">Start Year</label>
                <input name="start-year" placeholder="2012"></input>
              </div>
              <div>
                <label htmlfor="end-year" placeholder="2018">End Year</label>
                <input name="end-year"></input>
              </div>
              <button>Search</button>
            </form>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

    )
  }
}
export default Articles;
