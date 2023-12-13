import React from 'react';
import { sizes } from '@/components/organisms/FancyChip/sizeSettings';
import { TTheme } from '@/interface/TTheme';
import { styled } from 'styled-components';
import { SVGXCircle } from '@/components/icons/SVGXCircle';

type IXButtonProps = {
  size?: keyof typeof sizes;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function ChipXButton(props: IXButtonProps) {
  const { size, onClick, children, 'aria-label': ariaLabel, ...htmlProps } = props;

  return (
    <StyledXButton
      aria-label={ariaLabel || 'delete'}
      $size={size}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick;
      }}
      {...htmlProps}
    >
      {children || <SVGXCircle />}
    </StyledXButton>
  );
}

interface IXButton {
  $size?: keyof typeof sizes;
  theme: TTheme;
}
export const StyledXButton = styled.button<IXButton>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  padding: 0 ${({ theme }) => theme.spacing.xxs};
  line-height: 1;
  display: flex;
  align-items: center;

  svg {
    width: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
  }
`;
