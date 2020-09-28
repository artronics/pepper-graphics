import { Coordinate } from './measure/Rect';
import { SelectionState } from './selection/SelectionState';
import { ComponentState } from './component/ComponentState';

interface PepperState {
  components: Array<ComponentState>;
  isPlacing: boolean;
  selected: null | SelectionState;
}

export const initialSate = (): PepperState => ({
  components: [],
  isPlacing: false,
  selected: null,
});

export default PepperState;
