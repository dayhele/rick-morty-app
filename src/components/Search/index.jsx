import { KeyboardEvent } from "react";
import * as S from "./styles";

export default function SearchInput({doSearch = () => {}, ...props}) {
  const getInputValue = (e) => {
    props.getSearchValue(e.target.value);
  };

  return (
    <S.Search>
      <S.SearchBar type="text" onKeyUp={getInputValue} />
      <S.SearchButton onClick={doSearch}>
        Pesquisar
      </S.SearchButton>
    </S.Search>
  );
}
