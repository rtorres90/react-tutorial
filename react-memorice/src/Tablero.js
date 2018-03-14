import React from 'react';
import Carta from './Carta';

class Tablero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tablero: this.crearTablero(),
            jugadaActual: {}
        }
    }

    styles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }

    componentDidMount = () => {
        this.setState({
            tablero: this.crearTablero()
        });
    }
    crearTablero = () => {
        console.log(this.props.rows);
        let paresACrear = Array.apply(null, { length: (this.props.rows * this.props.columns) / 2 }).map(Number.call, Number);
        paresACrear = paresACrear.concat(paresACrear).sort();

        let tempTableroHTML = [];
        for (let indexX = 0; indexX < this.props.columns; indexX++) {
            for (let indexY = 0; indexY < this.props.rows; indexY++) {
                const valorCarta = this.obtenerCarta(paresACrear);
                tempTableroHTML.push(valorCarta);
                //tempTableroHTML.push(<Carta valor={valorCarta} key={indexX + indexY + ''} parentMethod={this.metodoParaCarta} wea={this.state.wea}/>);
            }
        }
        return tempTableroHTML;
    }

    obtenerCarta = (paresACrear) => {
        const indiceABorrar = Math.floor(Math.random() * (paresACrear.length - 1));
        const respuesta = paresACrear[indiceABorrar];

        paresACrear.splice(indiceABorrar, 1);

        return respuesta;
    }

    fuiClickeado = (valor)=>{
        console.log('clickeado : ' + valor);
    }


    render() {
        return (
            <div className='container' style={this.styles}>
                {
                    this.state.tablero.map(
                        (item) => {
                            return <Carta valor={item} key={item + Math.random()} toDo={this.fuiClickeado.bind(this)}/>
                        }
                    )
                }
            </div>
        );
    }
}

export default Tablero;
