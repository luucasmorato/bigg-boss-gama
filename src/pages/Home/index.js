import React from 'react';
import {ImgCard} from "../../assets"
import { Container } from './styles';


export default function Home() {


  return (
    <Container>
      <div className="content">
        <h2>
        Tudo bom, Lucas? Identificamos que você quer ganhar massa muscular. Que tal escolher entre essas marmitinhas?
        </h2>
        <h3>Perfeito para o seu prato fit:</h3>
        <div className="content-items">
          <div className="item">
            <img src={ImgCard} alt="imagem card"/>
            <span>Creme de moranga</span>
            <div className="price">
              <p>110 g</p>
              <p>R$ 17,90</p>
            </div>
            <button>Adicionar</button>
          </div>
          <div className="item">
            <img src={ImgCard} alt="imagem card"/>
            <span>Creme de moranga</span>
            <div className="price">
              <p>110 g</p>
              <p>R$ 17,90</p>
            </div>
            <button>Adicionar</button>
          </div>
          <div className="item">
            <img src={ImgCard} alt="imagem card"/>
            <span>Creme de moranga</span>
            <div className="price">
              <p>R$ 17,90</p>
              <p>110 g</p>
            </div>
            <button>Adicionar</button>
          </div>
          <div className="item">
            <img src={ImgCard} alt="imagem card"/>
            <span>Creme de moranga</span>
            <div className="price">
              <p>110 g</p>
              <p>R$ 17,90</p>
            </div>
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
