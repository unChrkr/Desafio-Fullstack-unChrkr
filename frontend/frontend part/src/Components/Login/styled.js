import styled from "styled-components";

export const IndexContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: black;
    width: 100vw;
    height:100vh;
    justify-content: center;
    align-items: center;
    h1{
        color: var(--color-pink-easy);
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 25px;
    }


`

export const FormContainer = styled.div`
    background-color: #212529;
    display:flex;
    flex-direction: column;
    height: 400px;
    padding: 0 20px;
    border-radius: 5px;

    @media(min-width: 769px){
        height: 520px;
        width: 380px;

    }
    form{
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
        height: 400px;
        gap: 14px;
        color: var(--color-grey-5);
        width: 300px;
        @media(min-width: 769px){
            height: 520px;
            width: 380px;
            gap: 28px;
        }

        input{
            background-color: var(--color-grey-3);
            padding: 13px;
            border:none;
            border-radius: 5px;
            color: var(--color-grey-5);

            ::hover{
                border: 1px solid white;

            }

            ::placeholder{
                color: var(--color-grey-4);
            }
        }
        label{
            font-size: 13px;
        }
        span{
            display: flex;
            color: var(--color-grey-5);
            height: 57px;
            align-items: flex-end;
            justify-content: center;
            font-weight: bold;
            font-size: 20px;
        }
    }
`

export const StyledP = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--color-grey-4);
    margin-top: 7px;
    align-items: center;
    font-size: 13px;
`

export const PinkButton = styled.button`
    padding: 10px;
    background-color: var(--color-pink-easy);
    color: var(--color-grey-5);
    border-radius: 5px;
    border: none;
    margin-top: 12px;
    border: 1px solid var(--color-pink-easy);
    :hover{
        border: 1px solid white;
    }

`

export const GreyButton = styled.button`
    background-color: var(--color-grey-4);
    color: var(--color-grey-5);
    border-radius: 5px;
    border: none;
    padding: 12px;
    border: 1px solid var(--color-grey-4);
    :hover{
        border: 1px solid white;
    }
`
