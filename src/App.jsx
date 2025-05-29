import React, { useState, useEffect } from "react";
import PaginaLogin from "./components/PaginaLogin";
import SexoSelector from "./components/SexoSelector";
import PersonagemSelector from "./components/PersonagemSelector";
import DoresSelector from "./components/DoresSelector";
import SelecionarAnimacoes from "./components/SelecionarAnimacoes";
import ConfirmarEditarSintomas from "./components/ConfirmarEditarSintomas";
import SintomasMaisFortes from "./components/SintomasMaisFortes";
import Finalizar from "./components/Finalizar";
import voltarBtn from "./assets/imagens/voltar-btn.png";
import "./styles/voltarBtn.css"
import concluirBtn from "./assets/imagens/concluir-btn.png";
import logo from "./assets/imagens/logo.png";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [sexoEscolhido, setSexoEscolhido] = useState(null);
  const [personagemEscolhido, setPersonagemEscolhido] = useState(null);
  const [areaDorSelecionada, setAreaDorSelecionada] = useState(null);
  const [sintomasConfirmados, setSintomasConfirmados] = useState({});
  const [mostrarConfirmarSintomas, setMostrarConfirmarSintomas] = useState(false);
  const [mostrarSintomasMaisFortes, setMostrarSintomasMaisFortes] = useState(false);
  const [mostrarFinalizar, setMostrarFinalizar] = useState(false);
  const [sintomasIntensidade, setSintomasIntensidade] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log('Estado usuarioLogado mudou para:', usuarioLogado);
  }, [usuarioLogado]);

  useEffect(() => {
    const currentClass = getCurrentPageClass();

    const bodyClassesToRemove = [
      'sexo-selector-body',
      'personagem-selector-body',
      'dores-selector-body',
      'selecionar-animacoes-body',
      'confirmar-editar-sintomas-body',
      'sintomas-mais-fortes-body',
      'finalizar-body',
      'default-body'
    ];
    
    bodyClassesToRemove.forEach(className => {
      document.body.classList.remove(className);
    });
    
    document.body.classList.add(currentClass);
    
    return () => {
      document.body.classList.remove(currentClass);
    };
  }, [sexoEscolhido, personagemEscolhido, areaDorSelecionada, mostrarConfirmarSintomas, mostrarSintomasMaisFortes, mostrarFinalizar]);

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

  const handleLoginSucesso = () => {
    console.log('handleLoginSucesso chamado no App - Estado atual:', usuarioLogado);
    setUsuarioLogado(true);
    console.log('handleLoginSucesso executado - usuarioLogado deve ser true');
  };

  const handleVoltarLogin = () => {
    console.log('Voltando para login');
    setUsuarioLogado(false);
    resetarApp();
  };

  const getCurrentPageClass = () => {
    if (mostrarFinalizar) return 'finalizar-body';
    if (mostrarSintomasMaisFortes) return 'sintomas-mais-fortes-body';
    if (mostrarConfirmarSintomas) return 'confirmar-editar-sintomas-body';
    if (areaDorSelecionada) return 'selecionar-animacoes-body';
    if (personagemEscolhido && !areaDorSelecionada) return 'dores-selector-body';
    if (sexoEscolhido && !personagemEscolhido) return 'personagem-selector-body';
    if (!sexoEscolhido) return 'sexo-selector-body';
    return 'default-body';
  };

  const handleSexoSelect = (sexo) => {
    console.log('Sexo selecionado:', sexo);
    setSexoEscolhido(sexo);
  };
  
  const handlePersonagemSelect = (personagem) => setPersonagemEscolhido(personagem);
  const handleAreaDorSelect = (area) => setAreaDorSelecionada(area);

  const handleVoltar = () => {
    if (mostrarFinalizar) {
      resetarApp();
    } else if (mostrarSintomasMaisFortes) {
      setMostrarSintomasMaisFortes(false);
      setMostrarConfirmarSintomas(true);
    } else if (mostrarConfirmarSintomas) {
      setMostrarConfirmarSintomas(false);
    } else if (areaDorSelecionada) {
      setAreaDorSelecionada(null);
    } else if (personagemEscolhido) {
      setPersonagemEscolhido(null);
    } else {
      setSexoEscolhido(null);
    }
  };

  const resetarApp = () => {
    setSexoEscolhido(null);
    setPersonagemEscolhido(null);
    setAreaDorSelecionada(null);
    setSintomasConfirmados({});
    setSintomasIntensidade({});
    setMostrarConfirmarSintomas(false);
    setMostrarSintomasMaisFortes(false);
    setMostrarFinalizar(false);
  };

  const adicionarSintomas = (area, sintomas) => {
    try {
      setSintomasConfirmados((prev) => ({
        ...prev,
        [area]: sintomas,
      }));
      setAreaDorSelecionada(null);
    } catch (error) {
      console.error("Erro ao adicionar sintomas:", error);
    }
  };

  const handleFinalizarSintomas = () => {
    setMostrarConfirmarSintomas(false);
    setMostrarSintomasMaisFortes(true);
  };

  const handleSintomasIntensidade = (intensidades) => {
    setSintomasIntensidade(intensidades);
    setMostrarSintomasMaisFortes(false);
    setMostrarFinalizar(true);
  };

  const handleFinalizarConsulta = () => {
    alert("Seus sintomas foram enviados!");
    setSexoEscolhido(null);
    setPersonagemEscolhido(null);
    setAreaDorSelecionada(null);
    setSintomasConfirmados({});
    setSintomasIntensidade({});
    setMostrarConfirmarSintomas(false);
    setMostrarSintomasMaisFortes(false);
  };

  const getBotaoVoltarClassName = () => {
    if (mostrarFinalizar) return "botao-voltar na-finalizacao";
    if (mostrarSintomasMaisFortes) return "botao-voltar na-sintomas-intensidade";
    if (mostrarConfirmarSintomas) return "botao-voltar na-confirmacao";
    if (areaDorSelecionada) {
      return isMobile ? "botao-voltar na-selecao-animacoes botao-voltar-animacoes-fix" : "botao-voltar na-selecao-animacoes";
    }
    if (personagemEscolhido) return "botao-voltar na-selecao-dores";
    if (sexoEscolhido) return "botao-voltar na-selecao-personagem";
    return "botao-voltar";
  };

  if (!usuarioLogado) {
    console.log('Renderizando PaginaLogin - usuarioLogado:', usuarioLogado);
    return <PaginaLogin onLoginSucesso={handleLoginSucesso} logo={logo} />;
  }

  console.log('Renderizando aplicação principal - usuarioLogado:', usuarioLogado);

  const mostrarBotaoVoltar = sexoEscolhido !== null && !mostrarConfirmarSintomas && !mostrarSintomasMaisFortes && !mostrarFinalizar;
  
  const deveMostrarBotaoConcluir = 
    personagemEscolhido && !areaDorSelecionada && !mostrarConfirmarSintomas && !mostrarSintomasMaisFortes && !mostrarFinalizar && 
    Object.keys(sintomasConfirmados).length > 0;

  const TelaDoresSelector = personagemEscolhido && !areaDorSelecionada && !mostrarConfirmarSintomas && !mostrarSintomasMaisFortes && !mostrarFinalizar;

  const logoStyle = isMobile
    ? { className: "logo-mobile" }
    : {
        style: {
          position: "absolute",
          top: "20px",
          ...(TelaDoresSelector ? { left: "20px" } : { right: "20px" }),
          zIndex: 100,
        }
      };

  return (
    <div className="app-container">
      {!mostrarFinalizar && (
        <div className="logo-container" {...logoStyle}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      )}

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
          <PersonagemSelector sexoEscolhido={sexoEscolhido} onSelect={handlePersonagemSelect} />
        </>
      )}

      {personagemEscolhido && !areaDorSelecionada && !mostrarConfirmarSintomas && !mostrarSintomasMaisFortes && !mostrarFinalizar && (
        <>
          <DoresSelector personagem={personagemEscolhido} onAreaSelect={handleAreaDorSelect} />
          {deveMostrarBotaoConcluir && (
          <button onClick={() => setMostrarConfirmarSintomas(true)} className={`botao-imagem concluir-btn ${isMobile ? 'botao-concluir-fix' : 'concluir-btn-direita'}`}>
              <img src={concluirBtn} alt="Concluir Sintomas" />
          </button>
          )}
        </>
      )}

      {areaDorSelecionada && (
        <SelecionarAnimacoes
          areaSelecionada={areaDorSelecionada}
          sexoSelecionado={sexoEscolhido}
          onConfirmar={adicionarSintomas}
          onVoltar={handleVoltar}
          sintomasExistentes={sintomasConfirmados}
        />
      )}

      {mostrarConfirmarSintomas && (
        <ConfirmarEditarSintomas
          sintomas={sintomasConfirmados}
          sintomasIntensidade={sintomasIntensidade}
          onAtualizar={setSintomasConfirmados}
          onVoltar={handleVoltar}
          onFinalizar={handleFinalizarSintomas}
          mostrarBotaoVoltar={false}
          sexoSelecionado={sexoEscolhido}
        />
      )}

      {mostrarSintomasMaisFortes && (
        <SintomasMaisFortes
          sintomas={sintomasConfirmados}
          onVoltar={handleVoltar}
          onAvancar={handleSintomasIntensidade}
          mostrarBotaoVoltar={false}
          sexoSelecionado={sexoEscolhido}
        />
      )}
      
      {mostrarFinalizar && (
        <Finalizar 
          onNovaConsulta={resetarApp}
          onVoltarLogin={handleVoltarLogin}
        />
      )}
    </div>
  );
}

export default App;