import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 25px 20px 0 0px;
  
  .content{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 65px 0 0 50px;
  }

  .content h1 {
    font-size: 30px;
    font-weight: bold;
    line-height: 54px;
    color: #E9511D;
    margin-bottom:30px
  }
  .content-resume {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin:50px;
    height: 100%;
    align-content: flex-end;

  }
  

  .buy-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
  }
  .quantity-item {
    border: 1px solid #ccc;
    transition: .2s;
    box-shadow: 2px 2px 7px 1px rgba(0,0,0,0.3);
    width:50px;
    height: 47px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #656565;
    font-size: 16px;
  }
  .price h1 {
    font-size: 30px;
    font-weight: bold;
    line-height: 54px;
    color: #E9511D;
  }
  .price p {
    font-size: 25px;
    font-weight: bold;
    line-height: 54px;
    color: #656565;
  }
  .price {
    margin-top: 50px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .freight {
    margin-top: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .freight h1 {
    font-size: 25px;
    font-weight: bold;
    line-height: 54px;
    color: #656565;
  }
  .freight p {
    font-size: 25px;
    font-weight: bold;
    line-height: 54px;
    color: #656565;
  }
  .card-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .card {
    padding: 20px;
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #F6F6F6;
    margin-top: 50px;
    margin-right:10px;
    justify-content: center
  }
  .time {
    display: flex;
    align-items: center;
    justify-content: flex-start
  }
  .time span {
    margin: 0 0 0 15px;
    color: #656565;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top:20px;
  }
  .location span {
    margin: 0 0 0 15px;
    color: #656565;
  }
  .location img {
    margin: 0 -8px 0 -8px;
  }
  .content-card {
    display: flex;
    justify-content: space-between;
  }
  .content-card p {
    font-size: 20px;
    font-weight: bold;
    line-height: 54px;
    color: #656565;
  }
  .content-card p:last-child {
    color: #E9511D;
  }

  button {
    width: 50px;
    background-color: #fff;
    color: #000;
    font-size: 16px
  }
  button.btn-finish {
    border-radius: 5px;
    background-color: #E9511D;
    width: 200px;
    height: 40px;
    margin: 35px 0 0 0;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 600px){
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    .content{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0
    }
    .content h1 {
      text-align: center;
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items:center
    }
    .time img {
      width: 16px;
      height: 16px;
    }

    .location img {
      width: 20px;
      height: 20px;
      margin: 0
    }

    img {
      width: 100%;
      height:250px;
    }
    span {
      text-align: center;
    }
    
    .content-resume {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      margin: 0 10px
    }
    .content-resume h2 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
    color: #E9511D;
    margin-top: 20px;
  }
  .content-resume p {
    font-size: 20px;
    line-height:44px;
    color: #656565;
    margin-bottom:15px;
  }
  }

`;
