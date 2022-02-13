import React from 'react';
import { ThemeProvider } from 'styled-components';

import Wrapper from './src/components/wrapper/Wrapper';
import Routes from './src/routes/routes';
import theme from './src/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Routes />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
