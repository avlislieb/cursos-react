import React, { useEffect, useState } from "react";

import "@fontsource/roboto/400.css";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ onSend }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados]  = useState({});

  useEffect(()=>{
    if (forms.length === etapaAtual) {
      onSend(dadosColetados);
    }
  })

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    
    nextForm()
  }

  function nextForm() {
    setEtapaAtual(etapaAtual+1);
  }

  const forms = [
    <DadosUsuario aoEnivar={coletarDados} />,
    <DadosPessoais onSend={coletarDados} />,
    <DadosEntrega onSendForm={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>
  ];
  
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step> <StepLabel>Login</StepLabel> </Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finaluzação</StepLabel></Step>
      </Stepper>
      {forms[etapaAtual]}
      
    </>
    
  );
}

export default FormularioCadastro;
