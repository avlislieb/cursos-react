import React, { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro";
import ListaDeNotas from "./Components/ListaDeNotas";
import ListaDeCategorias from "./Components/ListaDeCategorias";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';
import "./assets/index.css";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNotas={this.notas.createNote.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            addCategorias={this.categorias.createCategory.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNotaApp={this.notas.deleteNote.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
