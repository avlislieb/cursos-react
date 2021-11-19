import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ onSendForm }) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        onSendForm({cep, endereco, numero, estado, cidade});
      }}>
        <TextField
          id="cep"
          variant="outlined"
          margin="normal"
          fullWidth
          value={cep}
          onChange={(e)=>{
            setCep(e.target.value);
          }}
          label="cep"
          type="number"
        />

        <TextField
          id="endereco"
          variant="outlined"
          margin="normal"
          fullWidth
          value={endereco}
          onChange={(e)=>{
            setEndereco(e.target.value);
          }}
          label="endereco"
          type="text"
        />

        <TextField
          id="numero"
          variant="outlined"
          margin="normal"
          fullWidth
          value={numero}
          onChange={(e)=>{
            setNumero(e.target.value);
          }}
          label="numero"
          type="number"
        />

        <TextField
          id="estado"
          variant="outlined"
          margin="normal"
          label="estado"
          type="text"
          value={estado}
          onChange={(e)=>{
            setEstado(e.target.value);
          }}
        />

        <TextField
          id="cidade"
          variant="outlined"
          margin="normal"
          label="cidade"
          type="text"
          value={cidade}
          onChange={(e)=>{
            setCidade(e.target.value);
          }}
        />

        <Button
          variant="contained"
          margin="normal"
          color="primary"
          type="submit"
        >
          Finalizar cadastro
        </Button>
      </form>
    );
}

export default DadosEntrega;