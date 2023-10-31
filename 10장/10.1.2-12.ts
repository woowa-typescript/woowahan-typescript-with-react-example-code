import React, { useReducer } from 'react';

// Action 정의
type Action =
| { payload: ReviewFilter; type: 'filter'; }
| { payload: number; type: 'navigate'; }
| { payload: number; type: 'resize'; };
// Reducer 정의
const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'filter':
      return {
        filter: action.payload,
        page: 0,
        size: state.size,
      };
    case 'navigate':
      return {
        filter: state.filter,
        page: action.payload,
        size: state.size,
      };
    case 'resize':
      return {
        filter: state.filter,
        page: 0,
        size: action.payload,
      };
    default:
      return state;
    }
};

// useReducer 사용
const [state, dispatch] = useReducer(reducer, getDefaultState());
// dispatch 예시
dispatch({ payload: filter, type: 'filter' });
dispatch({ payload: page, type: 'navigate' });
dispatch({ payload: size, type: 'resize' });