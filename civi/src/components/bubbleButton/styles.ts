import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  border-radius: 23px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 50px;
  width: 100%;
`;
