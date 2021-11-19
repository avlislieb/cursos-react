function validaCpf(cpf) {
  const objError = { valido: true, text: "" };

  if (cpf.length !== 11) {
    objError.valido = false;
    objError.text = "CPF deve ter 11 dígitos";
  }

  return objError;
}

function validaSenha(senha) {
  const objError = { valido: true, text: "" };

  if (senha.length < 4 || senha.length > 20) {
    objError.valido = false;
    objError.text = "Senha deve ter 4 e 20 dígitos";
  }

  return objError;
}

export {
    validaSenha,
    validaCpf
}