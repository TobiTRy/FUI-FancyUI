import React, { InputHTMLAttributes, useState } from 'react';
import { styled } from 'styled-components';

import RawInput, { TRawInputAlign } from '../../atoms/RawInput/RawInput';
import PasswordEye from '../../atoms/PasswordEye/PasswordEye';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { getBackgroundColor } from '../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/interface/TTheme';

const WrapperEye = styled.div<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  position: absolute;
  bottom: 6px;
  right: 4px;

  svg {
    color: ${({ theme, $themeType = 'secondary', $layer = 4 }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;

export interface IPasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string;
  align?: TRawInputAlign;
  activeHandler?: (value: boolean) => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// --------------- The passwordInputcomponent for only the input ------------- //
// --------------------------------------------------------------------------- //
export default function PasswordInput(props: IPasswordInputProps) {
  const { value, onChange, activeHandler, align, themeType, layer, ...HTMLInputProps } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);

  // this handler is for the eye icon to show the password
  const showPasswordHandler = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <WrapperEye $themeType={themeType} $layer={layer}>
        <PasswordEye isShow={isShowPassword} onClick={showPasswordHandler} />
      </WrapperEye>
      <RawInput
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onFocus={() => activeHandler && activeHandler(true)}
        onBlur={() => activeHandler && activeHandler(false)}
        $align={align}
        {...HTMLInputProps}
      />
    </>
  );
}
