import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  width: 100%;
  height: 80px;
  display: flex;
  box-shadow: 2px 2px 7px 1px rgba(0,0,0,0.3);

  .menu-links {
    display: flex;
    align-items: center;
    width: 100%;
  }

  h1 {
    color: #E9511D;
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

  .link {
    color: #656565;
    font-size: 1rem;

    &:hover {
      color: #E9511D;
    }
  }

  .menu-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end
  }

  img {
    height: 27px;
  }

  @media only screen and (max-width: 600px) {

    margin-bottom: 50px;

    .menu-links {

    }
    .link, .options {
      display: none;
    }
  }
`;
