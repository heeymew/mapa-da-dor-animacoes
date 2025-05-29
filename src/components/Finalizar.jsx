import React, { useState, useEffect } from "react";
import logo from "../assets/imagens/logo.png";
import "./Finalizar.css";

const Finalizar = ({ onNovaConsulta, onVoltarLogin }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onVoltarLogin();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onVoltarLogin]);

  return (
    <div className="finalizar-container">
      <div className="finalizar-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-finalizar" />
        </div>
        
        <div className="mensagem-sucesso">
          <h1>Seus sintomas foram enviados com sucesso!</h1>
          <p>Obrigado por utilizar nosso sistema.</p>
        </div>

        <div className="countdown-container">
          <p>Retornando ao login em: <strong>{countdown}</strong> segundos</p>
        </div>

        <div className="action-buttons">
          <button 
            onClick={onVoltarLogin} 
            className="nova-consulta-btn"
          >
            Iniciar nova consulta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finalizar;