import React from 'react';
import Cuadrado from './Cuadrado';

class Tablero extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tablero: null, 
            jugadorActual: 1,
            tableroHTML: null,
            hayGanador: false,
        }
    }

    combinacionesGanadoras = [
        [[0,0], [0, 1], [0, 2]],
        [[1,0], [1, 1], [1, 2]],
        [[2,0], [2, 1], [2, 2]],
        [[0,0], [1, 0], [2, 0]],
        [[0,1], [1, 1], [2, 1]],
        [[0,2], [1, 2], [2, 2]],
        [[0,0], [1, 1], [2, 2]],
        [[0,2], [1, 1], [2, 0]],
    ]

    fichas = [
        'X',
        'O'
    ]

    darTurno = ()=>{
        return (<h2>Turno de jugador {this.state.jugadorActual}</h2>);
    }

    nombrarGanador = () =>{
        return (<h2>Jugador {this.state.jugadorActual === 1? 2: 1} ha ganado!</h2>);
    }

    mostrarCabecera = ()=>{
        if (this.state.hayGanador){
            return this.nombrarGanador();
        }
        else{
            return this.darTurno();   
        }
    }

    hayGanador = () =>{
        return this.state.hayGanador;
    }

    componentDidMount = ()=>{
        this.inicializarJuego();
    }

    inicializarJuego = () => {
        let id = 0;
        let tableroHTML = [];
        let tablero = []
        for (let index = 0; index < this.props.largo; index++) {
            let filaHTML = [];
            let fila = [];
            for (let index2 = 0; index2 < this.props.largo; index2++) {
                let estructuraCuadrado = {id: id, value:''};
                let cuadrado = <Cuadrado key={id++} toOnClick={this.manejarInteraccion} obtenerJugadorActual={this.obtenerJugadorActual} estructura={estructuraCuadrado} hayGanador={this.hayGanador}/>;
                fila.push(estructuraCuadrado);
                filaHTML.push(<td key={id++}>{cuadrado}</td>);    
            }
            tablero.push(fila);
            tableroHTML.push(<tr key={id++}>{filaHTML}</tr>);
        } 
        this.setState({tablero: tablero, tableroHTML: tableroHTML, hayGanador: false, jugadorActual: 1});
    }

    manejarInteraccion = () => {
        this.setState({jugadorActual: this.state.jugadorActual === 1? 2: 1});   
    }
    
    componentDidUpdate = () =>{
        this.verificarJugada();
    }

    verificarJugada = () => {
        if (!this.state.hayGanador){
            this.fichas.forEach(ficha => {
                this.combinacionesGanadoras.forEach(combinacion => {
                    let puesto1 = combinacion[0];
                    let puesto2 = combinacion[1];
                    let puesto3 = combinacion[2];
                    if((this.state.tablero[puesto1[0]][puesto1[1]]['value'] === ficha) && (this.state.tablero[puesto2[0]][puesto2[1]]['value'] === ficha) && (this.state.tablero[puesto3[0]][puesto3[1]]['value'] === ficha) ){
                        this.setState({hayGanador: true});
                    }else{
                    }
                });
            });
        }
    }

    obtenerJugadorActual = () => {
        return this.state.jugadorActual;
    }
    
    render(){
        return(
            <div className='tablero'>
                {this.mostrarCabecera()}
                <table>
                    <tbody>
                        {this.state.tableroHTML}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tablero;