import React, { useState, useEffect } from "react";
import editarIcon from "../assets/imagens/editar-btn.png";
import finalizarIcon from "../assets/imagens/finalizar-btn.png";
import RemoverIcon from "../assets/imagens/remover-btn.png";
import voltarBtn from "../assets/imagens/voltar-btn.png";
import "./ConfirmarEditarSintomas.css";

const ConfirmarEditarSintomas = ({ sintomas, sintomasIntensidade, onAtualizar, onVoltar, onFinalizar, sexoSelecionado }) => {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [todosOsSintomas, setTodosOsSintomas] = useState([]);

  useEffect(() => {
    organizarTodosOsSintomas(sintomas);
  }, [sintomas, sexoSelecionado]);

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
          className="sintoma-midia"
        />
      );
    } else {
      return <img src={path} alt={animacao.nome} className="sintoma-midia" />;
    }
  };

  const organizarTodosOsSintomas = (sintomasObj) => {
    const sintomasUnicos = new Set();

    Object.values(sintomasObj).forEach(listaSintomas => {
      listaSintomas.forEach(sintoma => {
        sintomasUnicos.add(sintoma);
      });
    });

    const sintomasArray = Array.from(sintomasUnicos).map(sintoma => {
      const areasDoSintoma = [];
      Object.entries(sintomasObj).forEach(([area, listaSintomas]) => {
        if (listaSintomas.includes(sintoma)) {
          areasDoSintoma.push(area);
        }
      });

      return {
        nome: sintoma,
        areas: areasDoSintoma,
        animacao: buscarAnimacaoPorNome(sintoma)
      };
    });

    setTodosOsSintomas(sintomasArray);
  };

  const removerSintoma = (nomeSintoma) => {
    const novos = { ...sintomas };
    
    Object.keys(novos).forEach(area => {
      novos[area] = novos[area].filter(s => s !== nomeSintoma);
      if (novos[area].length === 0) {
        delete novos[area];
      }
    });
    
    onAtualizar(novos);
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
          <div className="cards-intensidade">
            {Object.entries(sintomasIntensidade)
              .sort(([nivelA], [nivelB]) => parseInt(nivelA) - parseInt(nivelB))
              .map(([nivel, sintoma]) => {
                const animacao = buscarAnimacaoPorNome(sintoma);
                return (
                  <div key={nivel} className="card-intensidade">
                    <div className="card-midia">
                      {renderMidia(animacao)}
                    </div>
                    <div className="card-info">
                      <strong>{sintoma}</strong>
                      <span className="descricao-intensidade">{getDescricaoIntensidade(nivel)}</span>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      )}

      <div className="todos-sintomas-container">
        <h3>Sintomas Selecionados</h3>
        <div className="sintomas-grid">
          {todosOsSintomas.map((sintoma, index) => (
            <div key={index} className={`sintoma-card ${modoEdicao ? 'editavel' : 'apenas-visualizacao'}`}>
              <div className="sintoma-preview">
                {renderMidia(sintoma.animacao)}
              </div>
              <div className="sintoma-nome">{sintoma.nome}</div>
              {modoEdicao && (
                <button 
                  onClick={() => removerSintoma(sintoma.nome)} 
                  className="botao-remover-card"
                >
                  <img src={RemoverIcon} alt="Remover" className="icone-remover" />
                </button>
              )}
            </div>
          ))}
        </div>
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