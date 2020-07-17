import styled from 'styled-components/native';

export const DetailContainer = styled.View`
  align-items: center;
  padding-top: 10px;
  padding-bottom: 5px;
  height: 100%;
  width: 100%;
`;

export const SubContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #06ba8a;
`;

export const CharacterImage = styled.Image.attrs({resizeMode: 'contain'})`
  border-radius: 90px;
  border-width: 3px;
  margin-top: 20px;
  height: 180px;
  width: 180px;
`;

export const TextName = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
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
