import * as S from "./styles";

export default function Hero(props) {
  return (
    <S.HeroContainer>
      <S.Title>Personagens</S.Title>
      <S.PaginationContainer />
      <S.HeroWrapper>
        {props.children}
      </S.HeroWrapper>
    </S.HeroContainer>
  );
}
