import styled from 'styled-components';

export const Container = styled.div`

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div.content {
        height: 85%;
        width: 85%;
        display: flex;

        div.intro {
            width: 50%;
            text-align: center;
        }

        div.data {
            width: 50%;
            border-radius: 6px;
            box-shadow: 2px 2px 7px 1px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin: 40px 0;

                input, select {
                    width: 80%;
                }
            }
        }
    }

    @media (max-width: 600px) {
        div.content{
            flex-direction: column;
            
            
            div.intro {
                width: 100%;
            }

            div.data {
                width: 100%;
            }

        }
    }

`;
