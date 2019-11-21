import React from 'react';
import Header from '../../components/Header';
import { Container, Marker} from './styles';
import contact from '../../assets/icons/contact.png';
import timer from '../../assets/icons/timer.png';

export default function FollowOrder() {
  return (
   
    <>
        <Header />

        <Container>
            <div className="products">
                <h1>
                    Creme de moranga
                </h1>
                <div>
                    <img src={timer} alt="Timer"/>
                    <p>Entrega em 30 - 40 min</p>
                </div>
            </div>

            <div className="details">
                <h2>
                    Detalhes do pedido
                </h2>
                <div className="status"> <Marker/> Realizado </div>
                <div className="status"> <Marker/> Confirmado </div>
                <div className="status"> <Marker/> Preparo </div>
                <div className="status"> <Marker/> Saiu para entrega </div>
                <div className="status"> <Marker/> Pedido entregue </div>
            </div>

            <div className="btn-contact">
                <a href="tel:555-555-5555">
                    <button> <img src={contact} alt="Contato"/> Entre em contato com o restaurante </button>
                </a>
            </div>

        </Container>
    </>
  );
}
