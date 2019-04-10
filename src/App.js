import React, { Component } from 'react';
import Axios from 'axios';
import List from './List';

/* Inicialmente Irrelevantes 
*import logo from './logo.svg';
* import './App.css'; */

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      planets: [],
    }
    this.getPlanets = this.getPlanets.bind(this);
  }
  //INSERIR O LINK DA API
  getPlanets(){
    return Axios.get("https://swapi.co/api/planets").then((response) => {
      console.log(response.data.results);
      this.setState({ planets: response.data.results})
    })
  }
  //EXIBE OS ITENS EM UM ARRAY
  componentDidMount(){
    this.getPlanets()
  }
  //CHAMA OUTRO COMPONENTE QUE SEPARA OS ARRAYS
  render() {
    const {planets} = this.state;
    return (
      <div className="App">
      <List planets = {planets} /> 
      </div>
    );
  }
}

export default App;
