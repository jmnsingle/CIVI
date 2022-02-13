import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.LIGHT};
  padding: 0px 20px;
`;

export const Content = styled.ScrollView`
  padding: 20px 0px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 16px;
  font-weight: bold;
`;

export const Subject = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
`;

export const Detail = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 14px;
  margin-top: 14px;
`;

export const DateTime = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 14px;
  margin-top: 14px;
  font-weight: 600;
  text-align: right;
`;
