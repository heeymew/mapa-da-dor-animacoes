import React from "react";
import "./DoresSelector.css";

const DoresSelector = ({ personagem, onAreaSelect }) => {
  if (!personagem) return null;

  const handleAreaClick = (area) => {
    console.log("Área clicada:", area);
    onAreaSelect(area);
  };

  const idPersonagem = personagem.id;

  return (
    <div className="dores-container">
      <div className="conteudo-esquerda">
        <h1 className="mensagemselecao">Aperte na área do corpo em que o sintoma se apresenta!</h1>
      </div>
      
      <div className="conteudo-direita">
        <div className="imagens-corpo">
          <img src={personagem.frente} alt="Frente" className="imagem-frente" />
          <img src={personagem.costas} alt="Costas" className="imagem-costas" />
        </div>
        
        <div className="container-botao">
          <div className={`corpo corpo-frente ${idPersonagem}`}>
            <button 
              className={`botao-corpo frente-cabeca ${idPersonagem}-frente-cabeca`} 
              onClick={() => handleAreaClick("cabeca-frente")} 
            />
            <button 
              className={`botao-corpo frente-barriga ${idPersonagem}-frente-barriga`} 
              onClick={() => handleAreaClick("barriga")} 
            />
            <button 
              className={`botao-corpo frente-braco-esquerdo ${idPersonagem}-frente-braco-esquerdo`} 
              onClick={() => handleAreaClick("braco-esquerdo-frente")} 
            />
            <button 
              className={`botao-corpo frente-braco-direito ${idPersonagem}-frente-braco-direito`} 
              onClick={() => handleAreaClick("braco-direito-frente")} 
            />
            <button 
              className={`botao-corpo frente-perna-esquerda ${idPersonagem}-frente-perna-esquerda`} 
              onClick={() => handleAreaClick("perna-esquerda-frente")} 
            />
            <button 
              className={`botao-corpo frente-perna-direita ${idPersonagem}-frente-perna-direita`} 
              onClick={() => handleAreaClick("perna-direita-frente")} 
            />
          </div>
          
          <div className={`corpo corpo-costas ${idPersonagem}`}>
            <button 
              className={`botao-corpo costas-cabeca ${idPersonagem}-costas-cabeca`} 
              onClick={() => handleAreaClick("cabeca-costas")} 
            />
            <button 
              className={`botao-corpo costas-costas ${idPersonagem}-costas-costas`} 
              onClick={() => handleAreaClick("costas")} 
            />
            <button 
              className={`botao-corpo costas-braco-esquerdo ${idPersonagem}-costas-braco-esquerdo`} 
              onClick={() => handleAreaClick("braco-esquerdo-costas")} 
            />
            <button 
              className={`botao-corpo costas-braco-direito ${idPersonagem}-costas-braco-direito`} 
              onClick={() => handleAreaClick("braco-direito-costas")} 
            />
            <button 
              className={`botao-corpo costas-perna-esquerda ${idPersonagem}-costas-perna-esquerda`} 
              onClick={() => handleAreaClick("perna-esquerda-costas")} 
            />
            <button 
              className={`botao-corpo costas-perna-direita ${idPersonagem}-costas-perna-direita`} 
              onClick={() => handleAreaClick("perna-direita-costas")} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoresSelector;