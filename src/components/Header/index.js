import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import iconSearch from '../../assets/icons/search.png'
import iconShoping from '../../assets/icons/shopping.png'

export default function Header() {
  return (
    <Container>
      <div className='menu-links'>
        <Link to='/home'>
          <h1><span>Chef</span>FIT</h1>
        </Link>
        <Link className='link' to='/home'>Pratos</Link>
        <Link className='link' to ='/restaurants'>Restaurantes</Link>
      </div>
      
      <div className='options'>
        <img src={iconSearch} alt='Buscar Item'/>
      </div>

      <Link to='/cart'>
        <img src={iconShoping} alt='Carrinho de Compras'/>
      </Link>
    </Container>
  );
}
