import { IRoundedEdges } from '../../HelperFunctions/designFunctions/edgeCaluculation';
import { spacingPx } from '../../Design/designSizes';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TBorderRadiusSizes } from '@/Components/UI/Interface/TBorderRadius';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';

// the scaling types for the card
type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  themeType?: TUiColors;  
  textLayer?: TLayer;
  height?: IScaling;
  width?: IScaling;
  layer?: TLayer;
  shadow?: boolean;
  radius?: TBorderRadiusSizes;
  roundedEdges?: IRoundedEdges;
  padding?: keyof typeof spacingPx | false;
}
