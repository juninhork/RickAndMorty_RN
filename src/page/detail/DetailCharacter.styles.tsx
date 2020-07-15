import styled from 'styled-components/native';

export const DetailContainer = styled.View`
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  height: 100%;
  width: 100%;
`;

export const ContainerTransparent = styled.View`
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const CharacterImage = styled.Image.attrs({resizeMode: 'contain'})`
  margin-top: 20px;
  height: 150px;
  width: 100%;
`;

export const TextName = styled.Text`
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: white;
`;

export const TextDescription = styled.Text`
  text-align: center;
  font-size: 19px;
  color: white;
`;

export const TextInfo = styled.Text`
  text-align: center;
  font-size: 12px;
  color: white;
`;

export const ViewDescription = styled.View`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const RowTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
