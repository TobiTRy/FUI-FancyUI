import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { spacingPx } from "../../Design/designSizes";
import { TBorderRadiusSizes } from "@/Components/UI/Interface/TBorderRadius";
import {ITabSwitchDetailsLabelIcon , ITabSwitchDetailsChildren } from "../FancyTabSwitchButton/FancyTabSwitchButton.model";

export interface ITabSwitchProps {
  wide?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColor?: keyof TUiColorsType;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  disabled?: boolean;
  tabSpacing?: keyof typeof spacingPx;
  values: ITabSwitchDetailsChildren[] & ITabSwitchDetailsLabelIcon[];
  rounded?: TBorderRadiusSizes;
  direction?: 'horizontal' | 'vertical';
  outlined?: boolean;
  id?: string;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: keyof TUiColorsType;
  handler?: (value: string) => void;
}