import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  height: 80px;
  border-radius: 10px;
  background-color: 'rgba(255, 255, 255, 0.15)';
  width: 100%;
`;

export const ContainerElement = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ImageCharacter = styled.Image.attrs({
  // borderColor: '#ffffffff',
})`
  margin-left: 15px;
  border-radius: 50px;
  border-width: 1px;
  height: 60px;
  width: 60px;
  resize-mode: contain;
`;

export const TextName = styled.Text`
  margin-left: 20px;
  text-align: center;
  font-size: 19px;
  margin-bottom: 10px;
  color: #ffffffff;
`;
