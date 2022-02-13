import React from 'react';
import { useRoute } from '@react-navigation/native';

import { MessageResponse } from '../../services/api/types';

import { Container, Content, DateTime, Detail, Subject, Title } from './styles';
import Header from '../../components/header/Header';

const Details = (): JSX.Element => {
  const { title, subject, detail, created_at } = useRoute()
    .params as MessageResponse;

  return (
    <Container>
      <Header hasGoBack title="Detalhes da mensagem" />
      <Content>
        <Title>{title}</Title>
        <Subject>{subject}</Subject>
        <Detail>{detail}</Detail>
        <DateTime>{created_at}</DateTime>
      </Content>
    </Container>
  );
};

export default Details;
