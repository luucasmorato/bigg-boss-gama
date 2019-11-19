import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  width: 100%;
  height: 80px;
  background-color: #fff;
  /* display: flex; */

  .content-title {
    display: flex;
    width: 100%;
  }

  .content-items {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin-top:50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    color: #656565;
    font-size: 35px;
    margin-right:100px;
  }
  h3 {
    margin-top:30px;
    color: #E9511D;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }
  img {
    width: 375px;
    height: 250px;
    margin-top: 20px;
  }
  span {
    color: #E9511D;
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: bold;
  }
  button {
    background: #E9511D;
    border-radius: 10px;
    width: 350px;
    height: 60px;
    color: #fff;
    font-weight: bold;
    border: none;
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  h2 {
    color: #656565;
    font-size: 30px;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin: 0 0 0 40px;
  }

  .content-title {

  }

  .content-items {

  }
  .item {

  }
  .price {

  }
  }

`;
