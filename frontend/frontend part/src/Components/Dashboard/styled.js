import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

export const StyledHeader = styled.header``;
export const StyledHeader_divUpper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid var(--color-grey-2);

  h1 {
    color: var(--color-pink-easy);
    font-weight: bold;
    font-size: 25px;
  }

  button {
    color: var(--color-grey-5);
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: 6px;
    padding: 8px 32px;
    :hover {
      border: 1px solid white;
    }
  }
  @media (min-width: 769px) {
    padding: 50px 25%;
  }
`;
export const StyledHeader_divLower = styled.div`
  color: white;
  border-bottom: 1px solid var(--color-grey-2);
  padding: 40px 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 23px;
    font-weight: bold;
  }
  p {
    color: var(--color-grey-4);
  }
  @media (min-width: 769px) {
    padding: 50px 25%;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-5);
  padding: 30px 10px;
  gap: 20px;

  h2 {
    font-weight: bold;
  }
  @media (min-width: 769px) {
    padding: 50px 25%;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  button {
    background-color: var(--color-grey-3);
    color: var(--color-grey-5);
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid var(--color-grey-3);
    :hover {
      border: 1px solid white;
    }
  }
  p {
    font-size: 20px;
  }
`;

export const StyledUl = styled.ul`
  background-color: var(--color-grey-3);
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLi = styled.li`
  background-color: var(--color-grey-1);
  border-radius: 4px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledClass = styled.span`
  display: flex;
  gap: 20px;
  p {
    color: var(--color-grey-3);
  }
  button {
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    color: var(--color-grey-5);
    border-radius: 3px;
    :hover {
      border: 1px solid white;
    }
  }
`;

export const StyledDivModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-2);
  color: var(--color-grey-5);
  width: 300px;
  height: 272px;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 10px;
    input {
      background-color: var(--color-grey-3);
      border: 1px solid var(--color-grey-5);
      padding: 10px;
      color: var(--color-grey-5);
      border-radius: 4px;
    }
    select {
      background-color: var(--color-grey-3);
      border: 1px solid var(--color-grey-5);
      padding: 10px;
      color: var(--color-grey-5);
      border-radius: 4px;
    }
    button {
      background-color: var(--color-pink-easy);
      color: var(--color-grey-5);
      border: none;
      padding: 10px;
      border-radius: 4px;
    }
  }
  span {
    margin-bottom: 10px;
    background-color: var(--color-grey-3);
    padding: 20px;
  }
`;

export const StyledCloseModalButton = styled.button`
  position: absolute;
  right: 20px;
  top: 14px;
  border: none;
  background-color: var(--color-grey-3);
  color: var(--color-grey-5);
  font-size: 20px;
`;
