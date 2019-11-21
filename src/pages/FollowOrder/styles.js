import styled from 'styled-components';

export const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    height: 80%;
    align-items: center;
    justify-content: space-around;

    .products {
        /* max-width: 900px; */
        h1 {
            color: #E9511D;
        }

        div{
            display: flex;
            align-items: center;
            padding: 10px 0;
        }
    }

    .details {
        .status {
            display: flex;
            align-items: center;
            padding: 8px 0;
        }
    }

    .btn-contact {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    button {
        border: 1px solid #E9511D;
        color: #E9511D;
        background: #fff;
        border-radius: 0px;
        height: 70px;

        &:hover {
            border: 2px solid #E9511D;
            background: #E9511D;
            color: #fff;
        }
    }

    img {
        height: 15px;
        margin-right: 4px;
    }

    @media (max-width: 600px){
    
        display: flex;
        flex-direction: column;
        height: 80%;
        align-items: start  ;
        justify-content: space-around;

        .details, .products {
            margin-left: 30px;
        }

    }

`;

export const Marker = styled.div`
    background: #00D63C;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    margin-right: 5px;

`;