import { Coordinate } from '../measure/Rect';
import { PepperAction, START_PLACING } from '../PepperAction';

export const START_SELECTING = 'START_SELECTING';
export const SELECTED = 'SELECTED';

export interface SelectionState {
  mouse: Coordinate;
  id: string;
}

const initialState = (): SelectionState => ({
  mouse: [0, 0],
  id: '',
});

interface Selected {
  type: typeof SELECTED;
  payload: Coordinate;
}

interface StartSelecting {
  type: typeof START_SELECTING;
  payload: Coordinate;
}

export type Selection = Selected | StartSelecting;

export function sendStartSelecting(payload: Coordinate): Selection {
  return {
    type: START_SELECTING,
    payload,
  };
}

export function sendSelected(payload: Coordinate): Selection {
  return {
    type: SELECTED,
    payload,
  };
}


export const selectionReducer = (state = initialState(), action: Selection) => {
  switch (action.type) {
    case 'SELECTED':
      return state;
    case 'START_SELECTING':
      return { ...state, mouse: action.payload };
    default:
      return state;
  }
};
