import React from 'react';

const validatiosForm = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});


function semValidacao(dados) {
    console.log(dados)
    return {valido: true, texto: ''}
}

export default validatiosForm;