import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'PLUS' });
// 1
store.dispatch({ type: 'PLUS' });
// 2
store.dispatch({ type: 'MINUS' });
// 1