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
    padding: 0;
    justify-content: space-between;
    width: 100%;
    
`;

export const Button = styled.button `  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 56px;
  border: 2px solid #565656;
  border-radius: 12px;
  background: #c0f1e5;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;