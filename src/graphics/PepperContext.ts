import PepperStyle from './style/PepperStyle';
import PepperConfig from './PepperConfig';

class PepperContext {
  private readonly _backgroundContext: CanvasRenderingContext2D;
  private readonly _staticContext: CanvasRenderingContext2D;
  private readonly _interactiveContext: CanvasRenderingContext2D;
  private readonly _style: PepperStyle;
  private readonly _config: PepperConfig;

  constructor(backgroundContext: CanvasRenderingContext2D, staticContext: CanvasRenderingContext2D, interactiveContext: CanvasRenderingContext2D, style: PepperStyle, config: PepperConfig) {
    this._backgroundContext = backgroundContext;
    this._staticContext = staticContext;
    this._interactiveContext = interactiveContext;
    this._style = style;
    this._config = config;
  }

  get backgroundContext(): CanvasRenderingContext2D {
    return this._backgroundContext;
  }

  get interactiveContext(): CanvasRenderingContext2D {
    return this._interactiveContext;
  }

  get staticContext(): CanvasRenderingContext2D {
    return this._staticContext;
  }

  get style(): PepperStyle {
    return this._style;
  }

  get config(): PepperConfig {
    return this._config;
  }
}

export default PepperContext;
