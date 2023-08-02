import { css } from 'styled-components';
import Color from 'color';

import { disabledStyle } from './disableStyle';
import { calcIconPaddingAndAlign } from './generateIconPadding';
import { generatePadding } from './generatePadding';
import { borderRadius, spacing, uiColors } from '../Design/design';
import { IUiColorsTypes } from '../Design/design';
import IStyledPrefixAndOmiter from '../Interface/IStyledPrefixAndOmiter.model';

export interface IGenerateThemeItemProps {
  outlined?: boolean;
  icon?: JSX.Element;
  size: 'small' | 'medium' | 'large';
  label?: string;
  wide?: boolean;
  design: IUiColorsTypes;
  roundedCompletly?: boolean;
  align?: 'left' | 'right' | 'center';
  color?: 'primary' | 'secondary' | 'accent';
  hoverColor?: 'primary' | 'secondary' | 'accent';
}

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;

// --------------------------------------------------------------------------- //
// ---------- Here are the $design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
//a shortcut to align the ($icon) ond text
const alignment = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

//this are the values between the $icon and the edge of the button
const paddingIconButton = {
  small: spacing.md + 'px',
  medium: spacing.xl - 4 + 'px',
  large: spacing.xl + 'px',
};

// ------------------------------------------------------------------ //
// ---------- Here are the helper functions for the $design --------- //
// ------------------------------------------------------------------ //
//this hanles the padding of the button deppend on the $size and if needs a second value
type IcalcTextColor = Pick<IGenerateThemeItem, '$color' | '$design' | '$outlined'>;
const calcTextColor = ({ $color, $design, $outlined }: IcalcTextColor) => {
  if ($color) {
    return uiColors[$color].main;
  } else if ($outlined) {
    if($design === 'transparent') {
      return uiColors[$design].contrast;
    }
    return uiColors[$design].main;
  } else {
    return uiColors[$design].contrast;
  }
};

// -------------------------------------------------------------------------- //
// ---------- Here are the functions to generate the button styles ---------- //
// -------------------------------------------------------------------------- //

//-----this funktion adds to the normal/oulined button a $icon if its needed-----//
type IGenerateIconItem = Pick<IGenerateThemeItem, '$size' | '$align' | '$label'>;
const generateIcon = (props: IGenerateIconItem) => {
  const { $size, $align, $label } = props;

  //this funktion handles the spacing between the $icon and the text deepends on the alignment
  const calcIconButtoonPadding = ({ $align, $size }: Pick<IGenerateThemeItem, '$align' | '$size'>) => {
    if ($align === 'right') {
      return css`
        padding-right: ${paddingIconButton[$size]};
      `;
    } else if ($align === 'left') {
      return css`
        padding-left: ${paddingIconButton[$size]};
      `;
    } 
  };
  //this funktion reduces the padding to the edge && makes it look centered

  //this function generates the addons for a $icon button
  return css`
    align-items: center;
    ${$label && calcIconButtoonPadding({ $align, $size })};

    i {
      display: flex;
      align-items: center;
      ${$label && calcIconPaddingAndAlign({ $aligned: $align, $size })};
    }
  `;
};

//-----this funktion generates a button that looks like a $outlined button-----//
type IGenerateOutlinedItem = Pick<IGenerateThemeItem, '$design' | '$color' | '$size' | '$label' | '$outlined'>;
const generateOutlined = (props: IGenerateOutlinedItem) => {
  const { $design, $color, $size, $label, $outlined } = props;

  //reduce the padding with the border $size
  const paddings = generatePadding(-2, Boolean($label));

  //this calculates the textcolor depend on $design and $color
  const textColor = calcTextColor({ $color, $design, $outlined });

  //this makes the color, no matther which one transparent
  const backgroundColor = Color(uiColors[$design].main).alpha(0.1).hexa();

  const clacHoverColor = () => {
    if ($color) {
      return uiColors[$color].main;
    } else {
      if($design === 'transparent') {
        return uiColors[$design].contrast;
      }
      return uiColors[$design].main;
    }
  }

  return css`
    position: relative;
    background-color: transparent;
    padding: ${paddings[$size]};
    border: 1.5px solid ${uiColors[$design].main};
    color: ${textColor};

    &:hover:enabled {
      background-color: ${backgroundColor};
      color: ${clacHoverColor()};
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }
  `;
};

//-----this funktion generates a button that looks like a normal button-----//
type IGenerateNormalitem = Pick<IGenerateThemeItem, '$design' | '$size' | '$label' | '$hoverColor' | '$color' | '$outlined'>;
const generateNormal = (props: IGenerateNormalitem) => {
  const { $design, $size, $label, $hoverColor, $color, $outlined } = props;

  //reduce the padding with the border $size
  const paddings = generatePadding(0, !$label ? false : true);

  //this calculates the textcolor depend on $design and $color
  const textColor = calcTextColor({ $color, $design, $outlined });

// generates the hover style for the button
  const hoverBackgroundColorStyle = (($design === 'transparent') && $hoverColor) ? uiColors[$hoverColor].dark : uiColors[$design].dark;

  return css`
    background-color: ${uiColors[$design].main};
    color: ${textColor};
    padding: ${paddings[$size]};

    &:hover {
      ${$design === 'transparent' ?  'color: ' + uiColors.secondary.dark : ''};
      background-color: ${hoverBackgroundColorStyle};
      box-shadow: ${$design !== 'transparent' ?  '0 0 10px 1px rgba(0, 0, 0, 0.15)' : ''};
    }

    &:disabled {
      ${disabledStyle}
    }
  `;
};

const generateBorderRadius = (props: Pick<IGenerateThemeItem, '$wide' | '$roundedCompletly' | '$size'>) => {
  const { $wide, $roundedCompletly, $size } = props;
  if ($roundedCompletly) {
    return borderRadius.xxxl;
  } else if ($wide) {
    return borderRadius.large;
  } else {
    return borderRadius[$size];
  }
};

//-----this funktion handles the button style on his conditions-----//
const generateThemeItem = (props: IGenerateThemeItem) => {
  const { $outlined, $icon, $size, $label, $wide, $roundedCompletly, $align } = props;

  let iconStyle, borderRadius;

  //if the button a $outlined generate this, it his a normal generate an normal
  const itemStyle = $outlined ? generateOutlined(props) : generateNormal(props);

  //this claculates the borderradius depeend on if its a $wide button or not
  borderRadius = generateBorderRadius({$wide , $roundedCompletly, $size});

  //gets the style of a button with a $icon
  if ($icon) iconStyle = generateIcon(props);

  //check if the button has no $label if its true make it completely round
  if(Boolean(!$label) && !$wide) {
    borderRadius = '50%';
  }

  return css`
    display: flex;
    justify-content: ${$align && alignment[$align]};
    align-items: center;
    border: none;
    cursor: pointer;
    box-sizing: border-box;

    width: ${$wide ? '100%' : 'initial'};
    border-radius: ${borderRadius};
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    ${itemStyle}
    ${iconStyle}
  `;
};

export default generateThemeItem;
