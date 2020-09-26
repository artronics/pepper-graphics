import React from 'react';
import Pepper from './Pepper';
import PepperStyle from './graphics/style/PepperStyle';
import PepperConfig from './graphics/PepperConfig';

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
    showGrid: true,
  };

  return (
    <Pepper width={1300} height={1400} pepperStyle={style} pepperConfig={config} />
  );
};

export default Schematic;
