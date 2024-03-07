import { useEffect } from 'react';
import { CSSProp } from 'styled-components';

import useFancyHandyNavStore from './FancyHandyNav.store';
import { TLayer } from '@/types/TLayer';

import FancyBottomBarIcon, { IFancyBottomBarIcon } from '@/components/templates/FancyBottomBarIcon/FancyBottomBarIcon';
import { RawNav } from '@/components/atoms/RawNav';
import { SwitchList } from '@/components/molecules/SwitchList';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { FancyBox } from '@/components/atoms/FancyBox';
import { ButtonWrapper, fancyBarStyle } from '@/components/templates/FancyHandyNav/FancyHandyNav.style';

interface IFancyHandyNav {
  items?: IFancyBottomBarIcon[];
  isVisible?: boolean;
  wichIndexIsActive?: string;
  themeType?: TUiColorsNotTransparent;
  themeTypeIcons?: TUiColorsNotTransparent;
  themeTypeSwitchList?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  className?: string;
}
// --------------------------------------------------------------------------- //
// ---------- A handyNavBar that can dynamicly generated via objects---------- //
// --------------------------------------------------------------------------- //
export default function FancyHandyNav(props: IFancyHandyNav) {
  const { items, isVisible, wichIndexIsActive, themeType, themeTypeIcons, themeTypeSwitchList, layer, externalStyle } =
    props;

  // setup a global zustand store for the visibility and the active index
  const isVisibleState = useFancyHandyNavStore((state) => state.isVisible);
  const setIsVisible = useFancyHandyNavStore((state) => state.setIsVisible);
  const stateWhichIsActive = useFancyHandyNavStore((state) => state.whichIsActive);
  const setWhichIsActiveState = useFancyHandyNavStore((state) => state.setWhichIsActive);

  // Set the default values / initial values
  useEffect(() => {
    setWhichIsActiveState(wichIndexIsActive ?? '0');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle the visibility of the nav
  useEffect(() => {
    setIsVisible(isVisible ?? true);
  }, [isVisible, setIsVisible]);

  return (
    <>
      {isVisibleState && (
        // The Navbar container
        <RawNav $externalStyle={externalStyle} className={props.className}>
          <FancyBox
            outlined={props.outlined}
            themeType={themeType}
            layer={layer}
            outlinedBackgroundStrength={props.outlinedBackgroundStrength}
            externalStyle={fancyBarStyle}
          >
            {/* The List with the items  */}
            <SwitchList
              whichIndexIsSelected={Number(stateWhichIsActive)}
              switchIndicator={{
                themeType: themeTypeSwitchList,
                indicatorWidth: '70%',
              }}
            >
              {items?.map((item, index) => (
                <ButtonWrapper key={index}>
                  <FancyBottomBarIcon
                    themeType={themeTypeIcons}
                    layer={layer}
                    isActive={Number(stateWhichIsActive) === index}
                    {...item}
                    onClick={() => {
                      setWhichIsActiveState(index.toString());
                      item.onClick && item.onClick();
                    }}
                  />
                </ButtonWrapper>
              ))}
            </SwitchList>
          </FancyBox>
        </RawNav>
      )}
    </>
  );
}
