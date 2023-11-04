import React from "react";
import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

type TNativeButtonProps = React.HTMLAttributes<HTMLButtonElement> & { as?: 'button' };  
type TNativeAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export type IFancyBottomBarIcon = {
  id?: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  uniqekey?: string | number;
} & (TNativeButtonProps | TNativeAnchorProps);

