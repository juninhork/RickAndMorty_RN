import styled from 'styled-components/native';

export const Indicator = styled.ActivityIndicator.attrs({
  color: '#06ba8a',
  size: 'large',
})`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ContainerIndicator = styled.View`
  align-items: center;
  justify-content: center;
`;
