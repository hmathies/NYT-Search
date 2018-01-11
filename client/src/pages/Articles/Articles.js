import  React, { Component } from 'react';
import API from '../../utilis/API';
import { Col, Row, Container} from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';
import { Input, FormBtn } from '../../components/Form';

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
              <h3 style={{textAlign:'center', backgroundColor: 'lightgray'}}>Search for Articles</h3>
            <form style={{textAlign:'center'}}>
              <div style={{margin: 10}}>
                <label htmlFor="topic">Topic</label>
                <Input name="topic" placeholder=" Obama" ></Input>
              </div>
              <div style={{margin: 10}}>
                <label htmlFor="start-year">Start Year</label>
                <Input name="start-year" placeholder=" 2012"></Input>
              </div>
              <div style={{margin: 10}}>
                <label htmlFor="end-year">End Year</label>
                <Input name="end-year" placeholder=" 2018"></Input>
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
