import { CSSProp } from 'styled-components';

// Define the possible positions for the overlay
export type TPositions =
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'top-center';

// Define the props for the ImageVideoOverlay component
export type TFancyTextOverlay = {
  children?: React.ReactNode;
  textChildren?: React.ReactNode;
  position?: TPositions;
  externalStyle?: CSSProp;
};

export type TImageVideoOverlayWithHTMLAttrs = TFancyTextOverlay & React.HTMLAttributes<HTMLDivElement>;