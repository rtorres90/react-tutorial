import React from 'react';

class Cuadrado extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signo : "",
            fueTocado: false
        };
    }
    styles = {
        border: '1px solid black',
        width: '100px',
        height: '100px',
    }

    obtenerSignoActual = () => {
        return this.state.signo;
    }

    manejarClick = ()=>{
        if(!this.state.fueTocado && !this.props.hayGanador()){
            this.props.toOnClick();
            this.setState({signo:this.props.obtenerJugadorActual() === 1? "X": "O", fueTocado: true});
        }
    }

    componentDidUpdate = ()=>{
        this.props.estructura['value'] = this.state.signo;
    }
    render(){
        
        return (
            <table className='cuadrado' style={this.styles}>
            <tbody>
                <tr>
                    <td onClick={this.manejarClick}>{this.state.signo}</td>        
                </tr>
            </tbody>
            </table>
        )
    }
}

export default Cuadrado;