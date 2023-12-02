import { styled, css } from 'styled-components';

import calcBorderRadiusOnAlignment from '../../../design/designFunctions/calcBorderRadiusOnAlignment/calcBorderRadiusOnAlignment';
import { IFancyUL } from './FancyDropDownUL';
import IStyledPrefixAndPicker from '../../../interface/IStyledPrefixAndPicker.model';
import { boxShadow } from '../../../design/designFunctions/shadows/shadows';
import { TThemeTypes } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';
import { getBackgroundColor } from '../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/interface/TTheme';

// --------------------------------------------------------------------------- //
// ------- the generator function for the Wrapper of the UL ------------------ //
// --------------------------------------------------------------------------- //
type IStyledUL = IStyledPrefixAndPicker<IFancyUL, 'width' | 'alignHorizontal' | 'alignVertical'>;
const generateWrapperUL = (props: IStyledUL) => {
  const { $width, $alignHorizontal, $alignVertical } = props;
  const setBorderRadius = calcBorderRadiusOnAlignment({ $alignHorizontal, $alignVertical });

  return css`
    ${setBorderRadius};
    position: absolute;
    overflow: hidden;
    width: ${$width};
    z-index: 100;
  `;
};

//this generates the wrapper for the UL
export const WrapperUL = styled.div<IStyledUL>`
  ${(props) => generateWrapperUL(props)};
`;

// --------------------------------------------------------------------------- //
// ------------------- the UL for the items and the style -------------------- //
// --------------------------------------------------------------------------- //
export const StyledUL = styled.ul<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $themeType = 'primary', $layer = 1 }) => getBackgroundColor({ theme, $themeType, $layer })};
  ${boxShadow.lg}
  gap: ${({ theme }) => theme.spacing.xs};
  overflow: hidden;

  li {
    list-style: none;
  }
`;