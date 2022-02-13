import styled from 'styled-components/native';

interface CardProps {
  isBold?: boolean;
}

export const Container = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.DARK};
  margin-top: 14px;
  padding: 8px 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text<CardProps>`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 16px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  margin-right: 5px;
  flex: 1;
`;

export const Description = styled.Text<CardProps>`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 14px;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
`;
