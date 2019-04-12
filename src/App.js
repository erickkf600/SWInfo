import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      planets: [],
    }
  }
 //CHAMANDO A API E GERANDO UM NUMERO FINAL ALEATORIO ENTE 1 E 61
 //Nisso foi gerado 1 obejto com as info. Por tanto tive que converter em um array novamente
  getPlanets(){
      const aleatorio = Math.floor((Math.random() * 61) + 1)
      const urlApi = 'https://swapi.co/api/planets/' + aleatorio   
    return Axios.get(urlApi).then((response) => {
      console.log(response.data);
      var arrays = Object.values(response)
      arrays.length = 1;
      console.log(arrays);
      this.setState({ planets: arrays });
    })
    .catch(error => {
      console.log('OCORREU UM ERRO', error);
    });
  }
  componentDidMount(){
    this.getPlanets()
  }
  proximo(){
    this.getPlanets()
    
  }
  
  render() {
    const {planets} = this.state;
    return (
      <div className="App">
        <div>
          {
             planets.map(p => {
              return(
                <div className="card" key={p.url}>
                  <h1  className="card-header text-center" >{p.name}</h1>
                  <div className="card-body">
                    <p className="text-left">Populção: <span>{p.population}</span></p>
                    <p className="text-left">Clima: <span>{p.climate}</span></p>
                    <p className="text-left">Terreno: <span>{p.terrain}</span></p>
                    <p className="text-left">Aparições: <span>{p.films.length}</span></p>
                  </div>
                  <div className="card-footer text-center p-3">
                    <button className="btn next" onClick={() => this.proximo()} id="proximo">PRÓXIMO</button>
                  </div> 
                </div>
                )
             })
          }
               
        </div>
      </div>
    );
  }
}

export default App;
