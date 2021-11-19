import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import { validaCpf, validaSenha } from './models/cadastro';
import validatiosForm from './context/validacoesCadastro';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulario de cadastro</Typography>
        <validatiosForm.Provider value={{ cpf:validaCpf, senha:validaSenha }}>
          <FormularioCadastro onSend={onSendForm} />
        </validatiosForm.Provider>

        {/* contexto com valores default 
        <FormularioCadastro onSend={onSendForm} /> 
        */}
      </Container>
    );
  }
}

function onSendForm (dataForm) {
  console.log(dataForm);  
}

export default App;
