import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import imgCremeAbobora from '../../assets/images/creme-abobora.png';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <>
      <Header/>
      
      <Container>
        <div className="content">
         
          <div id="title-page">
            <h2>
              Tudo bom, Lucas? Identificamos que você quer ganhar massa muscular. Que tal escolher entre essas marmitinhas?
            </h2>
            <h3>Perfeito para o seu prato fit:</h3>
          </div>
          
          <div className="content-items">
            
            <div className="item">
              <Link to='/product'>
                <img src={imgCremeAbobora} alt="imagem card"/>
              </Link>
              <span>Creme de moranga</span>
              <div className="price">
                <p>110 g</p>
                <p>R$ 17,90</p>
              </div>
              <Link to='/product-resume'>
                <button>Adicionar</button>
              </Link>
            </div>
            
            <div className="item">
              <Link to='/product'>
                <img src={imgCremeAbobora} alt="imagem card"/>
              </Link>
              <span>Creme de moranga</span>
              <div className="price">
                <p>110 g</p>
                <p>R$ 17,90</p>
              </div>
              <Link to='/product-resume'>
                <button>Adicionar</button>
              </Link>
            </div>

            <div className="item">
              <Link to='/product'>
                <img src={imgCremeAbobora} alt="imagem card"/>                
              </Link>
              <span>Creme de moranga</span>
              <div className="price">
                <p>R$ 17,90</p>
                <p>110 g</p>
              </div>
              <Link to='/product-resume'>
                <button>Adicionar</button>
              </Link>
            </div>

            <div className="item">
              <Link to='/product'>
                <img src={imgCremeAbobora} alt="imagem card"/>
              </Link>
              <span>Creme de moranga</span>
              <div className="price">
                <p>110 g</p>
                <p>R$ 17,90</p>
              </div>
              <Link to='/product-resume'>
                <button>Adicionar</button>
              </Link>
            </div>
            
          </div>
        </div>
      </Container>
    </>
  );
}
