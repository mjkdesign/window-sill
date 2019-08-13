import React, {Component} from 'react';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Landing from "../components/Landing";



class Homepage extends Component {

  state = {
    username: '',
    password: ''
  }  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('creating a new user: ', this.state.username);
  }


    render(){
      console.log(this.state);
        return (
          <Container fluid>
            <Row>
              <Landing></Landing>
              <Col size="md-6">
                <h3>Sign Up</h3>
                <form>
                  <Input
                    value={this.state.username}
                    onChange={this.handleChange}
                    name="username"
                    placeholder="username"
                   />
                   <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    placeholder="password"
                   />
                   <FormBtn
                    onClick={this.handleSubmit}
                   >
                      Submit
                    </FormBtn> 
                </form>
              </Col>
            </Row>
          </Container>
        );
      }
}

export default Homepage;
