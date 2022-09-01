import * as S from "./styles";

export default function NotFound() {
    return (
        <S.NotFoundContainer>
            <S.NotFoundText>
                Personagem não encontrado... 
            </S.NotFoundText>
            <S.NotFoundGIF src="/morty_confused.gif"></S.NotFoundGIF>
        </S.NotFoundContainer>
    );
  }
  