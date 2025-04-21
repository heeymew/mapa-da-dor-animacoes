import React, { useState } from "react";
import SexoSelector from "./components/SexoSelector";
import PersonagemSelector from "./components/PersonagemSelector";
import DoresSelector from "./components/DoresSelector";
import SelecionarAnimacoes from './components/SelecionarAnimacoes';
import voltarBtn from './assets/imagens/voltar-btn.png';
import './styles/voltarBtn.css';

function App() {
  const [sexoEscolhido, setSexoEscolhido] = useState(null);
  const [personagemEscolhido, setPersonagemEscolhido] = useState(null);
  const [areaDorSelecionada, setAreaDorSelecionada] = useState(null);
  
  const handleSexoSelect = (sexo) => {
    setSexoEscolhido(sexo);
  };
  
  const handlePersonagemSelect = (personagem) => {
    setPersonagemEscolhido(personagem);
  };

  const handleAreaDorSelect = (area) => {
    setAreaDorSelecionada(area);
  };
  
  const handleVoltar = () => {
    if (areaDorSelecionada) {
      setAreaDorSelecionada(null);
    } else if (personagemEscolhido) {
      setPersonagemEscolhido(null);
    } else {
      setSexoEscolhido(null);
    }
  };
  
  const getBotaoVoltarClassName = () => {
    if (areaDorSelecionada) {
      return "botao-voltar na-selecao-animacoes";
    } else if (personagemEscolhido) {
      return "botao-voltar na-selecao-dores";
    } else if (sexoEscolhido) {
      return "botao-voltar na-selecao-personagem";
    }
    return "botao-voltar";
  };
  
  const mostrarBotaoVoltar = sexoEscolhido !== null;
  
  return (
    <div>
      {mostrarBotaoVoltar && (
        <button onClick={handleVoltar} className={getBotaoVoltarClassName()}>
          <img src={voltarBtn} alt="Voltar" />
        </button>
      )}
      
      {!sexoEscolhido && (
        <>
          <h1 className="titulo">Selecione o Sexo</h1>
          <SexoSelector onSelect={handleSexoSelect} />
        </>
      )}
      
      {sexoEscolhido && !personagemEscolhido && (
        <>
          <h1 className="titulo">Escolha o Personagem</h1>
          <PersonagemSelector
            sexoEscolhido={sexoEscolhido}
            onSelect={handlePersonagemSelect}
          />
        </>
      )}
      
      {personagemEscolhido && !areaDorSelecionada && (
        <>
          <DoresSelector 
            personagem={personagemEscolhido} 
            onAreaSelect={handleAreaDorSelect} 
          />
        </>
      )}

      {areaDorSelecionada && (
        <SelecionarAnimacoes 
          areaSelecionada={areaDorSelecionada}
          sexoSelecionado={sexoEscolhido}
          voltarParaPersonagem={() => setAreaDorSelecionada(null)}
        />
      )}
    </div>
  );
}

export default App;