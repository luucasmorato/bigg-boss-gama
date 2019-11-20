import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import BgCremeAbobora from "../../assets/images/creme-abobora-large.png"
import { Container } from './styles';

export default function Product() {
  return (
    <>
        <Header />
        
        <Container>
            <div className="content">
              <img src={BgCremeAbobora} alt="imagem creme de abobora"/>
              <span>Creme de Abobora</span>
              
              <div className="price">
                <p>110 g</p>
                <p>R$ 17,90</p>
              </div>

              <Link to="product-resume">
                <button>Adicionar</button>
              </Link>
            </div>

            <div className="content-resume">
              <h2>Ingredientes</h2>
              <p>Abóbora moranga, creme de leite fresco, sal a gosto.</p>
              <h2>
                Sobre o creme de abóbora
              </h2>
              <p>O creme de abóbora é ideal para quem está procurando ganhar massa muscular, por que é uma fonte rica de carboidratos, além de ser muito saboroso.</p>
              <h2>Tabela nutricional</h2>          
              <table className="table">
                <tbody>

                  <tr>
                    <td>Valor energético</td>
                    <td>198Kcal</td>
                  </tr>
                  <tr>
                    <td>Carboidratos</td>
                    <td>8g</td>
                  </tr>
                  <tr>
                    <td>Proteínas</td>
                    <td>21g</td>
                  </tr>
                  <tr>
                    <td>Groduras totais</td>
                    <td>9g</td>
                  </tr>
                  <tr>
                    <td>Gorduras saturadas</td>
                    <td>3.5g</td>
                  </tr>
                  <tr>
                    <td>Gorduras trans</td>
                    <td>1.4g</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </Container>
    </>
  );
}
