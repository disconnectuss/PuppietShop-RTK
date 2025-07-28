import React from 'react';
import PackageProvider from './src/providers/PackageProvider';
import StoreProvider from './src/providers/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <PackageProvider />
    </StoreProvider>
  );
};

export default App;
