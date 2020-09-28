import React, { useEffect, useRef } from 'react';
import PepperContext from './graphics/PepperContext';
import { Pepper as PepperApp } from './graphics/Pepper';
import PepperStyle from './graphics/style/PepperStyle';
import { Coordinate, Rect } from './graphics/measure/Rect';
import PepperConfig from './graphics/PepperConfig';
import PepperState from './graphics/PepperState';
import { store } from './graphics/PepperStore';
import { START_PLACING } from './graphics/PepperAction';
import useMousePosition from './effects/useMousePosition';
import { sendStartSelecting, START_SELECTING } from './graphics/selection/SelectionState';

export interface PepperProps extends Rect {
  pepperStyle: PepperStyle;
  pepperConfig: PepperConfig;
  pepperSate: PepperState;
}

const Pepper = (props: PepperProps) => {
  const { width, height, pepperStyle, pepperConfig } = props;

  const canvasBackgroundRef = useRef<HTMLCanvasElement>(null);
  const canvasStaticRef = useRef<HTMLCanvasElement>(null);
  const canvasInteractiveRef = useRef<HTMLCanvasElement>(null);

  let mousePosition: Coordinate = [0, 0];
  const updateMousePosition = (ev: MouseEvent) => {
    mousePosition = [ev.clientX, ev.clientY];
  };
  window.addEventListener('mousemove', updateMousePosition);


  useEffect(() => {
    const canvasBackground = canvasBackgroundRef.current?.getContext('2d');
    const canvasStatic = canvasStaticRef.current?.getContext('2d');
    const canvasInteractive = canvasInteractiveRef.current?.getContext('2d');

    const pepperContext: PepperContext = new PepperContext(canvasBackground!, canvasStatic!, canvasInteractive!, pepperStyle, pepperConfig, store);
    const app = new PepperApp(pepperContext);
    app.start();

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // store.dispatch({ type: START_PLACING, payload: 'kir' });
  const canvasStyle = {
    position: 'absolute',
  } as React.CSSProperties;

  return (
    <div onClick={() => store.dispatch(sendStartSelecting(mousePosition))}>
      <canvas style={canvasStyle} ref={canvasBackgroundRef} width={width} height={height}
              id="pepper-layer-background" />
      <canvas style={canvasStyle} ref={canvasStaticRef} width={width} height={height} id="pepper-layer-static" />
      <canvas style={canvasStyle} ref={canvasInteractiveRef} width={width} height={height}
              id="pepper-layer-interactive" />
    </div>
  );
};

export default Pepper;
