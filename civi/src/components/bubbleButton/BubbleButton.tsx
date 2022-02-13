import React from 'react';

import reloadIcon from '../../assets/images/reload.png';

import { Container, Icon } from './styles';

interface Props {
  onPress: () => void;
}

const BubbleButton = ({ onPress }: Props): JSX.Element => {
  return (
    <Container onPress={onPress}>
      <Icon source={reloadIcon} />
    </Container>
  );
};

export default BubbleButton;
