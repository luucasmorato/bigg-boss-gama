import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 40px;
  width: 100%;
  height: 85%;
  display: flex; 
  align-items: center;
  justify-content: space-around;

  .content {
    display: flex; 
    width: 100%;
    flex-direction: column;

    div#title-page {
      h2 {
        font-style: normal;
        color: #656565;
        font-size: 3rem;
      }
      h3 {
        margin: 35px 0;
        color: #E9511D;
        font-size: 2rem;
      }
    }

    .content-items {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      
      .item {
        display: flex;
        flex-direction: column;
        
        img {
          width: 100%;
        }
        
        span {
          color: #E9511D;
          font-size: 1.3rem;
          font-weight: bold;
        }
       
        div.price {
          display: flex;
          justify-content: space-between;
          padding: 10px 3px;
        }
       
        button {
          border-radius: 10px;
          width: 100%;
          height: 60px;
          font-weight: bold;
          font-size: 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 20px;
    margin-top: 620px;

    .content {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      div#title-page {
        h2 {
          font-size: 1.5rem;
        }
        h3 {
          font-size: 1.3rem;
          margin: 25px 0;
        }
    }

    .content-items {
      .item {
        button {
          margin-bottom: 20px;
        }
      }
    }
  }
  }
`;
