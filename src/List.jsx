import React, { Component } from 'react';

class List extends Component {
    render() {
        const planets = this.props.planets;
        return (
          <div className="">
            {
                planets.map((p) =>{
                    console.log(p)
                    return(
                        <div key={p.url}>
                            <h1 className='NomePlaneta'>{p.name}</h1>
                        </div>
                    )
                })
            }
          </div>
        );
      }
}
export default List;