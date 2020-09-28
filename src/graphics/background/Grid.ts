import { CanvasDrawable } from '../Layer';
import { Color } from '../style/PepperStyle';
import { DEFAULT_GRID_COLOR, DEFAULT_GRID_OPACITY } from '../style';

export interface GridStyle {
  color?: Color;
  spacing: number;
  opacity?: number;
}

export interface GridConfig {
  showGrid: boolean;
}

export function grid({ color, spacing, opacity }: GridStyle): CanvasDrawable {
  return (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = color || DEFAULT_GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.globalAlpha = opacity || DEFAULT_GRID_OPACITY;

    for (
      let x = 0, y = 0;
      x < ctx.canvas.clientWidth || y < ctx.canvas.clientHeight;
      x += spacing, y += spacing
    ) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0); // + 0.5 to get real 1 pixel i.e disable antialiasing
      ctx.lineTo(x + 0.5, ctx.canvas.clientHeight);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(ctx.canvas.clientWidth, y + 0.5);
      ctx.stroke();
    }
  };
}
