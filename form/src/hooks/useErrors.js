import React, { useState } from "react";

function useErrors(validacoes) {
  const initState = createInitState(validacoes);
  const [errors, setErrors] = useState(initState);

  function validarCampos(event) {
    console.log(event.target);
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validacoes[name](value);
    console.log(newState);
    setErrors(newState);
  }

  function canSendForm () {
    for (let campo in errors) {
      if (!errors[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [errors, validarCampos, canSendForm];
}

function createInitState(validacoes) {
    const initState = {};
    for (let campo in validacoes) {
        initState[campo] = { valido: true, text: "" }
    }
    return initState;
}

export default useErrors;