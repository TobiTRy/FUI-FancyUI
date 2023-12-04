import { styled } from 'styled-components';

import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/interface/TTheme';
import { fontSize } from '@/design/theme/designSizes';

// the style for a single input
interface StyledSingleInputProps {
  $hasValue: boolean;
  $isFocused: boolean;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
export const StyledSingleInput = styled.input<StyledSingleInputProps & { theme: TTheme }>`
  aspect-ratio: 4/5;
  width: 1.5ch;
  font-size: ${fontSize.xxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary[0]};
  border: 1.5px solid
    ${({ $hasValue, theme, $themeType = 'secondary', $layer }) =>
      $hasValue ? theme.colors.accent[0] : getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: ${({ $isFocused, theme }) => ($isFocused ? `0 0 2px 1px${theme.colors.accent[1]}` : 'none')};
`;