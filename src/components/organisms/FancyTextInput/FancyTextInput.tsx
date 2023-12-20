import React, { useId, useState } from 'react';

import TextInput, { ITextInputProps } from '@/components/molecules/TextInput/TextInput';
import { IInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/IInputWrapper.model';
import InputWrapper from '@/components/molecules/InputWrapper/InputWrapper';

type IFancyTextInputProps = ITextInputProps & Omit<IInputWrapperUserInputProps, 'InputElement'>;
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyTextInput(props: IFancyTextInputProps) {
  const {
    id,
    value,
    activeHandler,
    themeType,
    layer,
    placeholder,
    errorMessage,
    disabled,
    align,
    icon,
    label,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  return (
    <InputWrapper
      id={usedId}
      value={value}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      align={align}
      isActive={isActive}
      icon={icon}
      errorMessage={errorMessage}
      InputElement={
        <TextInput
          id={usedId}
          value={value}
          align={align}
          disabled={disabled}
          activeHandler={activeFocusHandler}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
