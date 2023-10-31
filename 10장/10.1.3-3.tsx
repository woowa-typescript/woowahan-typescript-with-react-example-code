import React from 'react';

type Consumer<C> = () => C;

export interface ContextInterface<S> {
  state: S;
}

export function createContext<S, C = ContextInterface<S>>(): readonly [React.FC<C>, Consumer<C>] {
  const context = React.createContext<Nullable<C>>(null);

  const Provider: React.FC<C> = ({ children, ...otherProps }) => {
    return (
      <context.Provider value= {otherProps as C}>{children}</context.Provider>
    );
  };

  const useContext: Consumer<C> = () => {
    const _context = React.useContext(context);
    if (!_context) {
      throw new Error(ErrorMessage.NOT_FOUND_CONTEXT);
    }
    return _context;
  };

  return [Provider, useContext];
}

// Example
interface StateInterface {}
const [context, useContext] = createContext<StateInterface>();