import { styled, css } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TTextAlign } from './FancyMiniProfile';
import { TUiColorsType } from '../../Design/color/designColor';

// this container wraps the whole component
interface IWrapper {
  $size?: keyof typeof spacingPx;
  $gapSpacing?: keyof typeof spacingPx;
}
export const Wrapper = styled.div<IWrapper & { theme: TUiColorsType }>`
  display: flex;
  align-items: center;
  padding: ${({ $size }) => ($size ? spacingPx[$size] : '')};
  gap: ${({ $gapSpacing }) => ($gapSpacing ? spacingPx[$gapSpacing] : spacingPx.xxs)};
  background-color: ${({ theme }) => theme.primary[2]};
  border-radius: ${borderRadius.complete};
`;

// this container wraps the texts (Heading, Subheading)
interface ITextWrapper {
  $alignText?: TTextAlign;
  $paddingToedge: keyof typeof spacingPx;
}
export const TextWrapper = styled.div<ITextWrapper>`
  // if alignText is left, then the order of the text is reversed
  ${({ $alignText, $paddingToedge }) =>
    $alignText === 'left'
      ? css`
          order: -1;
          text-align: right;
          margin-left: ${spacingPx[$paddingToedge]};
        `
      : css`
          margin-right: ${spacingPx[$paddingToedge]};
        `}
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
