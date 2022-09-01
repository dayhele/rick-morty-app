import * as S from "./styles";

export default function Pagination({ prev, next, onPrevious, onNext }) {
  const previousButton = () => {
    onPrevious();
  };

  const nextButton = () => {
    onNext();
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationButtons>
        {prev ? (<S.Button onClick={previousButton}>Voltar</S.Button>) : null} 
        {next ? (<S.Button onClick={nextButton}>Próximo</S.Button>) : null}
      </S.PaginationButtons>
    </S.PaginationWrapper>
  );
}
