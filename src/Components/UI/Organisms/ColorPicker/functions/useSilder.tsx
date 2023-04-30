import { useState, useRef, useEffect, useCallback } from 'react';
import Color from 'color';

interface IUseSlider {
  color?: Color | null;
  hue?: number;
  opacity?: number;
  type: 'hue' | 'opacity' | 'color';
  handlerSlider?: (value: number) => void;
  handlerColor?: (color: Color) => void;
  sliderPositionToColorFunc?: (clientX: number, rect: DOMRect) => number;
  positionToColorFunc?: (hue: number , clientX: number, clientY: number, rect: DOMRect) => { h: number; s: number; l: number } | number;
  colorToPositionFunc: (color: Color, rect: DOMRect) => { x: number; y: number };
}

interface IMarkerPosition {
  x: number;
  y: number;
}

interface IUseSliderReturn {
  sliderRef: React.MutableRefObject<any>;
  markerPosition: IMarkerPosition;
  handleInteractionStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
  isInteracting: boolean;
}

// throttle the interaction with the slider
const throttle = (func: (...args: any[]) => void): ((...args: any[]) => void) => {
  let isThrottled = false;
  
  return (...args: any[]) => {
    if (!isThrottled) {
      isThrottled = true;
      requestAnimationFrame(() => {
        func(...args);
        isThrottled = false;
      });
    }
  };
};


const useSlider = ({ color, hue,  type, sliderPositionToColorFunc ,positionToColorFunc, colorToPositionFunc, handlerSlider, opacity, handlerColor}: IUseSlider): IUseSliderReturn => {
  const [markerPosition, setMarkerPosition] = useState<IMarkerPosition>({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>();

  // update the position of the marker
  const updateMarkerPosition = useCallback(
    (color: Color) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = colorToPositionFunc(color, rect);
      setMarkerPosition(newPosition);
    },
    [colorToPositionFunc]
  );

  // handle the interaction with the slider
  const handleInteraction = useCallback(
    (clientX: number, clientY: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      if (type === 'hue') {
        const newColor = sliderPositionToColorFunc && sliderPositionToColorFunc(clientX,  rect);
        handlerSlider && handlerSlider(newColor ?? 0);
        const createColor = Color({ h: newColor, s: 100, l: 50 });
        updateMarkerPosition(createColor);
      } else if (type === 'opacity') {
        const newColor = sliderPositionToColorFunc && sliderPositionToColorFunc(clientX, rect);
        const alpha = Math.max(0, Math.min(newColor as number, 1)); 
        handlerSlider && handlerSlider(alpha ?? 1);
        const createColor = Color({r: 255, g: 255, b: 255}).alpha(alpha);
        updateMarkerPosition(createColor);
      } else {
        const newColor = positionToColorFunc && positionToColorFunc(hue ?? 0, clientX, clientY, rect);
        const createColor = Color(newColor);
        handlerColor && handlerColor(createColor);
        updateMarkerPosition(createColor);
      }
    },
    [ updateMarkerPosition, positionToColorFunc, type, color, hue, sliderPositionToColorFunc, opacity]
  );
  const throttledHandleInteraction = useCallback(throttle(handleInteraction), [handleInteraction]);
  
  // handle the start of the interaction with the slider
  const handleInteractionStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    if (event.nativeEvent instanceof MouseEvent) {
      event.preventDefault();
      throttledHandleInteraction(event.nativeEvent.clientX, event.nativeEvent.clientY);
    } else if (event.nativeEvent instanceof TouchEvent) {
      event.preventDefault();
      throttledHandleInteraction(event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY);
    }
  };

  // handle the interaction with the slider
  const handleInteractionMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isInteracting) return;
      if (event instanceof MouseEvent) {
        event.preventDefault();
        throttledHandleInteraction(event.clientX, event.clientY);
      } else if (event instanceof TouchEvent) {
        event.preventDefault();
        throttledHandleInteraction(event.touches[0].clientX, event.touches[0].clientY);
      }
    },
    [isInteracting, handleInteraction]
  );

  // handle the end of the interaction with the slider
  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  // set the initial position of the marker
  useEffect(() => {
    if (!sliderRef.current) return;

    //fallback for opacitySlider and hueSlider
    if(!color) type === 'hue' ? color = Color({ h: hue, s: 100, l: 50 }) : color = Color({r: 255, g: 255, b: 255}).alpha(1);
    
    const rect = sliderRef.current.getBoundingClientRect();
    const initialPosition = colorToPositionFunc(color, rect);
    setMarkerPosition(initialPosition);
  }, []);

  // set the event listeners for the inputs
  useEffect(() => {
    const handleInteractionMoveFunc = (event: MouseEvent | TouchEvent) => handleInteractionMove(event);
    const handleInteractionEndFunc = () => handleInteractionEnd();
    
    if (isInteracting) {
      window.addEventListener('mousemove', handleInteractionMoveFunc);
      window.addEventListener('touchmove', handleInteractionMoveFunc);
      window.addEventListener('mouseup', handleInteractionEndFunc);
      window.addEventListener('touchend', handleInteractionEndFunc);
    }

    return () => {
      window.removeEventListener('mousemove', handleInteractionMoveFunc);
      window.removeEventListener('touchmove', handleInteractionMoveFunc);
      window.removeEventListener('mouseup', handleInteractionEndFunc);
      window.removeEventListener('touchend', handleInteractionEndFunc);
    };
  }, [handleInteractionMove, handleInteractionEnd, isInteracting]);

  return { sliderRef, markerPosition, handleInteractionStart, isInteracting };
};

export default useSlider;
