import React, { Component } from 'react';
import Axios from 'axios';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
        }
    }
    //CHAMANDO A API E GERANDO UM NUMERO FINAL ALEATORIO ENTE 1 E 61
    //Nisso foi gerado 1 obejto com as info. Por tanto tive que converter em um array novamente
    getPlanets() {
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
    componentDidMount() {
        this.getPlanets()
    }
    //BOTÃO PROXIMO
    proximo(){
      this.getPlanets() 
    }
    render() {
        const { planets } = this.state;
        return (
            <div className="card" id="card">
                {
                    planets.map(p => {
                        return (
                            <div key={p.url}>
                                <div className="card-header text-center">
                                    <h1>{p.name}</h1>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Populção:<span>{p.population}</span></li>
                                    <li className="list-group-item">Clima:<span>{p.climate}</span></li>
                                    <li className="list-group-item">Terreno:<span>{p.terrain}</span></li>
                                    <li className="list-group-item">Aparições:<span>{p.films.length}</span></li>
                                </ul>
                                <div className="card-footer mt-2 text-center">
                                    <button className="btn" onClick={() => this.proximo()}>PRÓXIMO</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Game;