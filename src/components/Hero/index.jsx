import * as S from "./styles";

export default function Hero(props) {
  return (
    <S.HeroContainer>
      <S.Title>Personagens</S.Title>
      <S.HeroWrapper>
        {props.children}
      </S.HeroWrapper>
    </S.HeroContainer>
  );
}
