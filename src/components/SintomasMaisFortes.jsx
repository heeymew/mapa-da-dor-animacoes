import React, { useState, useEffect } from "react";
import finalizarIcon from "../assets/imagens/finalizar-btn.png";
import voltarBtn from "../assets/imagens/voltar-btn.png";
import removerBtn from "../assets/imagens/remover-btn.png";
import "./SintomasMaisFortes.css";

const SintomasMaisFortes = ({ sintomas, onVoltar, onAvancar }) => {
  const [todosSintomas, setTodosSintomas] = useState([]);
  const [sintomaPorIntensidade, setSintomaPorIntensidade] = useState({
    1: null,
    2: null, 
    3: null
  });
  
  useEffect(() => {
    const listaSintomas = [];
    
    Object.entries(sintomas).forEach(([area, listaSintomasArea]) => {
      listaSintomasArea.forEach(sintoma => {
        if (!listaSintomas.includes(sintoma)) {
          listaSintomas.push(sintoma);
        }
      });
    });
    
    setTodosSintomas(listaSintomas);
  }, [sintomas]);

  const handleSelecionarSintoma = (posicao, sintoma) => {
    const novaSelecao = { ...sintomaPorIntensidade };
    
    Object.entries(novaSelecao).forEach(([pos, sintomaAtual]) => {
      if (sintomaAtual === sintoma) {
        novaSelecao[pos] = null;
      }
    });
    
    novaSelecao[posicao] = sintoma;
    setSintomaPorIntensidade(novaSelecao);
  };

  const handleDeselecionar = (posicao) => {
    const novaSelecao = { ...sintomaPorIntensidade };
    novaSelecao[posicao] = null;
    setSintomaPorIntensidade(novaSelecao);
  };

  const handleAvancar = () => {
    const rankingPreenchido = Object.fromEntries(
      Object.entries(sintomaPorIntensidade).filter(([_, sintoma]) => sintoma !== null)
    );
    
    onAvancar(rankingPreenchido);
  };

  const getTituloIntensidade = (posicao) => {
    switch(posicao) {
      case 1: return "Mais intenso";
      case 2: return "Intensidade média";
      case 3: return "Menos intenso";
      default: return "";
    }
  };

  return (
    <div className="sintomas-mais-fortes-container">
      <h2>Classifique seus sintomas por intensidade</h2>
      <p className="instrucao">Quais sintomas você está sentindo com mais intensidade?</p>
      <p className="sub-instrucao">(1 = mais intenso, 3 = menos intenso)</p>
      
      <div className="ranking-container">
        {[1, 2, 3].map(posicao => (
          <div key={posicao} className="ranking-item">
            <div className="posicao-ranking">{getTituloIntensidade(posicao)}</div>
            
            {sintomaPorIntensidade[posicao] ? (
              <div className="sintoma-selecionado">
                <span>{sintomaPorIntensidade[posicao]}</span>
                <button 
                  onClick={() => handleDeselecionar(posicao)}
                  className="botao-remover"
                >
                  <img src={removerBtn} alt="Remover" />
                </button>
              </div>
            ) : (
              <select 
                value=""
                onChange={(e) => handleSelecionarSintoma(posicao, e.target.value)}
                className="select-sintoma"
              >
                <option value="">Selecione um sintoma</option>
                {todosSintomas.map((sintoma, index) => (
                  <option 
                    key={index} 
                    value={sintoma}
                    disabled={Object.values(sintomaPorIntensidade).includes(sintoma)}
                  >
                    {sintoma}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
      
      <div className="lista-sintomas">
        <h3>Todos os sintomas relatados:</h3>
        <ul>
          {Object.entries(sintomas).map(([area, listaSintomas]) => (
            <li key={area}>
              <strong>{area}:</strong> {listaSintomas.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="botoes-navegacao">
        <button onClick={onVoltar} className="botao-imagem botao-voltar">
          <img src={voltarBtn} alt="Voltar" />
        </button>
        <button 
          onClick={handleAvancar} 
          className="botao-imagem botao-confirmar botao-finalizar"
          disabled={!Object.values(sintomaPorIntensidade).some(s => s !== null)}
        >
          <img src={finalizarIcon} alt="Confirmar" />
        </button>
      </div>
    </div>
  );
};

export default SintomasMaisFortes;