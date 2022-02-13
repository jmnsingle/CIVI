import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import logo from '../../assets/images/logo.png';

import {
  Container,
  Content,
  GoBackButton,
  GoBackIcon,
  GoBackText,
  Logo,
  Title,
  TitleContainer,
} from './styles';

interface HeaderProps {
  title: string;
  hasGoBack?: boolean;
}

const Header = ({ title, hasGoBack }: HeaderProps): JSX.Element => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar backgroundColor={theme.COLORS.LIGHT} />
      <Content hasGoBack={hasGoBack}>
        {hasGoBack && (
          <GoBackButton onPress={handleGoBack}>
            <GoBackIcon>⬅</GoBackIcon>
            <GoBackText>Voltar</GoBackText>
          </GoBackButton>
        )}

        <Logo source={logo} />
      </Content>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Header;
