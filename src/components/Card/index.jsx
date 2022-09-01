import * as S from "./styles";

export default function Card(props) {
  return (
    <S.Card>
        <S.Image src={props.character.image} />
        <S.Name>{props.character.name}</S.Name>
        <S.Info> {props.character.gender} • {props.character.status}</S.Info>

    </S.Card>
  );
}
