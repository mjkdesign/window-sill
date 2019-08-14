import React, {Component} from 'react';
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import "./signForm.css"

class SignUp extends Component {
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

    render() {
        return(
    <Container fluid>
        <div className="container signUp">
        <Row class="row align-items-center">

            <Col size="md-6">
            <h3 className="text-center">Sign Up</h3>
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
                   <div className="align-content-center">
                   <FormBtn
                    onClick={this.handleSubmit}
                   >
                      Submit
                    </FormBtn> 
                    </div>
                </form>
                </Col>
        </Row>
        </div>
    </Container>
        )
    }
}

export default SignUp