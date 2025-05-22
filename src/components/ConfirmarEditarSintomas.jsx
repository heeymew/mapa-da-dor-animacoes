import React, { useState, useEffect } from "react";
import editarIcon from "../assets/imagens/editar-btn.png";
import finalizarIcon from "../assets/imagens/finalizar-btn.png";
import RemoverIcon from "../assets/imagens/remover-btn.png";
import voltarBtn from "../assets/imagens/voltar-btn.png";
import "./ConfirmarEditarSintomas.css";

const ConfirmarEditarSintomas = ({ sintomas, sintomasIntensidade, onAtualizar, onVoltar, onFinalizar }) => {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [sintomasAgrupados, setSintomasAgrupados] = useState({});
  const [sintomasDuplicados, setSintomasDuplicados] = useState({});

  useEffect(() => {
    agruparSintomas(sintomas);
  }, [sintomas]);

  const agruparSintomas = (sintomasObj) => {
    const gruposSintomas = { ...sintomasObj };
    const duplicados = {};

    Object.entries(sintomasObj).forEach(([area, listaSintomas]) => {
      listaSintomas.forEach(sintoma => {
        if (!duplicados[sintoma]) duplicados[sintoma] = [];
        duplicados[sintoma].push(area);
      });
    });

    const realmenteDuplicados = {};
    Object.entries(duplicados).forEach(([sintoma, areas]) => {
      if (areas.length > 1) {
        realmenteDuplicados[sintoma] = areas;
        
        areas.forEach(area => {
          if (gruposSintomas[area]) {
            gruposSintomas[area] = gruposSintomas[area].filter(s => s !== sintoma);
            if (gruposSintomas[area].length === 0) {
              delete gruposSintomas[area];
            }
          }
        });
      }
    });

    setSintomasAgrupados(gruposSintomas);
    setSintomasDuplicados(realmenteDuplicados);
  };

  const removerSintoma = (area, sintoma) => {
    if (area !== "geral") {
      const novos = { ...sintomas };
      novos[area] = novos[area].filter((s) => s !== sintoma);
      if (novos[area].length === 0) delete novos[area];
      onAtualizar(novos);
    } 
    else {
      const novos = { ...sintomas };
      sintomasDuplicados[sintoma].forEach(areaOriginal => {
        if (novos[areaOriginal]) {
          novos[areaOriginal] = novos[areaOriginal].filter(s => s !== sintoma);
          if (novos[areaOriginal].length === 0) delete novos[areaOriginal];
        }
      });
      onAtualizar(novos);
    }
  };

  const getDescricaoIntensidade = (nivel) => {
    switch(nivel) {
      case "1": return "Sintoma mais intenso";
      case "2": return "Intensidade média";
      case "3": return "Intensidade menor";
      default: return "";
    }
  };

  return (
    <div className="confirmar-editar-container">
      <h2>{modoEdicao ? "Editar Sintomas" : "Revisar Sintomas"}</h2>

      {Object.keys(sintomasIntensidade).length > 0 && (
        <div className="sintomas-por-intensidade">
          <h3>Sintomas classificados por intensidade:</h3>
          <ul className="lista-intensidade">
            {Object.entries(sintomasIntensidade)
              .sort(([nivelA], [nivelB]) => parseInt(nivelA) - parseInt(nivelB))
              .map(([nivel, sintoma]) => (
                <li key={nivel} className="item-intensidade">
                  <div className="info-intensidade">
                    <strong>{sintoma} </strong>
                    <span className="descricao-intensidade">{getDescricaoIntensidade(nivel)}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      )}

      <div className="areas-sintomas">
        {Object.keys(sintomasDuplicados).length > 0 && (
          <div key="geral" className="area-grupo">
            <h3 className="titulo-area">Geral</h3>
            <ul className="sintoma-lista">
              {Object.keys(sintomasDuplicados).map((s, i) => (
                <li key={i} className={modoEdicao ? "sintoma-item" : "sintoma-item-revisao"}>
                  <span className="sintoma-texto">{s}</span>
                  {modoEdicao && (
                    <button onClick={() => removerSintoma("geral", s)} className="botao-remover">
                      <img src={RemoverIcon} alt="Remover" className="icone-remover" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {Object.entries(sintomasAgrupados).map(([area, lista]) => (
          <div key={area} className="area-grupo">
            <h3 className="titulo-area">{area.charAt(0).toUpperCase() + area.slice(1)}</h3>
            <ul className="sintoma-lista">
              {lista.map((s, i) => (
                <li key={i} className={modoEdicao ? "sintoma-item" : "sintoma-item-revisao"}>
                  <span className="sintoma-texto">{s}</span>
                  {modoEdicao && (
                    <button onClick={() => removerSintoma(area, s)} className="botao-remover">
                      <img src={RemoverIcon} alt="Remover" className="icone-remover" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="botoes-container">
        {modoEdicao ? (
          <button onClick={() => setModoEdicao(false)} className="botao-imagem botao-editar">
            <img src={editarIcon} alt="Concluir Edição" />
          </button>
        ) : (
          <>
            <button onClick={onVoltar} className="botao-imagem botao-voltar-menor">
              <img src={voltarBtn} alt="Voltar" />
            </button>
            <button onClick={() => setModoEdicao(true)} className="botao-imagem botao-editar">
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