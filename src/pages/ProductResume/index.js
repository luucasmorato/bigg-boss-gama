import React, {useState} from 'react';
import Header from '../../components/Header';
import BgCremeAbobora from "../../assets/images/creme-abobora-large.png"
import { Container } from './styles';

export default function ProductResume() {

  const [coutPedido, setCountPedido ] = useState(0)

  return (
    <>
        <Header />
        
        <Container>
     
            <div className="content">
              <h1>Resumo do pedido</h1>
              <img src={BgCremeAbobora} alt="imagem creme de abobora"/>
            </div>
            <div className="content-resume">
              <div className="buy-item">
                <button onClick={() => setCountPedido(coutPedido - 1)}>-</button>
                <div className="quantity-item">{coutPedido}</div>
                <button onClick={() => setCountPedido(coutPedido + 1)}>+</button>
            </div>
            </div>
        </Container>
    </>
  );
}
