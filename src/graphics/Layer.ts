import PepperContext from './PepperContext';

export interface CanvasDrawable {
  (ctx: CanvasRenderingContext2D): void
}

interface Layer extends CanvasDrawable {

}

export default Layer;
