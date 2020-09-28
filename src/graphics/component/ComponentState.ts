import { Transformation, move as transformationMove, Translation } from '../measure/Transformation';

export const COMPONENT_PLACED = 'COMPONENT_PLACED';

export interface ComponentState {
  id: string;
  transformation: Transformation;
}

export type ComponentsState = Array<ComponentState>;

const initialState = (): ComponentsState => [{ id: 'res', transformation: transformationMove([300, 400]) }];

export interface ComponentPlaced {
  type: typeof COMPONENT_PLACED;
  payload: { id: string, translation: Translation }
}

export type ComponentAction = ComponentPlaced;

export const sendComponentPlaced = (id: string, transformation: Translation): ComponentAction => ({
  type: COMPONENT_PLACED,
  payload: {
    id,
    translation: transformation,
  },
});

export const componentReducer = (state: ComponentsState = initialState(), action: ComponentAction): ComponentsState => {
  switch (action.type) {
    case 'COMPONENT_PLACED':
      return state;
    default:
      return state;
  }
};
