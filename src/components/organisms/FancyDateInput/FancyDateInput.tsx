import { useId, useState } from 'react';

import DateInput from '@/components/atoms/DateInput/DateInput';
import { InputWrapper } from '@/components/molecules/InputWrapper';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';
import { TDateInputPropsWithNativeAttrs } from '@/components/atoms/DateInput/TDateInput.model';

type IFancyDateInput = Omit<TInputWrapperUserInputProps, 'InputElement'> & TDateInputPropsWithNativeAttrs;
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyDateInput(props: IFancyDateInput) {
  const {
    id,
    value,
    label,
    icon,
    systemMessage,
    align,
    disabled,
    themeType,
    layer,
    placeholder,
    onChange,
    transparentBackground,
    externalStyle,
    ...inputProps
  } = props;

  const [hasValue, setHasValue] = useState(!!value);
  //the states activity of the input
  const [isActiveState, setIsActiveState] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (isActive: boolean) => {
    if (value) setHasValue(true);
    setIsActiveState(isActive);
  };

  // wehen the input is empty, we set the hasValue state to false
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setHasValue(false);
  };

  return (
    <InputWrapper
      id={usedId}
      hasValue={!!value || !!hasValue || isActiveState} // if the input has a value or is active, the placeholder should be shown
      label={label}
      disabled={disabled}
      themeType={themeType}
      placeholder={placeholder}
      layer={layer}
      align={align}
      isActive={isActiveState}
      icon={icon}
      systemMessage={systemMessage}
      transparentBackground={transparentBackground}
      externalStyle={externalStyle}
      InputElement={
        <DateInput
          id={usedId}
          placeholder={placeholder}
          themeType={themeType}
          layer={layer}
          onChange={(e) => {
            changeHandler(e);
            onChange && onChange(e);
          }}
          value={value}
          onKeyDown={() => activeFocusHandler(true)}
          onFocus={(e) => {
            activeFocusHandler(true);
            props.onFocus && props.onFocus(e);
          }}
          onBlur={(e) => {
            activeFocusHandler(false);
            props.onBlur && props.onBlur(e);
          }}
          align={align}
          {...inputProps}
        />
      }
    />
  );
}
