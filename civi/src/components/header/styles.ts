import styled from 'styled-components/native';

interface ContentProps {
  hasGoBack?: boolean;
}

export const Container = styled.View``;

export const Content = styled.View<ContentProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({ hasGoBack }) =>
    hasGoBack ? 'space-between' : 'center'};
`;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 0px;
`;

export const GoBackIcon = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 22px;
  font-weight: bold;
`;

export const GoBackText = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin-top: 10px;
  height: 40px;
  width: 100px;
`;

export const TitleContainer = styled.View`
  height: 44px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  margin-top: 20px;
`;
