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

  componentDidMount(){
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
    .then(res =>
      this.setState({ plants: res.data, title: '', light: '', water: '' })
      )
      .catch(err => console.log(err));
  }

    render(){

      console.log(this.state);
      
        return (
          <Container fluid>
            <Row>
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
              <h3>No Plants :^(</h3>
            )}

            </Row>
          </Container>
        );
      }
}

export default Profile;
