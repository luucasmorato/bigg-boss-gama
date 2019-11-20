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
        width: 85%;
        display: flex;

        div.intro {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            h2 {
                color: #E9511D;
            }
            p {
                color: #585858;
            }

            h1, h2, p {
                max-width: 90%;
                padding: 8px;
                b {
                    color: #E9511D;
                }
            }
        }

        div.data {
            width: 50%;
            border-radius: 6px;
            box-shadow: 2px 2px 7px 1px rgba(0,0,0,0.3);
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            
            h4, input, select {
                width: 80%;
                color: #656565;
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
            flex-direction: column;
            
            div.intro {
                width: 100%;
            }

            div.data {
                width: 100%;
                margin: 20px 0;
                padding: 15px 0;

                h4 {
                    font-size: 1.2rem;
                    padding: 5px 0;
                }

                form {
                    margin: 0;
                }
            }
        }
    }
`;
