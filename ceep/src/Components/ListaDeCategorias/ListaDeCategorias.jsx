import React, { Component } from 'react';
import './style.css';

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {categorias:[]};
    this.referenciaNewCategories = this._newCategory.bind(this)
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.referenciaNewCategories);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.referenciaNewCategories);
  }

  _newCategory(category) {
    this.setState({...this.state, category});
  }

  _handleInput(e) {
    if (e.keyCode === 13) {
        this.props.addCategorias(e.target.value);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar categoria"
          className="lista-categorias_input"
          onKeyUp={this._handleInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;