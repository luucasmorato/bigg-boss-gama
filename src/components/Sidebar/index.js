import React from 'react';
import { Container } from './styles';

export default function Sidebar(){
  return (
    <Container>

    <div className="container">
      <div className="content">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
          <ul id="menu">
            <li><a href="#">test</a></li>
            <li><a href="#">test</a></li>
            <li><a href="#">teste</a></li>
            <li><a href="#">test</a></li>
          </ul>
         </div>
        </nav>
      </div>
     </div>
    </Container>
  )
}