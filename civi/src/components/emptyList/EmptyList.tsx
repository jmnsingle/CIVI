import React from 'react';

import { Container, Title } from './styles';

interface Props {
  title: string;
}

const EmptyList = ({ title }: Props): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default EmptyList;
