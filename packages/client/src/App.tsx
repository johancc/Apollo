import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { hot } from 'react-hot-loader/root';
import { Home } from './components/pages/Home/Home';

const App: React.FC = () => {
  const [user, setUser] = useState(undefined);
  return (
    <ChakraProvider>
      <Home
        onCreateAccount={() => {
          setUser('Ben Bitdiddle');
        }}
        onLogin={() => setUser('Ben Bitdiddle')}
        onLogout={() => setUser('Ben Bitdiddle')}
        user={user}
      />
    </ChakraProvider>
  );
};

export default hot(App);
