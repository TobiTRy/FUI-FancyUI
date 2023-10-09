import React from 'react';
import SVGXCircle from '../../SVGIcons/SVGXCircle';
import ClipBoardIconCheck from '../../SVGIcons/SVGClipBoardIconChecked';

import Typography from '../../Atoms/Typography/Typography';
import { FancySVGAtom } from '../../Atoms/FancySVGAtom';
import { StyledChip, StyledXButton, TSpacingPosition, WrapperImage } from './FancyChip.style';
import { IChipProps } from './FancyChip.model';

// Define the Chip component
export default function FancyChip(props: IChipProps) {
  const { label, onDelete, icon, image, size, outlined, themeType, layer, textColor, textLayer, isActive } = { ...defaultProps, ...props };
  console.log(onDelete)

  // Define a function to calculate the spacing position for the chip
  const clacPosition = (): TSpacingPosition => {
    if (icon && onDelete) return 'booth';
    if (image && onDelete) return 'right';
    if (image) return 'right';
    if (onDelete) return 'booth';
    if (icon) return 'booth';
    return 'booth';
  };

  console.log(Boolean(onDelete))

  // Calculate the spacing po%sition for the chip
  const getCalcPosition = clacPosition();

  // Render the Chip component with the appropriate props
  return (
    <StyledChip
      $isActive={isActive}
      $spacingPosition={getCalcPosition}
      $size={size}
      $outlined={outlined}
      $themeType={themeType}
      $textColor={textColor}
      $layer={layer}
      $textLayer={textLayer}
      role={props.onClick ? 'button' : undefined}
      tabIndex={props.onClick ? 0 : undefined}
      onClick={props.onClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (props.onClick && (e.key === 'Enter' || e.key === 'Space')) {
          e.preventDefault();
          props.onClick();
        }
      }}
    >
      {image && (
        <WrapperImage>
          <img src={image} alt="chip" />
        </WrapperImage>
      )}
      {icon && (
        <FancySVGAtom isPassive size="sm">
          <ClipBoardIconCheck />
        </FancySVGAtom>
      )}

      <Typography type="smText" variant={size === 'lg' ? 'h5' : 'content'}>
        {label}
      </Typography>

      {onDelete && (
        <StyledXButton
          $size={size}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDelete && onDelete();
          }}
        >
          <SVGXCircle />
        </StyledXButton>
      )}
    </StyledChip>
  );
}

// Define the default props for the Chip component
const defaultProps = {
  label: 'Test',
  size: 'md' as const,
};