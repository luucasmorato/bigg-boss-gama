import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 25px 20px 0 0px;
  
  .content-resume {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin:50px;
  }
  .content-resume h2 {
    font-size: 30px;
    font-weight: bold;
    line-height: 54px;
    color: #E9511D;
  }
  .content-resume p {
    font-size: 20px;
    line-height:44px;
    color: #656565;
    margin-bottom:30px;
  }

  .content{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 65px 0 0 50px;
  }

  .price {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 30px 2px;
  }
  .price > p {
    font-size: 20px;
    color: #656565;
    font-weight: bold;
  }
  .table {
    line-height:54px;
    color: #656565;
    font-size: 20px;
  }

  span {
    margin-top: 20px;
    color: #E9511D;
    font-size: 1.3rem;
    font-weight: bold;
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
    img {
      width: 100%;
      height:250px;
    }
    span {
      text-align: center;
    }
    .price p {
      margin: 0 10px;
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
