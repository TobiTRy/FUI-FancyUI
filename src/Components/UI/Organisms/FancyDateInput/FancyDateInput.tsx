import React, { useId, useState } from 'react';

import DateInput, { IDateInputProps } from '../../Molecules/DateInput/DateInput';
import InputWrapper, { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

type  IFancyDateInput =  IInputWrapperUserInputProps & IDateInputProps;
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyDateInput(props: IFancyDateInput) {
  const { id, value, label, icon, errorMessage, align,  disabled,  activeHandler, ...inputProps } = props;

  //the states activity of the input
  const [isActiv, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;
  
  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  return (
    <InputWrapper id={usedId} value={value} label={label} disabled={disabled} align={align} isActiv={isActiv} icon={icon} errorMessage={errorMessage}>
      <DateInput
        id={usedId}
        value={value}
        activeHandler={activeFocusHandler}
        align={align}
        {...inputProps}
      />
    </InputWrapper>
  );
}
