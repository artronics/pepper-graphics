import { GridStyle } from '../background/Grid';

export type Color = string


interface PepperStyle {
  background: {
    fill: Color;
  };
  grid: GridStyle;
}

export default PepperStyle;

