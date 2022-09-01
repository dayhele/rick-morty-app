import styled from "styled-components";

export const PaginationWrapper = styled.nav `
  display: flex;
  align-self: center;
  width: 180px;

`;

export const PaginationButtons = styled.ul `
    list-style: none;
    flex-direction: row;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

export const Button = styled.button `  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 56px;
  border: 2px solid #565656;
  margin: 0 12px 0 0;
  border-radius: 8px;
  background: #FBFEA2;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;