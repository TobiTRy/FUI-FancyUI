import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import {
  ITabSwitchDetailsLabelIcon,
  ITabSwitchDetailsChildren,
} from '../FancyTabSwitchButton/FancyTabSwitchButton.model';
import { TSpacings } from '@/types/TSpacings';
import { IActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export interface ITabSwitchProps {
  wide?: boolean;
  size?: TComponentSizes;
  textColor?: TThemeTypesNotTransparent;
  themeType?: TThemeTypes;
  layer?: TLayer;
  disabled?: boolean;
  tabSpacing?: TSpacings;
  values: ITabSwitchDetailsChildren[] & ITabSwitchDetailsLabelIcon[];
  rounded?: TBorderRadiusSizes;
  direction?: 'horizontal' | 'vertical';
  indicatorType?: IActiveSwitchIndicator['type'];
  outlined?: boolean;
  id?: string;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: TThemeTypesNotTransparent;
  handler?: (value: string) => void;
}
