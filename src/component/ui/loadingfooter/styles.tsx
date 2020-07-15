import styled from 'styled-components/native';

export const Indicator = styled.ActivityIndicator.attrs({
  color: 'white',
  size: 'large',
})`
  margin-top: 5px;
  margin-bottom: 8px;
`;

export const ContainerIndicator = styled.View`
  align-items: center;
  justify-content: center;
`;
