import React from 'react';

import { Container } from './styles';

export default function Login() {
  return (
    <Container>
        <div className="content">
            <div className="intro">
                <h1><b>FIT</b>FOOD</h1>
                <h2>Quer alcançar seus resultados mais rápido e ganhar um plus de saúde?</h2>
                <p align="justify">A Queima Diária acaba de lançar o FitFood, que é um plano alimentar focado os seus objetivos - sejam eles estéticos ou ligados à sua saúde. </p>
            </div>

            <div className="data">
                <h4>Para receber o seu plano de dieta personalisado, basta preencher o formulário abaixo:</h4>

                <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Peso"/>
                    <input type="text" placeholder="Altura"/>
                    <select name="objective" id="objective">
                        <option value="obj">Qual o seu objetivo?</option>
                    </select>
                    <button> Quero melhorar meus resultados! </button>
                </form>

            </div>
        </div>
    </Container>
  );
}
