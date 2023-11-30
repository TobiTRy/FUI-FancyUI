import { TFontSizes } from './IFontSizes';
import { TBorderRadiusSizes } from './TBorderRadius';
import { TUiColorsType } from './TUiColorsType';
import { TSpacings } from './TSpacings';
import { breakpoints } from '@/Components/Design/brakePoints';

//the structure for the theme object
export type TTheme = {
  colors: TUiColorsType;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: TFontSizes;
  breakpoints: {
    [key in keyof typeof breakpoints]: string;
  };
};