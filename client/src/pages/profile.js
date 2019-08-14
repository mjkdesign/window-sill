import React, {Component} from 'react';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import "./profile.css"





class Profile extends Component {

  state = {
    plants: [],
    title: '',
    light: '',
    water: ''
  }

  componentDidMount = () => {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
    .then(res =>
      this.setState({ 
        plants: res.data,
        title: '',
        light: '',
        water: '' 
      })
      ).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.light && this.state.water) {
      API.savePlant({
        title: this.state.title,
        light: this.state.light,
        water: this.state.water
      })
      .then(res => this.loadPlants())
      .catch(err => console.log(err));
    }
  };

    render(){

      console.log(this.state);
      
        return (
          <Container fluid>
            <Row class="row align-items-center">
            <div class='col-4'>
            <div className="plantForm">
              <h1 className="addPlant">Add a Plant</h1>
              
              <form>
                <Input 
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Plant Type (required)"
                />
                <Input 
                  value={this.state.light}
                  onChange={this.handleInputChange}
                  name="light"
                  placeholder="Light requirement"
                />
                <Input 
                  value={this.state.water}
                  onChange={this.handleInputChange}
                  name="water"
                  placeholder="water requirement"
                />
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Add Plant
                </FormBtn>
              </form>
              </div>
            </div>
              <Col size="md-5" class="justify-content-center">
              <p>
                Welcome back <strong>PlantPants</strong>
              </p>

              <h1 className="myPlants">My Plants</h1>
              
              {this.state.plants.length ? (
              <List>
                {this.state.plants.map(plant => (
                  <ListItem key={plant._id}>
                    <Link to={"/plants" + plant._id}>
                      <strong>
                        {plant.title}
                      </strong>
                      <p>
                        Light Requirements: {plant.light}
                      </p>
                      <p>
                        Water Schedule: {plant.water}
                      </p>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="plantPop">No Plants :</h3>
            )
            }
            
              </Col>
            
            </Row>
          </Container>
        );
      }
}

export default Profile;