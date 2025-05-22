import React from "react";
import logo from "../assets/imagens/logo.png";
import "./Finalizar.css";

const Finalizar = ({ onNovaConsulta }) => {
  return (
    <div className="finalizar-container">
      <div className="finalizar-conteudo">
        <img src={logo} alt="Logo" className="logo-finalizar" />
        <h2 className="mensagem-sucesso">Seus sintomas foram enviados com sucesso!</h2>
        <p className="mensagem-agradecimento">Obrigado por utilizar nosso sistema.</p>
        
        <button onClick={onNovaConsulta} className="botao-nova-consulta">
          Iniciar nova consulta
        </button>
      </div>
    </div>
  );
};

export default Finalizar;