import { styled, CSSProp, css } from 'styled-components';
import { TUiColorsType } from '../../../Design/color/designColor';
import { TLayer } from '../../../Design/color/generateColorSteps';
import IStyledPrefixAndPicker from '../../../Interface/IStyledPrefixAndPicker.model';
import { getBackgroundColor } from '../../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../../Design/color/colorTransparencyCalculator';

type HTMLDivElementProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
interface IgenerateThemeForCard {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: keyof TUiColorsType;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  style?: CSSProp;
}

export type IFancyBarProps = IgenerateThemeForCard & HTMLDivElementProps;

// Define the function to generate the outline style for the tab switch
type TGenerateOutlineStyle = IStyledPrefixAndPicker<IFancyBarProps, 'outlined' | 'themeType' | 'layer' | 'outlinedBackgroundStrength'> & {
  theme: TUiColorsType;
};
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $layer = 3, $outlinedBackgroundStrength = 0.5 } = props;

  // get theme background color
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 });

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: Math.max(1, $layer - 3) }),
    $outlinedBackgroundStrength
  );

  return css`
    background-color: ${generateSlightBackgroundColor};
    border: 1.5px solid ${backgroundColor};
  `;
};

// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
type TGenerateColorDesign = IStyledPrefixAndPicker<IFancyBarProps, 'themeType' | 'outlined' | 'layer' | 'outlinedBackgroundStrength'> & {
  theme: TUiColorsType;
};
export default function generateColorDesign(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength } = props;
  let outlinedStyle, backgroundColor;

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($outlined) {
    outlinedStyle = generateOutlineStyle({ $outlined, $themeType, theme, $layer, $outlinedBackgroundStrength });
  } else {
    backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 });
  }

  // padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
  return css`
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
}

// the styled-component for the FancyBar
type IStyledFancyBar = IStyledPrefixAndPicker<IFancyBarProps> & { theme: TUiColorsType };
export const StyledFancyBar = styled.div<IStyledFancyBar>`
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateColorDesign({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $style }) => $style};
`;
