import React, { Component } from 'react';
import "./style.css";
//import deleteSvg from "../../assets/images/icons/delete.svg";
import {ReactComponent as DeleteSVG} from "../../assets/images/icons/delete.svg";

class CardNota extends Component {
  _deleteNote() {
    this.props.apagarNotaListNote(this.props.keyNote);

  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <DeleteSVG onClick={this._deleteNote.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}
 
export default CardNota;