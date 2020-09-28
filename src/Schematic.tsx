import React from 'react';
import Pepper from './Pepper';
import PepperStyle from './graphics/style/PepperStyle';
import PepperConfig from './graphics/PepperConfig';
import { initialSate } from './graphics/PepperState';

const Schematic = () => {
  const style: PepperStyle = {
    background: {
      fill: 'red',
    },
    grid: {
      // color: 'blue',
      spacing: 20,
      opacity: 1,
    },
  };

  const config: PepperConfig = {
    grid: {
      showGrid: true,
    },
  };

  const state = initialSate();
  return (
    <Pepper width={1300} height={1400} pepperStyle={style} pepperConfig={config} pepperSate={state} />
  );
};

export default Schematic;
