import styled from 'styled-components';
import background from '../../assets/images/background-login-desktop.png';

export const Container = styled.div`

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    background: #191920 url(${background}) no-repeat center top;

    div.content {
        height: 85%;
        width: 50%;
        display: flex;

        div.data {
            width: 100%;
            border-radius: 6px;
            box-shadow: 2px 2px 7px 1px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-top: 50px;

            a {
                margin-top: 5px;
                color: #E9511D;
                font-size: 1.3rem;
            }
            
            h4, input {
                width: 63%;
                color: #656565;
            }

            button {
                min-width: 250px;
            }

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin: 40px 0;
            }
        }
    }

    @media (max-width: 600px) {
        font-size: 1.1rem;

        div.content{
            width: 90%;
            height: 95%;

            div.data {
                width: 100%;
                padding-top: 0;

                a {
                    font-size: 1rem;
                }

                h4 {
                    font-size: 1.2rem;
                    padding: 5px 0;
                }

                h4, input {
                    width: 85%;
                }

                form {
                    margin: 35px 0;
                }

                button {
                    width: 80%; 
                }
            }
        }
    }
`;
