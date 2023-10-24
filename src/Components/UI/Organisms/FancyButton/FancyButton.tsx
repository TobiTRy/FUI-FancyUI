import React from 'react';
import { styled } from 'styled-components';
import { IFancyButtonProps } from './IFancyButton.model';

import LoadingSVGArrows from '../../Atoms/LoadingSVGArrows/LoadingSVGArrows';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import { IGenerateThemeItem } from '../../HelperFunctions/designFunctions/generateItemTheme/IGenerateThemeItemProps.model';
import generateThemeItem from '../../HelperFunctions/designFunctions/generateItemTheme/generateThemeItem';

//this creates the button component and handles the style via generateButton
const Button = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton(props: IFancyButtonProps) {
  const {
    icon,
    label,
    size,
    wide,
    themeType,
    align,
    textColor,
    hoverColor,
    outlined,
    borderRadius,
    isLoading,
    layer,
    iconAlign,
    ...htmlButtonProps
  } = {
    ...defaultProps,
    ...props,
  };

  const showIcon = icon && !isLoading;
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button
      $size={size!}
      $themeType={themeType}
      $borderRadius={borderRadius}
      $align={align}
      $textColor={textColor}
      $wide={wide}
      $icon={icon}
      $hoverColor={hoverColor}
      $label={label}
      $outlined={outlined}
      $layer={layer}
      type="button"
      {...htmlButtonProps}
    >
      <FancyContent
        flexDirection={alignIcon}
        text={label}
        icon={showIcon ? icon : isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : null}
      />
    </Button>
  );
}

const defaultProps: IFancyButtonProps = {
  themeType: 'accent',
  size: 'lg',
  align: 'center',
};