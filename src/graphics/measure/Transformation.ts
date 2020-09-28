import { Coordinate } from './Rect';

export type Transformation = [
  [number, number, number],
  [number, number, number],
  [0, 0, 1]
];

const unit = (): Transformation => [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

export const move = ([x, y]: Coordinate, transformation?: Transformation): Transformation => {
  const t = transformation ?? unit();
  t[0][2] = t[0][2] + x;
  t[1][2] = t[1][2] + y;

  return t;
};
export type Translation = [number, number];
