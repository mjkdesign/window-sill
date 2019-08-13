import React, {Component} from 'react';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";



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
  }

    render(){

      console.log(this.state);
      
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
              <h1>Available Plants</h1>
              {this.state.plants.length ? (
              <List>
                {this.state.plants.map(plant => (
                  <ListItem key={plant._id}>
                    <Link to={"/plants" + plant._id}>
                      <strong>
                        {plant.title}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Plants :^</h3>
            )
            }
              <h1>Add a Plant</h1>
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
              </form>
              </Col>
              <Col size="md-6">
              </Col>
            </Row>
          </Container>
        );
      }
}

export default Profile;