import React from 'react';

import styled from 'styled-components';
import { IFancyButton } from './IFancyButton.model';

import generateThemeItem, { IGenerateThemeItem } from '../../HelperFunctions/generateThemeItem';
import SVGAtom from '../../Atoms/SVGAtom/SVGAtom';

//this creates the button component and handles the style via generateButton
const Button = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton({ ...props }: IFancyButton) {
  const { icon, label, size, onClick, disabled, wide, design, align, color, hoverColor, outlined } = props;

  return (
    <Button
      $size={size}
      $design={design}
      $align={align}
      $color={color}
      $wide={wide}
      $icon={icon}
      $hoverColor={hoverColor}
      $label={label}
      $outlined={outlined}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <SVGAtom size={size}>{icon}</SVGAtom>}
      {label && <span>{label}</span>}
    </Button>
  );
}

FancyButton.defaultProps = {
  design: 'accent',
  size: 'large',
  wide: true,
};
