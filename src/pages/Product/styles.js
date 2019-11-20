import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 20px 0 0;
  
  .content-resume {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin:50px;
    
    h2 {
      font-size: 30px;
      line-height: 54px;
      color: #E9511D;
    }

    p {
      font-size: 20px;
      line-height:44px;
      color: #656565;
      margin-bottom:30px;
    }

    .table {
      line-height:54px;
      color: #656565;
      font-size: 20px;
    }

  }

  .content{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 65px 0 0 50px;

    button {
      width: 100%;
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

    span {
      margin-top: 20px;
      color: #E9511D;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  @media (max-width: 600px){
    width:90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    .content{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0;
      
      img {
        width: 100%;
      }
      
      span {
        text-align: center;
      }
    }
   
    .content-resume {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      margin: 0 10px;
  
      h2 {
        text-align: center;
        font-size: 30px;
        line-height: 40px;
        margin-top: 20px;
      }

      p {
        font-size: 20px;
        line-height:35px;
        margin-bottom:15px;
      }
    }
  }
`;
