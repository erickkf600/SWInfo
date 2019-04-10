import React, { Component } from 'react';
import Axios from 'axios';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      planets: [],
    }
  }
  getPlanets(){
    return Axios.get("https://swapi.co/api/planets").then((response) => {
      console.log(response.data.results);
      this.setState({ planets: })
    })
  }
  componentDidMount(){
    this.getPlanets()
  }
  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default App;
