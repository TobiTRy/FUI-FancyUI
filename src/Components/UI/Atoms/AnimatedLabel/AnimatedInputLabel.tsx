import { styled, css } from 'styled-components';
import { colorPalet } from '../../Design/design';
import InputLabel from '../InputLabel/InputLabel';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { HTMLAttributes } from 'react';

const activeHandler = (align: string, $moveUp?: boolean) => {
  if (align !== 'center') {
    return css`
      bottom: 0;
      left: 0;
      ${$moveUp
        ? css`
            transform: translateY(-20px);
          `
        : ''}
    `;
  } else {
    return css`
      bottom: 0;
      left: 50%;
      text-align: center;
      ${$moveUp
        ? css`
            transform: translateY(-20px) translate(-50%);
          `
        : 'transform: translate(-50%);'};
    `;
  }
};



const StyledInputLabel = styled(InputLabel)<IAnimatedInputLabel & { theme?: TUiColorsType }>`
  position: absolute;
  padding: 12px 0 5px;
  color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
    switch ($colorState) {
      case 'error':
        return colorPalet.red_light;
      case 'active':
        return theme.accent[0];
      default:
        return getTextColor({ theme, $themeType, $textLayer: $layer });
    }
  }};

  ${({ $align, $moveUp }) => activeHandler($align!, $moveUp)};
`;


interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  children?: React.ReactNode;
  as?: React.ElementType;
  htmlFor?: string;
  theme?: TUiColorsType;
}
// --------------------------------------------------------------------------- //
// ---------- The input label wich hase some colors and an animation --------- //
// --------------------------------------------------------------------------- //
export default function AnimatedInputLabel(props: IAnimatedInputLabel & HTMLAttributes<HTMLLabelElement>) {
  return <StyledInputLabel {...props}>{props.children}</StyledInputLabel>;
}