import React, { useEffect, useRef } from 'react';
import PepperContext from './graphics/PepperContext';
import { Pepper as PepperApp } from './graphics/Pepper';
import PepperStyle from './graphics/style/PepperStyle';
import { Rect } from './graphics/measure/Rect';
import PepperConfig from './graphics/PepperConfig';

export interface PepperProps extends Rect {
  pepperStyle: PepperStyle;
  pepperConfig: PepperConfig;
}

const Pepper = (props: PepperProps) => {
  const { width, height, pepperStyle, pepperConfig } = props;

  const canvasBackgroundRef = useRef<HTMLCanvasElement>(null);
  const canvasStaticRef = useRef<HTMLCanvasElement>(null);
  const canvasInteractiveRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasBackground = canvasBackgroundRef.current?.getContext('2d');
    const canvasStatic = canvasStaticRef.current?.getContext('2d');
    const canvasInteractive = canvasInteractiveRef.current?.getContext('2d');

    const pepperContext: PepperContext = new PepperContext(canvasBackground!, canvasStatic!, canvasInteractive!, pepperStyle, pepperConfig);
    const app = new PepperApp(pepperContext);
    app.start();

  }, []);

  const canvasStyle = {
    position: 'absolute',
  } as React.CSSProperties;

  return (
    <div>
      <canvas style={canvasStyle} ref={canvasBackgroundRef} width={width} height={height}
              id="pepper-layer-background" />
      <canvas style={canvasStyle} ref={canvasStaticRef} width={width} height={height} id="pepper-layer-static" />
      <canvas style={canvasStyle} ref={canvasInteractiveRef} width={width} height={height}
              id="pepper-layer-interactive" />
    </div>
  );
};

export default Pepper;
