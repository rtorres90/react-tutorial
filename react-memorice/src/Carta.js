import React from 'react';

class Carta extends React.Component {
    constructor() {
        super();
        this.state = {
            volteada: false,
            acertada: false,
        }
    }

    styles = {
        border: '1px solid black',
        width: '100px',
        height: '100px',
    }

    contenidoCarta = () => {
        if (this.state.acertada || this.state.volteada) {
            return this.props.valor;
        } else {
            return 'X';
        }
    }

    interaccionCarta = () => {
        this.setState({
            volteada: true
        });
        this.props.toDo(this.props.valor);
    }

    render() {
        return (
            <table className='carta' style={this.styles} onClick={this.interaccionCarta}>
                <tbody>
                    <tr>
                        <td>{this.contenidoCarta()}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Carta;
