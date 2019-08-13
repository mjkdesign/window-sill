import React, {Component} from 'react';
import { Col, Row, Container } from "../Grid";
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import "./landing.css";
// import { Link as scrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Landing extends Component {
    render() {
        return(
    <Container fluid>
        <Row class="row align-items-center">
            <div classname="col"></div>
            <div className='homeContainer'>
                <h2> Welcome to Window Sill</h2>
                    <Col size="m-12"> <p className='d-flex justify-content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis nostrum obcaecati possimus, libero cupiditate odit rerum eligendi aspernatur delectus</p></Col>
            </div>
        </Row>
    </Container>
        )
    }
}

export default Landing

