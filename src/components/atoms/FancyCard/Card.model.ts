import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues/IArrayValues.model';
import { TComponentSizes } from '@/interface/TComponentSizes';

// the raw styling props for the card
export interface StyledCardProps {
  shadow?: boolean;
  roundedEdges?: TArrayToCssValues;
  size?: TComponentSizes;
  padding?: boolean;
}
