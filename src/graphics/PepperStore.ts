import PepperState, { initialSate } from './PepperState';
import { PepperAction, START_PLACING } from './PepperAction';
import { combineReducers, createStore } from 'redux';
import { selectionReducer } from './selection/SelectionState';
import { componentReducer } from './component/ComponentState';

const reducer = (state: PepperState = initialSate(), action: PepperAction) => {
  switch (action.type) {
    case START_PLACING:
      return { ...state, isPlacing: true };
    default:
      return state;
  }
};

export const store = createStore(combineReducers({
  components: componentReducer,
  selection: selectionReducer,
}));

