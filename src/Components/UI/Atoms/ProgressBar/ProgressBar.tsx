import React from 'react';
import styled from 'styled-components';
import { borderRadius } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

// Define the styled component for the progress bar container
const ProgressBarContainer = styled.div<{theme: TUiColorsType, $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  width: 100%;
  height: 4px;
  background-color: ${({theme, $themeType = 'secondary', $layer = 4}) => getBackgroundColor({theme, $themeType, $layer})};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

// Define the interface for the progress bar fill props
interface IProgressBarFillProps {
  width: number;
  theme: TUiColorsType;
}
// Define the styled component for the progress bar fill
const ProgressBarFill = styled.div<IProgressBarFillProps>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.accent[0]};
  border-radius: ${borderRadius.complete} 0 0 ${borderRadius.complete};
  transition: width 0.2s ease-out;
`;

// Define the interface for the progress bar props
export interface IProgressBar {
  progress?: number;
  maxValue?: number;
  id?: string;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
// Define the ProgressBar component
export default function ProgressBar({ progress = 0, maxValue = 100, id, themeType, layer }: IProgressBar) {
  // Calculate the width of the progress bar fill
  const width = (progress / maxValue) * 100;

  // Render the ProgressBar component with the appropriate props
  return (
    <ProgressBarContainer id={id} role="progressbar" $themeType={themeType} $layer={layer} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={maxValue}>
      <ProgressBarFill width={width} />
    </ProgressBarContainer>
  );
}