import styled from "styled-components";

export const Search = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
`;

export const SearchBar = styled.input`
  width: 300px;
  height: 16px;
  padding: 12px;
  border: 2px solid #565656;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
`;

export const SearchButton = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 16px;
  padding: 20px;
  border: 2px solid #565656;
  margin: 0 12px 0 0;
  border-radius: 8px;
  background: #FBFEA2;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;
