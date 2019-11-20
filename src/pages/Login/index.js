import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
        <div className="content">
           
            <div className="data">
                <h4>Para acessar, faça login com sua conta do Queima Diária:</h4>

                <form>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Senha"/>
                </form>
                <Link to="/form-data">
                    <button> Entrar </button>
                </Link>

                <a href="https://www.queimadiaria.com/">
                    Cadastre-se
                </a>
            </div>
        </div>
    </Container>
  );
}
