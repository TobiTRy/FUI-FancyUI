import React from "react";
import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

export interface IFancyBottomBarIcon {
  id?: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  secondBar?: boolean;
  handler?: () => void;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}