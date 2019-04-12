import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () =>{
    return(
        <div id="start">
            <NavLink to="/game" className="btn iniciar">INICIAR</NavLink>
            <svg><rect></rect></svg>
        </div>
    )
}
export default Home;