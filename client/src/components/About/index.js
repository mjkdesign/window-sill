import React, {Component} from 'react';
import { Col, Row, Container } from "../Grid";
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Link as scrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./about.css";

class About extends Component {
    render() {
    return(
        <Container fluid>
            <div className="container about" >
            <Row className='row align-items-center'>
                
                    <div className='d-flex justify-content-center'>
                    <Col size="m-9" className='d-inline'>
                        <h2 className='abtTitle'> About Window Sill</h2>
                    </Col>
                    </div>
             

                <div className='d-inline'>
                    <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                </div>
            </Row>
            </div>
        {/* <img className="platHero" src={Plant}></img> */}
        </Container>
    )
    }
};

export default About