import React, {Component} from 'react';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Link as scrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Landing from "../components/Landing";
import About from "../components/About";



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

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeOutQuint'
    })
  }
 
    render(){
      console.log(this.state);
        return (
          <Container fluid>
            <Row>
              <Landing></Landing>
              <About></About>
            </Row>
          </Container>
        );
      }
}

export default Homepage;
