import counterState from '../states/counterState';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(value = 1) {
  return { type: INCREMENT,
           value };
}

export function decrement(value = 1) {
  return { type: DECREMENT,
           value };
}


export const actions = {
  increment,
  decrement
};


export default function counterReducer(state = counterState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', state.get('counter') + action.value);
    case DECREMENT:
      return state.set('counter', state.get('counter') - action.value);
    default:
      return state;
  }
}
