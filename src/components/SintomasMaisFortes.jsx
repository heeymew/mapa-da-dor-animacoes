import React, { useState, useEffect } from "react";
import finalizarIcon from "../assets/imagens/finalizar-btn.png";
import voltarBtn from "../assets/imagens/voltar-btn.png";
import removerBtn from "../assets/imagens/remover-btn.png";
import "./SintomasMaisFortes.css";

const SintomasMaisFortes = ({ sintomas, onVoltar, onAvancar, sexoSelecionado }) => {
  const [todosSintomas, setTodosSintomas] = useState([]);
  const [sintomaPorIntensidade, setSintomaPorIntensidade] = useState({
    1: null,
    2: null, 
    3: null
  });
  const [mostrarSelecaoSintomas, setMostrarSelecaoSintomas] = useState({
    1: false,
    2: false,
    3: false
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

  const getImagePath = (path) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = path.startsWith('./') ? path.substring(2) : path;
    return `${baseUrl}${cleanPath}`;
  };

  const mapearSexoParaCategoria = (sexo) => (sexo === 'masculino' ? 'menino' : 'menina');
  const categoriaSexo = mapearSexoParaCategoria(sexoSelecionado);

  const animacoesDisponiveis = [
    { id: 1, area: 'cabeca', sexo: 'menino', nome: 'Dor De Cabeça', gif: 'assets/animacoes/dordecabeca_menino.png', tipo: 'img' },
    { id: 2, area: 'cabeca', sexo: 'menino', nome: 'Dor de Dente', gif: 'assets/animacoes/dordedente_menino.png', tipo: 'img' },
    { id: 3, area: 'cabeca', sexo: 'menino', nome: 'Tontura', gif: 'assets/animacoes/tontura_menino.png', tipo: 'img' },
    { id: 4, area: 'cabeca', sexo: 'menino', nome: 'Dor de Ouvido', gif: 'assets/animacoes/dordeouvido_menino.png', tipo: 'img' },
    { id: 5, area: 'cabeca', sexo: 'menino', nome: 'Vômito', gif: 'assets/animacoes/vomito_menino.mp4', tipo: 'video' },
    { id: 6, area: 'cabeca', sexo: 'menino', nome: 'Resfriado', gif: 'assets/animacoes/resfriado_menino.png', tipo: 'img' },
    { id: 7, area: 'cabeca', sexo: 'menino', nome: 'Dor de Garganta', gif: 'assets/animacoes/dordegarganta_menino.png', tipo: 'img' },
    { id: 8, area: 'cabeca', sexo: 'menino', nome: 'Sonolência', gif: 'assets/animacoes/sonolencia_menino.png', tipo: 'img' },
    { id: 9, area: 'cabeca', sexo: 'menino', nome: 'Febre', gif: 'assets/animacoes/febre_menino.png', tipo: 'img' },
    { id: 10, area: 'barriga', sexo: 'menino', nome: 'Febre', gif: 'assets/animacoes/febre_menino.png', tipo: 'img' },
    { id: 11, area: 'barriga', sexo: 'menino', nome: 'Dor de Barriga', gif: 'assets/animacoes/dordebarriga_menino.png', tipo: 'img' },
    { id: 12, area: 'barriga', sexo: 'menino', nome: 'Cólica', gif: 'assets/animacoes/colica_menino.png', tipo: 'img' },
    { id: 13, area: 'barriga', sexo: 'menino', nome: 'Vômito', gif: 'assets/animacoes/vomito_menino.mp4', tipo: 'video' },
    { id: 14, area: 'barriga', sexo: 'menino', nome: 'Dor Pélvica', gif: 'assets/animacoes/dorpelvica_menino.png', tipo: 'img' },
    { id: 15, area: 'braco', sexo: 'menino', nome: 'Dor no Braço', gif: 'assets/animacoes/dornobraco_menino.png', tipo: 'img' },
    { id: 16, area: 'braco', sexo: 'menino', nome: 'Febre', gif: 'assets/animacoes/febre_menino.png', tipo: 'img' },
    { id: 17, area: 'perna', sexo: 'menino', nome: 'Dor na Perna', gif: 'assets/animacoes/dornaperna_menino.png', tipo: 'img' },
    { id: 18, area: 'perna', sexo: 'menino', nome: 'Dor Pélvica', gif: 'assets/animacoes/dorpelvica_menino.png', tipo: 'img' },
    { id: 19, area: 'perna', sexo: 'menino', nome: 'Febre', gif: 'assets/animacoes/febre_menino.png', tipo: 'img' },
    { id: 20, area: 'costas', sexo: 'menino', nome: 'Dor nas Costas', gif: 'assets/animacoes/dornascostas_menino.png', tipo: 'img' },
    { id: 21, area: 'cabeca', sexo: 'menina', nome: 'Dor De Cabeça', gif: 'assets/animacoes/dordecabeca_menina.png', tipo: 'img' },
    { id: 22, area: 'cabeca', sexo: 'menina', nome: 'Dor de Dente', gif: 'assets/animacoes/dordedente_menina.png', tipo: 'img' },
    { id: 23, area: 'cabeca', sexo: 'menina', nome: 'Tontura', gif: 'assets/animacoes/tontura_menina.png', tipo: 'img' },
    { id: 24, area: 'cabeca', sexo: 'menina', nome: 'Dor de Ouvido', gif: 'assets/animacoes/dordeouvido_menina.png', tipo: 'img' },
    { id: 25, area: 'cabeca', sexo: 'menina', nome: 'Vômito', gif: 'assets/animacoes/vomito_menina.mp4', tipo: 'video' },
    { id: 26, area: 'cabeca', sexo: 'menina', nome: 'Resfriado', gif: 'assets/animacoes/resfriado_menina.png', tipo: 'img' },
    { id: 27, area: 'cabeca', sexo: 'menina', nome: 'Dor de Garganta', gif: 'assets/animacoes/dordegarganta_menina.png', tipo: 'img' },
    { id: 28, area: 'cabeca', sexo: 'menina', nome: 'Sonolência', gif: 'assets/animacoes/sonolencia_menina.png', tipo: 'img' },
    { id: 29, area: 'cabeca', sexo: 'menina', nome: 'Febre', gif: 'assets/animacoes/febre_menina.png', tipo: 'img' },
    { id: 30, area: 'barriga', sexo: 'menina', nome: 'Febre', gif: 'assets/animacoes/febre_menina.png', tipo: 'img' },
    { id: 31, area: 'barriga', sexo: 'menina', nome: 'Dor de Barriga', gif: 'assets/animacoes/dordebarriga_menina.png', tipo: 'img' },
    { id: 32, area: 'barriga', sexo: 'menina', nome: 'Cólica', gif: 'assets/animacoes/colica_menina.png', tipo: 'img' },
    { id: 33, area: 'barriga', sexo: 'menina', nome: 'Vômito', gif: 'assets/animacoes/vomito_menina.mp4', tipo: 'video' },
    { id: 34, area: 'barriga', sexo: 'menina', nome: 'Dor Pélvica', gif: 'assets/animacoes/dorpelvica_menina.png', tipo: 'img' },
    { id: 35, area: 'braco', sexo: 'menina', nome: 'Dor no Braço', gif: 'assets/animacoes/dornobraco_menina.png', tipo: 'img' },
    { id: 36, area: 'braco', sexo: 'menina', nome: 'Febre', gif: 'assets/animacoes/febre_menina.png', tipo: 'img' },
    { id: 37, area: 'perna', sexo: 'menina', nome: 'Dor na Perna', gif: 'assets/animacoes/dornaperna_menina.png', tipo: 'img' },
    { id: 38, area: 'perna', sexo: 'menina', nome: 'Dor Pélvica', gif: 'assets/animacoes/dorpelvica_menina.png', tipo: 'img' },
    { id: 39, area: 'perna', sexo: 'menina', nome: 'Febre', gif: 'assets/animacoes/febre_menina.png', tipo: 'img' },
    { id: 40, area: 'costas', sexo: 'menina', nome: 'Dor nas Costas', gif: 'assets/animacoes/dornascostas_menina.png', tipo: 'img' },
  ];

  const buscarAnimacaoPorNome = (nomeSintoma) => {
    return animacoesDisponiveis.find(animacao => 
      animacao.nome === nomeSintoma && 
      animacao.sexo === categoriaSexo
    );
  };

  const renderMidia = (animacao) => {
    if (!animacao) return null;
    
    const path = getImagePath(animacao.gif);
    
    if (animacao.tipo === 'video') {
      return (
        <video 
          src={path} 
          alt={animacao.nome} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="sintoma-midia-mini"
        />
      );
    } else {
      return <img src={path} alt={animacao.nome} className="sintoma-midia-mini" />;
    }
  };

  const handleSelecionarSintoma = (posicao, sintoma) => {
    const novaSelecao = { ...sintomaPorIntensidade };
    
    Object.entries(novaSelecao).forEach(([pos, sintomaAtual]) => {
      if (sintomaAtual === sintoma) {
        novaSelecao[pos] = null;
      }
    });
    
    novaSelecao[posicao] = sintoma;
    setSintomaPorIntensidade(novaSelecao);
    
    setMostrarSelecaoSintomas(prev => ({
      ...prev,
      [posicao]: false
    }));
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

  const toggleSelecaoSintomas = (posicao) => {
    setMostrarSelecaoSintomas(prev => ({
      ...prev,
      [posicao]: !prev[posicao]
    }));
  };

  return (
    <div className="sintomas-mais-fortes-container">
      <h2>Classifique seus sintomas por intensidade</h2>
      <p className="instrucao">Quais sintomas você está sentindo com mais intensidade?</p>
      <p className="sub-instrucao">(Clique nas caixas para selecionar)</p>
      
      <div className="ranking-container">
        {[1, 2, 3].map(posicao => (
          <div key={posicao} className="ranking-item">
            <div className="posicao-ranking">{getTituloIntensidade(posicao)}</div>
            
            {sintomaPorIntensidade[posicao] ? (
              <div className="sintoma-selecionado-visual">
                <div className="sintoma-card-selecionado" style={{ position: 'relative' }}>
                  <div className="sintoma-imagem">
                    {renderMidia(buscarAnimacaoPorNome(sintomaPorIntensidade[posicao]))}
                  </div>
                  <span className="sintoma-nome">{sintomaPorIntensidade[posicao]}</span>
                  <button 
                    onClick={() => handleDeselecionar(posicao)}
                    className="botao-remover"
                  >
                    <img src={removerBtn} alt="Remover" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="area-selecao">
                <button 
                  onClick={() => toggleSelecaoSintomas(posicao)}
                  className="botao-selecionar"
                >
                  Selecionar sintoma
                </button>
                
                {mostrarSelecaoSintomas[posicao] && (
                  <div className="modal-selecao">
                    <div className="sintomas-disponiveis">
                      {todosSintomas
                        .filter(sintoma => !Object.values(sintomaPorIntensidade).includes(sintoma))
                        .map((sintoma, index) => {
                          const animacao = buscarAnimacaoPorNome(sintoma);
                          return (
                            <div 
                              key={index} 
                              className="sintoma-opcao"
                              onClick={() => handleSelecionarSintoma(posicao, sintoma)}
                            >
                              <div className="sintoma-imagem">
                                {renderMidia(animacao)}
                              </div>
                              <span className="sintoma-nome">{sintoma}</span>
                            </div>
                          );
                        })}
                    </div>
                    <button 
                      onClick={() => toggleSelecaoSintomas(posicao)}
                      className="botao-fechar-modal"
                    >
                      Fechar
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="lista-sintomas">
        <h3>Todos os sintomas relatados:</h3>
        <div className="sintomas-lista-texto">
          {todosSintomas.join(", ")}
        </div>
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