import { css, styled } from 'styled-components';

import themeStore from '@/Components/Design/color/themeStore/themeStore';
import { systemMessageIndicatorStyle } from '@/Components/Design/designFunctions/generateSytemIncicator';
import { TUiColorsSystemMessage } from '@/Components/Interface/TUiColorsSystemMessage';

export const FancyBoxStyle = css``;

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const generateChipListStyle = (size: 'sm' | 'md' | 'lg', sytemMessage?: TUiColorsSystemMessage) => {
  const styemIndicatorStyle = systemMessageIndicatorStyle(sytemMessage);
  const getTheme = themeStore.getState().theme;
  let generatedStyle;

  switch (size) {
    case 'sm':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.xxl};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.sm};
        }
      `;
      break;
    case 'md':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.xxl};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.sm};
        }
      `;
      break;
    case 'lg':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.xxl};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.md};
        }
      `;
  }
  return css`
    ${styemIndicatorStyle}
    ${generatedStyle}
  `;
};