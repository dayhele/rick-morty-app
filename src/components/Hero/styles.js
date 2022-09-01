import styled from "styled-components";

export const HeroContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #d9eff9;
  padding: 56px 0px;
  min-height: calc(100vh - 200px);
`;

export const Title = styled.h1 `
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin: 12px 24px 32px 12px;
    display: flex;
    justify-content: center;
`;
    
export const HeroWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
`;

export const PaginationContainer = styled.div `
  display: flex;
  flex-direction: row;
`;

