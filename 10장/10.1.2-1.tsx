import React from 'react';

const Component: React.VFC = () => {
  const store = new Store();
  return (
    <StoreProvider store={store}>
     <Children>
    </StoreProvider>
  );
};