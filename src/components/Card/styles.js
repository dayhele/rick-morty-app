import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 380px;
  border: 2px solid #3b3b3b;
  border-radius: 12px;
  padding: 24px 12px;
  margin: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
`;

export const Name = styled.h2 `
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;

export const Status = styled.p`
    font-size: 16px;
    text-align: center;
`;
