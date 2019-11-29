import React from 'react';

class Semaforo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Semaforo : 'desligado',
        }
    }

    verde = () => {
        document.getElementById('liga').style.color = '#7CFC00';
        this.setState({
            Semaforo: '.',
        });
    }
    amarelo = () => {
        document.getElementById('liga').style.color = 'yellow';
        this.setState({
            Semaforo: '.',
        });
    }
    vermelho = () => {
        document.getElementById('liga').style.color = 'red';
        this.setState({
            Semaforo: '.',
        });
    }
    render() {
        return(
            <div className={'semaforo'} >
                <h2 className={'smfr'} id={'liga'}>{this.state.Semaforo}</h2>
                <button className={'bola'} onClick={this.verde}>verde</button>
                <button className={'bola'} onClick={this.amarelo}>amarelo</button>
                <button className={'bola'} onClick={this.vermelho}>vermelho</button>
            </div>
        )
    }
}
export default Semaforo;