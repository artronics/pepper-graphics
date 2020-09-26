import { CanvasDrawable } from '../Layer';
import { Coordinate } from '../measure/Rect';

function res([x, y]: Coordinate): CanvasDrawable {
  return (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.rect(x, y, 30, 30);
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 30, 30);
    ctx.stroke();
  };
}

export default res;
