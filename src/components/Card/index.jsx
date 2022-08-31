import * as S from "./styles";

export default function Card(props) {
  return (
    <S.Card>
        <S.Image src={props.character.image} />
        <S.Name>{props.character.name}</S.Name>
        <S.Status>{props.character.status}</S.Status>
    </S.Card>
  );
}
