import { useEffect, useState } from 'react';
import { Coordinate } from '../graphics/measure/Rect';

const useMousePosition = (): Coordinate => {
  const [mousePosition, setMousePosition]: [Coordinate, any] = useState([0, 0]);

  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition([ev.clientX, ev.clientY]);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
