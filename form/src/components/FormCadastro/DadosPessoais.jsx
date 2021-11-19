import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import "@fontsource/roboto/400.css";

import validationForm from '../../context/validacoesCadastro';
import useErrors from "../../hooks/useErrors";

function DadosPessoais({ onSend }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [documento, setDocumento] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validationForm);


  const [errors, validarCampos, canSendForm] = useErrors(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSendForm()) {
          onSend({ nome, sobrenome, documento, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        error={!errors.cpf.valido}
        helperText={errors.cpf.text}
        onBlur={validarCampos}
        value={documento}
        onChange={(e) => {
          setDocumento(e.target.value);
        }}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
