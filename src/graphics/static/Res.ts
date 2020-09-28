import { CanvasDrawable } from '../Layer';
import { Coordinate } from '../measure/Rect';
import Component, { DefaultComponent } from '../Component';

function res(): CanvasDrawable {
  return (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.rect(10, 0, 30, 30);
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 0, 30, 30);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 15);
    ctx.lineTo(50, 15);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  };
}

export class ResComponent extends DefaultComponent {
  private readonly _config?: any;
  private readonly _style?: any;
  private readonly _context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D, config?: any, style?: any) {
    super('res');
    this._config = config;
    this._style = style;
    this._context = context;
  }

  render(): void {
    // res([30, 40])(this._context);
    res()(this._context);
  }
}


export default res;
