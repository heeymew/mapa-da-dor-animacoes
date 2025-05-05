import React, { useState } from "react";
import editarIcon from "../assets/imagens/editar-btn.png";
import finalizarIcon from "../assets/imagens/finalizar-btn.png";
import RemoverIcon from "../assets/imagens/remover-btn.png";
import voltarBtn from "../assets/imagens/voltar-btn.png";
import "./ConfirmarEditarSintomas.css";

const ConfirmarEditarSintomas = ({ sintomas, onAtualizar, onVoltar, onFinalizar }) => {
  const [modoEdicao, setModoEdicao] = useState(false);

  const removerSintoma = (area, sintoma) => {
    const novos = { ...sintomas };
    novos[area] = novos[area].filter((s) => s !== sintoma);
    if (novos[area].length === 0) delete novos[area];
    onAtualizar(novos);
  };

  return (
    <div className="confirmar-editar-container">
      <h2>{modoEdicao ? "Editar Sintomas" : "Revisar Sintomas"}</h2>

      <ul>
        {Object.entries(sintomas).map(([area, lista]) => (
          <li key={area}>
            <strong>{area}:</strong>{" "}
            {modoEdicao ? (
              <ul className="sintoma-lista">
                {lista.map((s, i) => (
                  <li key={i} className="sintoma-item">
                    <span className="sintoma-texto">{s}</span>
                    <button onClick={() => removerSintoma(area, s)} className="botao-remover">
                      <img src={RemoverIcon} alt="Remover" className="icone-remover" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              lista.join(", ")
            )}
          </li>
        ))}
      </ul>

      <div className="botoes-container">
        {modoEdicao ? (
          <button onClick={() => setModoEdicao(false)} className="botao-imagem">
            <img src={editarIcon} alt="Concluir Edição" />
          </button>
        ) : (
          <>
            <button onClick={onVoltar} className="botao-imagem botao-voltar-menor">
              <img src={voltarBtn} alt="Voltar" />
            </button>
            <button onClick={() => setModoEdicao(true)} className="botao-imagem">
              <img src={editarIcon} alt="Editar" />
            </button>
            <button onClick={onFinalizar} className="botao-imagem botao-finalizar">
              <img src={finalizarIcon} alt="Finalizar" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmarEditarSintomas;