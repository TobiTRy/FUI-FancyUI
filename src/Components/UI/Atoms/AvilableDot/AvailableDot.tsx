import { styled } from 'styled-components';

import { systemMessages } from '../../Design/design';
import { borderRadius } from '../../Design/design';

// --------------------------------------------------------------------------- //
// ---------- A little Circle that indicates if something is avilable -------- //
// --------------------------------------------------------------------------- //
export type IAvailableDot = 'completly' | 'partially' | 'not' | 'transparent';
const AvailableDot = styled.div<{ $available?: IAvailableDot }>`
  width: 4px;
  height: 4px;
  border-radius: ${borderRadius.complete};
  background-color: ${({ $available = 'completly' }) => {
    switch ($available) {
      case 'completly':
        return  systemMessages.success.light;
      case 'partially':
        return systemMessages.warning.light;
      case 'not':
        return systemMessages.error.light;
      case 'transparent':
        return 'transparent';
    }
  }};
`;

AvailableDot.displayName = 'AvailableDot';

export default AvailableDot;
