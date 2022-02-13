import React from 'react';

import { Container, Description, Header, Title } from './styles';

interface CardProps {
  isRead: boolean;
  title: string;
  subject: string;
  detail: string;
  dateTime: string;
  onPress: () => void;
}

const Card = ({
  isRead,
  title,
  subject,
  detail,
  dateTime,
  onPress,
}: CardProps): JSX.Element => {
  return (
    <Container onPress={onPress}>
      <Header>
        <Title isBold={!isRead} numberOfLines={1}>
          {title}
        </Title>
        <Description isBold={!isRead}>{dateTime}</Description>
      </Header>
      <Description isBold={!isRead} numberOfLines={1}>
        {subject}
      </Description>
      <Description numberOfLines={1}>{detail}</Description>
    </Container>
  );
};

export default Card;
