import React from "react";
import '../components/PersonagemSelector.css'

import meninoBrancoFrente from "../assets/imagens/personagens/menino_branco_frente.png";
import meninaBrancaFrente from "../assets/imagens/personagens/menina_branca_frente.png";
import meninoNegroFrente from "../assets/imagens/personagens/menino_negro_frente.png";
import meninaNegraFrente from "../assets/imagens/personagens/menina_negra_frente.png";
import meninoAsiaticoFrente from "../assets/imagens/personagens/menino_asiatico_frente.png";
import meninaAsiaticaFrente from "../assets/imagens/personagens/menina_asiatica_frente.png";
import meninoPardoFrente from "../assets/imagens/personagens/menino_pardo_frente.png";
import meninaPardaFrente from "../assets/imagens/personagens/menina_parda_frente.png";

import meninoBrancoCostas from "../assets/imagens/personagens/menino_branco_costas.png";
import meninaBrancaCostas from "../assets/imagens/personagens/menina_branca_costas.png";
import meninoNegroCostas from "../assets/imagens/personagens/menino_negro_costas.png";
import meninaNegraCostas from "../assets/imagens/personagens/menina_negra_costas.png";
import meninoAsiaticoCostas from "../assets/imagens/personagens/menino_asiatico_costas.png";
import meninaAsiaticaCostas from "../assets/imagens/personagens/menina_asiatica_costas.png";
import meninoPardoCostas from "../assets/imagens/personagens/menino_pardo_costas.png";
import meninaPardaCostas from "../assets/imagens/personagens/menina_parda_costas.png";


const personagens = [
  {
    id: "menino_branco",
    frente: meninoBrancoFrente,
    costas: meninoBrancoCostas,
    sexo: "masculino",
    cor: "branco",
  },
  {
    id: "menina_branca",
    frente: meninaBrancaFrente,
    costas: meninaBrancaCostas,
    sexo: "feminino",
    cor: "branco",
  },
  {
    id: "menino_negro",
    frente: meninoNegroFrente,
    costas: meninoNegroCostas,
    sexo: "masculino",
    cor: "negro",
  },
  {
    id: "menina_negra",
    frente: meninaNegraFrente,
    costas: meninaNegraCostas,
    sexo: "feminino",
    cor: "negro",
  },
  {
    id: "menino_asiatico",
    frente: meninoAsiaticoFrente,
    costas: meninoAsiaticoCostas,
    sexo: "masculino",
    cor: "asiatico",
  },
  {
    id: "menina_asiatica",
    frente: meninaAsiaticaFrente,
    costas: meninaAsiaticaCostas,
    sexo: "feminino",
    cor: "asiatico",
  },
  {
    id: "menino_pardo",
    frente: meninoPardoFrente,
    costas: meninoPardoCostas,
    sexo: "masculino",
    cor: "pardo",
  },
  {
    id: "menina_parda",
    frente: meninaPardaFrente,
    costas: meninaPardaCostas,
    sexo: "feminino",
    cor: "parda",
  },
];

const PersonagemSelector = ({ sexoEscolhido, onSelect }) => {
  const personagensFiltrados = personagens.filter(
    (p) => p.sexo === sexoEscolhido
  );

  return (
    <div className="personagem-container">
      {personagensFiltrados.map((personagem) => (
        <button
          key={personagem.id}
          className="personagem-card"
          onClick={() => onSelect(personagem)}
        >
          <img src={personagem.frente} alt={personagem.id} />
        </button>
      ))}
    </div>
  );
};

export default PersonagemSelector;