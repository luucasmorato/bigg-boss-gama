import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  
  .content{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 65px 0 0 50px;

    h1 {
      font-size: 30px;
      line-height: 54px;
      color: #E9511D;
      margin-bottom:30px
    }
  }

  .content-resume {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin:50px;
    height: 100%;
    align-content: flex-end;

    .buy-item {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 30px;

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
    }

    .price {
      margin-top: 50px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    
      p {
        font-size: 25px;
        font-weight: bold;
        line-height: 54px;
        color: #656565;
      }
      h1 {
        font-size: 30px;
        font-weight: bold;
        line-height: 54px;
        color: #E9511D;
      }

    }

    .freight {
      margin-top: 20px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 25px;
        font-weight: bold;
        line-height: 54px;
        color: #656565;
      }

      p {
        font-size: 25px;
        font-weight: bold;
        line-height: 54px;
        color: #656565;
      }
    }

    .card-container {
      width: 100%;
      display: flex;
      justify-content: space-around;

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
        justify-content: center;

        .time {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          span {
            margin: 0 0 0 15px;
            color: #656565;
          }
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top:20px;

          span {
            margin: 0 0 0 15px;
            color: #656565;
          }
          img {
            margin: 0 -8px 0 -8px;
          }
        }

        .content-card {
          display: flex;
          justify-content: space-between;

          p {
            font-size: 20px;
            font-weight: bold;
            line-height: 54px;
            color: #656565;
          }

          p:last-child {
            color: #E9511D;
          }
        }
      }
    }
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
    width: 100%;
    height: 40px;
    margin: 35px 0 0 0;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 600px){
    width:90%;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    .content{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0;

      h1 {
        text-align: center;
        line-height: 54px;
        margin-bottom: 10px
      }

      img {
        width: 100%;
      }
    }
    
    .content-resume {
      width: 100%;
      justify-content: center;
      margin: 0 20px;

      .price, .freight {
        margin: 10px 0;
        justify-content: space-between;
        
        p {
          font-size: 20px;
          font-weight: bold;
          line-height: 54px;
        }
        h1 {
          font-size: 20px;
          font-weight: bold;
          line-height: 54px;
        }
      }

      .card-container {
        flex-wrap: wrap;
        flex-direction: column;
        align-items:center;
        
        .card{
          max-width: 100%;
          margin: 7px 0 10px 0 !important;
          justify-content: center;

          .time img {
            width: 15px;
            height: 15px;
          }

          .location img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
