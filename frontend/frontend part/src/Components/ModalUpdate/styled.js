import styled from "styled-components";


export const StyledDivModalUpdate = styled.div`
    display:flex;
    flex-direction: column;
    background-color: var(--color-grey-2);
    color: var(--color-grey-5);
    width: 300px;
    height: 272px;
    position: relative;
    form{
        display: flex;
        flex-direction: column;
        padding: 60px 20px;
        gap: 20px;
        input{
            background-color: var(--color-grey-3);
            border: 1px solid var(--color-grey-5);
            padding: 10px;
            color: var(--color-grey-5);
            border-radius: 4px;
        }
        select{
            background-color: var(--color-grey-3);
            border: 1px solid var(--color-grey-5);
            padding: 10px;
            color: var(--color-grey-5);
            border-radius: 4px;
        }
        button{
            background-color: var(--color-pink-easy);
            color: var(--color-grey-5);
            border: none;
            padding: 10px;
            border-radius: 4px;

        }
    }

`
export const StyledCloseModalButton = styled.button`

    position: absolute;
    right: 20px;
    top: 14px;
    border: none;
    background-color: var(--color-grey-2);
    color: var(--color-grey-5);
    font-size: 20px;


`