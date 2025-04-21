import React from "react";
import "./SexoSelector.css";

import masculinoImg from "../assets/imagens/sexo_masculino.png";
import femininoImg from "../assets/imagens/sexo_feminino.png";


const SexoSelector = ({ onSelect }) => {
  return (
    <div className="sexo-container">
      <button className="sexo-card" onClick={() => onSelect("masculino")}>
        <img src={masculinoImg} alt="Masculino" />
      </button>

      <button className="sexo-card" onClick={() => onSelect("feminino")}>
        <img src={femininoImg} alt="Feminino" />
      </button>
    </div>
  );
};

export default SexoSelector;