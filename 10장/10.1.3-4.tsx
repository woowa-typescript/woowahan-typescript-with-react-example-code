import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateProvider.Provider value={{ state, dispatch }}>
      <ComponentA />
      <ComponentB />
    </StateProvider.Provider>
  );
}