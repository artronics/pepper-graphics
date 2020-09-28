import PepperContext from './PepperContext';
import { grid, GridConfig, GridStyle } from './background/Grid';
import { CanvasDrawable } from './Layer';
import res, { ResComponent } from './static/Res';
import Component from './Component';
import PepperState from './PepperState';
import { ComponentState } from './component/ComponentState';
import { Transformation, Translation } from './measure/Transformation';

const drawAndReset = (drawable: CanvasDrawable, ctx: CanvasRenderingContext2D, transformation?: Transformation) => {
  ctx.save();
  if (transformation) {
    const [[a, c, e], [b, d, f]] = transformation;
    ctx.transform(a, b, c, d, e, f);
  }
  drawable(ctx);
  ctx.restore();
};

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
};

const drawGrid = (config: GridConfig, style: GridStyle, ctx: CanvasRenderingContext2D) => {
  if (config.showGrid) {
    drawAndReset(grid(style), ctx);
  }
};

const createComponentsLibrary = () => (
  {
    'res': res(),
  }
);

export class Pepper {
  private readonly context: PepperContext;
  private readonly backgroundLayerItems: Array<Component> = [];
  private readonly componentLibrary: Record<string, CanvasDrawable> = createComponentsLibrary();

  constructor(context: PepperContext) {
    this.context = context;

    clearCanvas(this.context.backgroundContext);
    clearCanvas(this.context.staticContext);
    clearCanvas(this.context.interactiveContext);

    context.store.subscribe(() => this.handleStateChange(context.store.getState()));
  }

  private handleStateChange(state: PepperState) {
    console.log(state);
    clearCanvas(this.context.staticContext);
    this.drawComponents(state.components);
  }

  private drawComponents(components: Array<ComponentState>) {
    components.forEach((component) => {
      const drawer = this.componentLibrary[component.id];
      drawAndReset(drawer, this.context.staticContext, component.transformation);
    });
  }

  start(): void {
    console.log('start');
    drawGrid(this.context.config.grid, this.context.style.grid, this.context.backgroundContext);
    this.handleStateChange(this.context.store.getState());
  }

  addToBackgroundLayer(item: Component) {
    this.backgroundLayerItems.push(item);
  }

}

