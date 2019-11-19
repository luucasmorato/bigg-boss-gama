import React from 'react';

import { Container } from './styles';
import { Search, Cesta } from "../../assets"

export default function Header() {
  return (
    <Container>
      <div className="menu-links">
        <h1>Fit<span>Food</span></h1>
          <a className="link-kit" href="">Kits e pratos individuais</a>
          <a className='link-individual' href="">Pratos individuais</a>
      </div>
          <a href="#">
            <img src={Search} alt="Buscar item"/>
          </a>
          <a href="#">
            <img src={Cesta} alt="Cesta de compras"/>
          </a>
    </Container>
  );
}
