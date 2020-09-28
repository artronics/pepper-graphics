import { Selection } from './selection/SelectionState';

export const START_PLACING = 'START_PLACING';

interface StartPlacing {
  type: typeof START_PLACING;
  payload: string;
}

export function sendStartPlacing(payload: string): PepperAction {
  return {
    type: START_PLACING,
    payload,
  };
}

export type PepperAction = StartPlacing | Selection;
