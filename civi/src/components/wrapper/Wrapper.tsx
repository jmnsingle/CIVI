import React from 'react';

import { Container } from './styles';

interface Props {
  children: JSX.Element;
}

const Wrapper = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Wrapper;
