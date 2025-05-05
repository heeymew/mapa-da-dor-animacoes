import React, { useState, useEffect } from 'react';
import '../components/SelecionarAnimacoes.css';
import confirmarAreaBtn from '../assets/imagens/finalizar-btn.png';
import voltarBtn from '../assets/imagens/voltar-btn.png';

const SelecionarAnimacoes = ({ areaSelecionada, sexoSelecionado, onConfirmar, onVoltar }) => {
  const [sintomasSelecionados, setSintomasSelecionados] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth >= 251 && window.innerWidth <= 767);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const mapearAreaParaCategoria = (area) => {
    if (area.includes('cabeca')) return 'cabeca';
    if (area.includes('barriga')) return 'barriga';
    if (area.includes('costas') && !area.includes('braco') && !area.includes('perna')) return 'costas';
    if (area.includes('braco')) return 'braco';
    if (area.includes('perna')) return 'perna';
    return area;
  };

  const mapearSexoParaCategoria = (sexo) => (sexo === 'masculino' ? 'menino' : 'menina');

  const categoriaSexo = mapearSexoParaCategoria(sexoSelecionado);
  const categoriaArea = mapearAreaParaCategoria(areaSelecionada);

  const getImagePath = (path) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = path.startsWith('./') ? path.substring(2) : path;
    return `${baseUrl}${cleanPath}`;
  };

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

  const animacoesFiltradas = animacoesDisponiveis.filter(animacao =>
    animacao.area === categoriaArea && animacao.sexo === categoriaSexo
  );

  const toggleSintoma = (nome) => {
    setSintomasSelecionados((prev) =>
      prev.includes(nome) ? prev.filter(s => s !== nome) : [...prev, nome]
    );
  };

  const handleConfirmar = () => {
    if (sintomasSelecionados.length > 0) {
      try {
        const sintomas = [...sintomasSelecionados];
        onConfirmar(categoriaArea, sintomas);
      } catch (error) {
        console.error("Erro ao confirmar sintomas:", error);
        alert("Ocorreu um erro ao confirmar os sintomas. Por favor, tente novamente.");
      }
    }
  };

  const renderMidia = (animacao) => {
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
          className="animacao-midia"
        />
      );
    } else {
      return <img src={path} alt={animacao.nome} className="animacao-midia" />;
    }
  };

  return (
    <div className="animacoes-container">
      <div className="animacoes-header">
        <h2>Selecione os sintomas desta área</h2>
      </div>

      <div className="animacoes-grid">
        {animacoesFiltradas.length > 0 ? (
          animacoesFiltradas.map(animacao => (
            <div
              key={animacao.id}
              className={`animacao-card ${sintomasSelecionados.includes(animacao.nome) ? 'selecionado' : ''}`}
              onClick={() => toggleSintoma(animacao.nome)}
            >
              <div className="animacao-preview">
                {renderMidia(animacao)}
              </div>
              <div className="animacao-nome">{animacao.nome}</div>
            </div>
          ))
        ) : (
          <p className="sem-animacoes">Não há animações disponíveis para esta área.</p>
        )}
      </div>

      {isMobile ? (
        <>
          <div className="botoes-fixos-mobile">
            <button onClick={handleConfirmar} className="botao-confirmar-mobile">
              <img src={confirmarAreaBtn} alt="Confirmar" />
            </button>
          </div>
        </>
      ) : (
        <div className="botoes-animacao-container">
          <button onClick={handleConfirmar} className="botao-imagem confirmar-btn">
            <img src={confirmarAreaBtn} alt="Confirmar Sintomas da Área" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SelecionarAnimacoes;