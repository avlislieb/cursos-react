import React, { Component } from "react";
import CardNota from "../CardNota"
import './style.css';

class ListaDeNotas extends Component {
    constructor() {
        super();
        this.state = {notas:[]};
        this._referenciaNewNotes = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this._referenciaNewNotes);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._referenciaNewNotes);
    }

    _newNotes(notas) {
        this.setState({...this.state, notas});
    }

  render() {
    return (
        <ul className="lista-notas">
            {this.props.notas.notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item" key={index}>
                        
                        <CardNota 
                            keyNote={index}
                            apagarNotaListNote={this.props.apagarNotaApp}
                            title={nota.title} 
                            text={nota.text}
                            categoria={nota.categoria}
                        />
                    </li>
                );
            })}
        </ul>
    );
  }
}

export default ListaDeNotas;