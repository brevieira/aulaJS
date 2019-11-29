import React from 'react';



class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lampada: 'LAMPADA',
        }
    }

    apagar = () => {
        this.setState({
            lampada: 'apagar',
        });
    }
    acender = () => {
        this.setState({
            lampada: 'acender',
        });
    }
    render() {
        return(
            <div>
                <h1 className='ola'>
                {this.state.lampada}
                </h1>
                <span>
                    <button onClick={this.apagar}>apagar</button>
                    <button onClick={this.acender}>acender</button>
                </span>
            </div>
        )
    }
}
export default Hello;