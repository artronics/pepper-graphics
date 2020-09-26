import PepperContext from './PepperContext';
import { grid } from './background/Grid';
import { CanvasDrawable } from './Layer';
import res from './static/Res';

const drawAndReset = (drawable: CanvasDrawable, ctx: CanvasRenderingContext2D) => {
  ctx.save();
  drawable(ctx);
  ctx.restore();
};

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
};

export class Pepper {
  readonly context: PepperContext;

  constructor(context: PepperContext) {
    this.context = context;

    clearCanvas(this.context.backgroundContext);
    clearCanvas(this.context.staticContext);
    clearCanvas(this.context.interactiveContext);
  }

  start(): void {
    console.log('start');
    if (this.context.config.showGrid) {
      drawAndReset(grid(this.context.style.grid), this.context.backgroundContext);
    }
    drawAndReset(res([200, 100]), this.context.staticContext);
  }

}

