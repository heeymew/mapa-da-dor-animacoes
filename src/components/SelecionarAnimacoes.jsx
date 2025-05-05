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

  const animacoesDisponiveis = [
    { id: 1, area: 'cabeca', sexo: 'menino', nome: 'Dor De Cabeça', gif: 'url-do-gif-1' },
    { id: 2, area: 'cabeca', sexo: 'menino', nome: 'Tontura', gif: 'url-do-gif-2' },
    { id: 3, area: 'cabeca', sexo: 'menino', nome: 'Vômito', gif: 'url-do-gif-3' },
    { id: 4, area: 'perna', sexo: 'menina', nome: 'Dor na Perna', gif: 'url-do-gif-4' },
    { id: 5, area: 'barriga', sexo: 'menino', nome: 'Dor De Barriga', gif: 'url-do-gif-5' },
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
                <img src={animacao.gif} alt={animacao.nome} />
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