import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import validationForm from '../../context/validacoesCadastro';
import useErrors from "../../hooks/useErrors";

function DadosUsuario({ aoEnivar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(validationForm);

  const [errors, validarCampos, canSendForm] = useErrors(validacoes);

  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSendForm()) {
          aoEnivar({ email, senha });
        }
        
      }}
    >
      <TextField
        id="email"
        name="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        label="email"
        type="email"
      />
      <TextField
        error={!errors.senha.valido}
        helperText={errors.senha.text}
        id="senha"
        name="senha"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={senha}
        onBlur={validarCampos}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        label="senha"
        type="password"
      />
      <Button variant="contained" margin="normal" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
