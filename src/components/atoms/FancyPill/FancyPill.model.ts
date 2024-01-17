import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export interface IFancyPill {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypesNotTransparent;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  isActive?: boolean;
  isHoverable?: boolean;
}

export type IFancyPillProps = IFancyPill & React.HTMLAttributes<HTMLDivElement>;
