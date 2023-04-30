import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ColorArea from '../../Molecules/ColorArea/ColorArea';
import HueSlider from '../../Molecules/HueSlider';
import OpacitySlider from '../../Molecules/OpacitySlider/OpacitySlider';
import Color from 'color';
import { emitSelectedColorChange } from './colorPickerUtils';
import styled from 'styled-components';


//TODO: Handle color wgen the hue slider change



const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const roundValue = (value) => Math.round(value * 100) / 100;

const ColorPicker = ({ outputFormat = 'hsl', handler }) => {
  const [rawColor, setRawColor] = useState('hsl(0, 100%, 50%)');
  const [hue, setHue] = useState(0);
  const [opacity, setOpacity] = useState(1);
//create a calculated main color and use the normal only for the show (flicker on the color area)

  //this sets the main color that will be used in the app
  useMemo(() => {
    const calculatedMainColor = emitSelectedColorChange(rawColor, opacity, 'hsl');
    const calculateGiveBackColor = emitSelectedColorChange(rawColor, opacity, outputFormat);  

    handler(calculateGiveBackColor);
    return calculatedMainColor;
  }, [rawColor, opacity, outputFormat])

  //this function is handle the color change in the child ColorArea component
  const handleColorChange = (newColor) => {
    console.log('newColor', newColor)
    setRawColor(newColor);
  };

  //this function is handle the hue change in the child component
  const handleHueChange = (newHue) => {
    const roundHue = roundValue(newHue)
    setHue(roundHue);
  };

  //this function is handle the opacity change in the child component
  const handleOpacityChange = useCallback((newOpacity) => {

    const roundedOpacity = roundValue(newOpacity)
    setOpacity(roundedOpacity);
  }, [])



  const colorObj = Color(rawColor).alpha(opacity);

  return (
    <Wrapper>
      <ColorArea hue={hue} color={rawColor} handler={handleColorChange} />
      <HueSlider handler={handleHueChange} hue={hue} />
      <OpacitySlider color={colorObj} opacity={opacity} handler={handleOpacityChange} />
      {/* <ColorOutput pickedColor={color} opacity={opacity}/>  */}
    </Wrapper>
  );
};

export default ColorPicker;
