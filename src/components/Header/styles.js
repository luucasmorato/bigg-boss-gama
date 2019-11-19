import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;

   .menu-links {
    display: flex;
    align-items: center;
    width: 100%;
    /* justify-content:; */
  }
  h1 {
    color: #E9511D;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 35px;
  }
  h1 span {
    color: #000;
    font-weight:300
  }

  a {
    margin: 0 30px;
  }

  .link-kit {
    color: #E9511D;
    line-height: 40px;
    font-size: 16px;
  }

  .link-individual {
    color: #656565;
    line-height: 40px;
    font-size: 16px;
  }

  .menu-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end
  }

  img {
    width: 16px;
    height: 16px;
  }
`;
