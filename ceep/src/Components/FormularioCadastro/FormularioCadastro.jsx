import React, { Component } from "react";
import './style.css'

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.descricao = "";
        this.state = {categorias:[]};
        this._referenciaNewCategory = this._newCategories.bind(this);
    }

    componentDidMount() {
        
        this.props.categorias.inscrever(this._referenciaNewCategory);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._referenciaNewCategory);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories})
    }

    _handleChangeTitle(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleChangeDescription(event) {
        event.stopPropagation();
        this.descricao = event.target.value;
    }

    _handleChangeCategory(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNotas(this.titulo, this.descricao, this.categoria);
    }

    render() {
        return (
            <form className="form-cadastro "
                onSubmit={this._createNote.bind(this)}
            >
                <select onChange={this._handleChangeCategory.bind(this)} className="form-cadastro_select">
                    <option>Sem Categoria</option>
                    {this.props.categorias.categorias.map((categoria, index)=>{
                        return (
                            <option key={index}>{categoria}</option>
                        )
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    rows={15} 
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleChangeDescription.bind(this)}
                ></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;