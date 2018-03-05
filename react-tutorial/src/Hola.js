import React, {Component} from 'react';

class Hola extends Component{
    render(){
        return(
            <div>
                <h1>Tutorial de {this.props.nombre}</h1>
            </div>
        )
    }
}

export default Hola;