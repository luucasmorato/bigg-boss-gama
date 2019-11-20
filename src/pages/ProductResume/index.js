import React, {useState} from 'react';
import Header from '../../components/Header';
import BgCremeAbobora from "../../assets/images/creme-abobora-large.png"
import { Container } from './styles';
import Location from "../../assets/icons/location.png"
import Timer from "../../assets/icons/timer.png"

export default function ProductResume() {

  const [coutPedido, setCountPedido ] = useState(0)
  const [value , setValue] = ("17,90")

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
            <div className="price">
              <h1>Creme de Moranga</h1>
              <p>R$ 17,90</p>
            </div>
              <hr/>
              <div className="freight">
              <h1>Frete</h1>
              <p>R$ 7,90</p>
              </div>
              <div className="card-container">
                <div className="card">
                  <div className="time">
                    <img src={Timer} alt="tempo"/> <span>30-50min</span>
                  </div>
                  <div className="location">
                    <img src={Location} alt="Localização"/> <span>Rua Conceição Diniz, 180</span>
                  </div>
                </div>
                <div className="card">
                <div className="content-card">
                <p>Subtotal</p>
                <p>R$ 13,90</p>

                </div>
                <div>
                  <button className="btn-finish">Finalizar pedido</button>
                </div>
                </div>
              </div>
            </div>
        </Container>
    </>
  );
}
