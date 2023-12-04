import React, { forwardRef, useState } from 'react';

import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { StyledSingleInput } from './SingleInput.style';

// --------------------------------------------------------------------------- //
// --------- A Single Letter/NumberInput for a Verification process ---------- //
// --------------------------------------------------------------------------- //
interface ISingleInputAtomProps {
  value: string;
  ariaLabel?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
const SingleInputAtom = forwardRef<HTMLInputElement, ISingleInputAtomProps>((props, ref) => {
  const { value, ariaLabel, onKeyDown, themeType, layer } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSingleInput
      type="text"
      $themeType={themeType}
      $layer={layer}
      maxLength={1}
      value={value}
      onKeyDown={onKeyDown}
      ref={ref}
      aria-label={ariaLabel}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange={() => {}}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      $hasValue={value.length > 0}
      $isFocused={isFocused}
    />
  );
});

export default SingleInputAtom;