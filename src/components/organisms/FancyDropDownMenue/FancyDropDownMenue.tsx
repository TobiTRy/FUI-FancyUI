import React, { useEffect, useState } from 'react';

import FancyUL, { IFancyUL } from '../../molecules/FancyDropDownUL/FancyDropDownUL';
import Delay from '../../shared/Delay/Delay';
import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TUiColors';

// --------------------------------------------------------------------------- //
// ------------ The main component that renders the dropdown menu ------------ //
// --------------------------------------------------------------------------- //
interface IFancyDropDownMenue extends IFancyUL {
  isOpen?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
export default function FancyDropDownMenue(props: IFancyDropDownMenue) {
  const { isOpen } = props;
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [fristRender, setFristRender] = useState(false);

  // This useEffect hook sets the fristRender state to true after the component mounts
  useEffect(() => {
    setFristRender(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpenState(true);
    } else {
      setIsOpenState(false);
    }
  }, [isOpen]);

  // This component returns the FancyUL component wrapped in a Delay component
  return fristRender ? (
    <Delay delay={600} externalStateBool={isOpenState}>
      <FancyUL isOpen={isOpen} {...props} />
    </Delay>
  ) : null;
}
