import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';

function App() {
  const config = {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  };

  const customTheme = extendTheme({ config });
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <h1>Template with Snowpack, ESLint, Prettier, Chakra-UI</h1>
    </ChakraProvider>
  );
}

export default App;
