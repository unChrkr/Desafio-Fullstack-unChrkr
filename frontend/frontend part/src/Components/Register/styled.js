import styled from "styled-components";

export const RegisterContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: black;
    width: 100vw;
    height:100vh;
    justify-content: center;
    align-items: center;

`

export const FormContainer = styled.div`
    background-color: var(--color-grey-2);
    display:flex;
    flex-direction: column;
    height: 400px;
    padding: 0 20px;
    border-radius: 5px;

    @media(min-width: 769px){
        height: 850px;
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
        overflow-x: auto;
        ::-webkit-scrollbar {
            width: 5px;
}
        @media(min-width: 769px){
            height: 850px;
            width: 380px;
            gap: 10px;
        }

        input{
            background-color: var(--color-grey-3);
            padding: 13px;
            border-radius: 5px;
            color: var(--color-grey-5);
            border: 1px solid var(--color-grey-3);

            :focus{
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
        select{
            background-color: var(--color-grey-3);
            padding: 13px;
            border-radius: 5px;
            color: var(--color-grey-5);
            border: 1px solid var(--color-grey-3);
            color:var(--color-grey-4);
            :focus{
                border: 1px solid white;
                option{
                    color:var(--color-grey-4);
                }
            }
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
    background-color: var(--color-pink-dark);
    color: var(--color-grey-5);
    border-radius: 5px;
    border: none;
    margin-top: 12px;
    margin-bottom: 20px;

    :hover{
        border: 1px solid white;
    }

`
export const HeaderSpan = styled.span`
    display: flex;
    width: 336px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    button{
        color:var(--color-grey-5);
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
        border-radius: 6px;
        padding: 8px 32px;
        :hover{
            border: 1px solid white;
        }
    }
    h1{
        color: var(--color-pink-easy);
        font-weight: bold;
        font-size: 25px;
    }
`
export const FormDiv = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
    p{
        color: var(--color-grey-4);

    }
    h2{
        font-size: 20px;
        font-weight: bold;
    }


`