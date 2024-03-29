import { css } from 'styled-components';

import colorTransparencyCalculator from '@/design/designFunctions/colorTransparencyCalculator/colorTransparencyCalculator';

//global text-shadow
export const textShadow = {
  sm: css`
    text-shadow: 0 0 20px #0000009c;
  `,
  md: css`
    text-shadow: 0 0 15px #19191980;
  `,
  lg: css`
    text-shadow: 0 0 20px black;
  `,
};

//global box-shadow
export const boxShadow = {
  sm: css`
    ${() => {
      const themeColor = colorTransparencyCalculator('#000', 0.05);
      return `box-shadow: 0 0 1px 1px ${themeColor}, 0 0 0.5px ${themeColor};`;
    }}
  `,
  md: css`
    ${() => {
      const themeColor = colorTransparencyCalculator('#000', 0.1);
      return `box-shadow: 0 0 2px 1px ${themeColor}, 0 0 1px ${themeColor};`;
    }}
  `,
  lg: css`
    ${() => {
      const themeColor = colorTransparencyCalculator('#000', 0.1);
      return `box-shadow: 1px 0 23px ${themeColor};`;
    }}
  `,
};

export default boxShadow;
