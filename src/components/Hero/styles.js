import styled from "styled-components";

export const HeroContainer = styled.div `
  width: calc(100% - 162px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f0f8ff;
  padding: 56px 80px;
`;

export const Title = styled.h1 `
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 52px;
`;
    
export const HeroWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

