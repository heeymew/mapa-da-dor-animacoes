import React from 'react';
import '../components/SelecionarAnimacoes.css'

const SelecionarAnimacoes = ({ areaSelecionada, sexoSelecionado}) => {
  const mapearAreaParaCategoria = (area) => {
    if (area.includes('cabeca')) return 'cabeca';
    if (area.includes('barriga')) return 'barriga';
    if (area.includes('costas') && !area.includes('braco') && !area.includes('perna')) return 'costas';
    if (area.includes('braco')) return 'braco';
    if (area.includes('perna')) return 'perna';
    return area;
  };

  const mapearSexoParaCategoria = (sexo) => {
    return sexo === 'masculino' ? 'menino' : 'menina';
  };

  const categoriaSexo = mapearSexoParaCategoria(sexoSelecionado);
  const categoriaArea = mapearAreaParaCategoria(areaSelecionada);

  const animacoesDisponiveis = [
    { id: 1, area: 'cabeca', sexo: 'menino', nome: 'Dor De Cabeça', gif: 'url-do-gif-1' },
    { id: 2, area: 'cabeca', sexo: 'menino', nome: 'Tontura', gif: 'url-do-gif-2' },
    { id: 3, area: 'cabeca', sexo: 'menino', nome: 'Vômito', gif: 'url-do-gif-3' },
    { id: 4, area: 'perna', sexo: 'menina', nome: 'Dor na Perna', gif: 'url-do-gif-4' },
    { id: 5, area: 'barriga', sexo: 'menino', nome: 'Dor De Barriga', gif: 'url-do-gif-5'},
  ];

  const animacoesFiltradas = animacoesDisponiveis.filter(animacao =>
    animacao.area === categoriaArea && animacao.sexo === categoriaSexo
  );

  return (
    <div className="animacoes-container">
      <div className="animacoes-header">
        <h2>Selecione a animação que representa seu sintoma</h2>
      </div>

      <div className="animacoes-grid">
        {animacoesFiltradas.length > 0 ? (
          animacoesFiltradas.map(animacao => (
            <div key={animacao.id} className="animacao-card">
              <div className="animacao-preview">
                <img src={animacao.gif} alt={animacao.nome} />
              </div>
              <div className="animacao-nome">{animacao.nome}</div>
            </div>
          ))
        ) : (
          <p className="sem-animacoes">Não há animações disponíveis para esta área e personagem.</p>
        )}
      </div>
    </div>
  );
};

export default SelecionarAnimacoes;